import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",  // Redirect to this page if the user is not authenticated
  },
});
 
export const config = {
  matcher: ["/" , "/dashboard"],  // Protects the homepage
};
