import { NextRequest } from 'next/server';
import { validateAdminCredentials, createAuthResponse } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return createAuthResponse(false);
    }
    
    const result = await validateAdminCredentials(username, password);
    return createAuthResponse(result.success);
    
  } catch (error) {
    console.error('Auth error:', error);
    return createAuthResponse(false);
  }
}

export async function DELETE() {
  const response = createAuthResponse(false);
  response.cookies.delete('admin-token');
  return response;
}