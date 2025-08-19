import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

// Simple admin credentials - in production, store these securely
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = '$2a$12$LQv3c1yqBWVHxkd0LQ4YCOJa57dDd0rBLRm8lMHOFB5o4bKZjJQG6'; // 'admin123'

export interface AuthResult {
  success: boolean;
  message?: string;
}

export async function validateAdminCredentials(username: string, password: string): Promise<AuthResult> {
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