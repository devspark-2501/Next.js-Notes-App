import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/models/db";

const handler = NextAuth({
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
        }),

        GithubProvider ({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRECT,
        }),
    ],

    callbacks: {
        async signIn({ users }) {
            try
        }
    }
})