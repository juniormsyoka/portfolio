// app/api/revalidate/route.ts

import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  
  // Security: use a secret token
  if (auth !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return new Response('Invalid token', { status: 401 });
  }
  
  revalidatePath('/');
  revalidatePath('/projects');
  
  return new Response('Revalidated', { status: 200 });
}