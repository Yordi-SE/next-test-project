import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req:any) {
    if (
      (req.nextUrl.pathname == "/" ||
        req.nextUrl.pathname == "/contact" ||
        req.nextUrl.pathname == "/features" ||
        req.nextUrl.pathname == "/about") 
    )
      return NextResponse.rewrite(
        new URL("/auth/login?message=You Are Not Authorized!", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }:{token:any}) => !!token,
    },
  }
);
export const config = {
  matcher: [
    "/contact",
    "/about",
    "/features",
    "/",
  ],
};