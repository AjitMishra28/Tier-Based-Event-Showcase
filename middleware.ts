// middleware.ts (root)
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Keep auth pages and home public; adjust as you like
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};