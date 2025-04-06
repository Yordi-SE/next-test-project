import NextAuth, { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        // Replace this with your actual authentication logic (e.g., database check)
        // For now, simulate a successful login with hardcoded credentials
        if (email && password) {
          return {
            id: "1", // Required
            email: email,
            name: "Test User",
          };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userData = user; // Store user data in the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.userData as {
        id: string;
        name?: string | null;
        email?: string | null;
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    newUser: "/signup",
  },
};

export default NextAuth(options);