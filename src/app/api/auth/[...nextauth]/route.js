import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

export const authOpton = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOpton);

export { handler as GET, handler as POST };
