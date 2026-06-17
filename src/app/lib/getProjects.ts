// lib/getProjects.ts

import { fetchGithubRepos, type GithubRepo } from './github';
import overrides from './project-overrides.json';
import { type Project, defaultProjectImage } from '../lib/Projects';

// Use any to bypass complex type checking
const overridesAny = overrides as any;

function formatTitle(repoName: string): string {
  return repoName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/Api\b/i, 'API')
    .replace(/Frontend?\b/i, 'Frontend')
    .replace(/Backend?\b/i, 'Backend');
}

function detectCategory(repo: GithubRepo, overrideCategory?: string): Project['category'] {
  if (overrideCategory) return overrideCategory as Project['category'];
  
  const name = repo.name.toLowerCase();
  const language = repo.language?.toLowerCase() || '';
  
  if (name.includes('mobile') || name.includes('music') || name.includes('blind')) return 'mobile';
  if (name.includes('classification') || name.includes('predictor') || language === 'python') return 'ml';
  if (name.includes('backend') || name.includes('api')) return 'backend';
  if (name.includes('frontend') || name.includes('front')) return 'frontend';
  return 'fullstack';
}

export async function getAllProjects(): Promise<Project[]> {
  const repos = await fetchGithubRepos({ sort: 'pushed', per_page: 50 });
  
  const projects = await Promise.all(
    repos.map(async (repo): Promise<Project> => {
      const override = overridesAny[repo.name] || {};
      
      // Get technologies from override or repo language
      let technologies: string[] = [];
      if (override.technologies && Array.isArray(override.technologies)) {
        technologies = override.technologies;
      } else if (repo.language) {
        technologies = [repo.language];
      }
      
      return {
        id: repo.id,
        name: repo.name,
        title: override.title || formatTitle(repo.name),
        description: repo.description || "No description available.",
        longDescription: override.longDescription || repo.description || "Check the GitHub repository for more details.",
        technologies,
        githubUrl: repo.html_url,
        liveUrl: override.liveUrl || repo.homepage || undefined,
        category: detectCategory(repo, override.category),
        featured: override.featured !== undefined ? override.featured : (repo.stargazers_count > 0),
        imageUrl: override.imageUrl || defaultProjectImage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        language: repo.language || undefined,
        challenges: override.challenges || [],
        solutions: override.solutions || [],
      };
    })
  );
  
  // Sort: featured first, then by stars, then by last updated
  return projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if ((b.stars || 0) !== (a.stars || 0)) return (b.stars || 0) - (a.stars || 0);
    return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter(p => p.featured);
}

export async function getProjectsByCategory(category: Project['category']): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter(p => p.category === category);
}

export async function getProjectByName(name: string): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find(p => p.name === name);
}
export async function getProjectById(id: number): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find((p) => p.id === id);
}

