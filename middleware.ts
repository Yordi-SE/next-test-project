import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: any) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Debugging logs
    console.log(`Middleware - Path: ${pathname}`);
    console.log(`Middleware - Token: ${token ? "Present" : "Absent"}`);

    // If token exists, proceed to the requested page
    if (token) {
      return NextResponse.next();
    }

    // If no token, redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(`Authorized Check - Token: ${token ? "Present" : "Absent"}`);
        return !!token; // Only allow if token exists
      },
    },
    pages: {
      signIn: "/login", // Ensure this matches your login page
    },
  }
);

export const config = {
  matcher: ["/", "/contact", "/features", "/about"],
};