// import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//   publicRoutes: ['/'],

// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };


import { NextRequest, NextResponse } from 'next/server';

// This function acts as a simple middleware that logs the path of each request
export default function middleware(req: NextRequest) {
  console.log('Handling request for:', req.nextUrl.pathname);

  // Continue processing the request normally after middleware operations
  return NextResponse.next();
}

// Optional: configure which paths this middleware applies to
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};