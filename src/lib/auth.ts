import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

// Admin credentials - temporarily hardcoded due to env var issues
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = '$2a$12$BQDFrIE4s0bWwZSinaoNYu672OGAV8eDRlQfo1Y/q7IXVcRoWmAJS';

export interface AuthResult {
  success: boolean;
  message?: string;
}

export async function validateAdminCredentials(username: string, password: string): Promise<AuthResult> {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
    return { success: false, message: 'Admin credentials not configured' };
  }

  if (username !== ADMIN_USERNAME) {
    return { success: false, message: 'Invalid credentials' };
  }

  const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  
  if (!isValid) {
    return { success: false, message: 'Invalid credentials' };
  }

  return { success: true };
}

export function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get('admin-token');
  return token?.value === 'authenticated';
}

export function createAuthResponse(isValid: boolean): NextResponse {
  const response = NextResponse.json({ success: isValid });
  
  if (isValid) {
    response.cookies.set('admin-token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    });
  } else {
    response.cookies.delete('admin-token');
  }
  
  return response;
}