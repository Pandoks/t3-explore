import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["index"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/'"],
};
