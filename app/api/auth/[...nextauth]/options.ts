import CredentialsProvider from "next-auth/providers/credentials";

import { JWT } from "next-auth/jwt";
import { AuthOptions, Session } from "next-auth";

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials,req) {
        try {
            if (!credentials) {
              return null;
            }
            const { email, password } = credentials;

            // Simulate authentication (replace with your actual logic)
            // For example, check against a database
            if (email && password) {
              // Return a User object
              return {
                id: '1', // Required
                email: email,
                name: 'Test User', // Optional
              };
            }
                } catch (error) {

        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    newUser: "/signup",
  },
};