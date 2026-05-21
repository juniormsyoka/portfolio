// lib/github.ts

const GITHUB_USERNAME = 'juniormsyoka';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  pushed_at: string;
  size: number;
  topics: string[];
  languages_url: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
};

export async function fetchGithubRepos(options?: {
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  direction?: 'asc' | 'desc';
  per_page?: number;
}): Promise<GithubRepo[]> {
  const { sort = 'updated', direction = 'desc', per_page = 100 } = options || {};
  
  const params = new URLSearchParams({
    sort,
    direction,
    per_page: per_page.toString(),
  });
  
  const response = await fetch(`${GITHUB_API_URL}?${params}`, {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  const repos: GithubRepo[] = await response.json();
  
  // Filter out forks and archived repos
  return repos.filter(repo => !repo.fork && !repo.archived && !repo.disabled);
}

export async function fetchRepoLanguages(repoLanguagesUrl: string): Promise<string[]> {
  const response = await fetch(repoLanguagesUrl, {
    next: { revalidate: 86400 }, // languages change rarely
  });
  
  if (!response.ok) return [];
  
  const languages: Record<string, number> = await response.json();
  return Object.keys(languages);
}

// Batch fetch languages for all repos (optional, for server-side)
export async function fetchAllReposWithLanguages(): Promise<(GithubRepo & { allLanguages: string[] })[]> {
  const repos = await fetchGithubRepos();
  
  const reposWithLanguages = await Promise.all(
    repos.map(async (repo) => {
      const allLanguages = await fetchRepoLanguages(repo.languages_url);
      return { ...repo, allLanguages };
    })
  );
  
  return reposWithLanguages;
}