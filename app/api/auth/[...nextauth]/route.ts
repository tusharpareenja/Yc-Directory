import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Create an instance of NextAuth
const authHandler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async jwt({ token, account, profile }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
});

// Named exports for the HTTP methods
export const GET = authHandler;  // Handling GET requests
export const POST = authHandler; // Handling POST requests
