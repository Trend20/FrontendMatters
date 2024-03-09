import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   id: "github",
    //   name: "GitHub",
    //   credentials: {
    //     token: { label: "Token", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     // Fetch user data using the provided personal access token
    //     const user = await fetch("https://api.github.com/user", {
    //       headers: {
    //         Authorization: `token ${credentials?.token}`,
    //       },
    //     }).then((res) => res.json());

    //     // Check if user data was fetched successfully
    //     if (user) {
    //       return { ...user, token: credentials?.token };
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};