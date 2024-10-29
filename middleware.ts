import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedPaths = ['/dashboard', '/confidence-quiz', '/interview-prep'];
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  // Auth routes
  const authPaths = ['/login', '/signup'];
  const isAuthPath = authPaths.some(path => pathname.startsWith(path));

  // Redirect authenticated users away from auth pages
  if (authCookie && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to login
  if (!authCookie && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/confidence-quiz/:path*',
    '/interview-prep/:path*',
    '/login',
    '/signup'
  ],
};