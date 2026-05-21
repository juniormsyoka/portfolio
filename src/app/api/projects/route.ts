// app/api/projects/route.ts (Next.js App Router)

import { getAllProjects } from '@/app/lib/getProjects';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}