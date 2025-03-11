import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the studio route
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Get the isLoggedIn value from cookies
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true'

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/studio/:path*',
} 