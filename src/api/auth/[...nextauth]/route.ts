import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID! ||
        "20724781314-k6tm959ibi516ejt22pab8dn8tqbs90l.apps.googleusercontent.com",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET! ||
        "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",
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID! || "Ov23li2MKqVdbUZIkuAC",
      clientSecret:
        process.env.GITHUB_CLIENT_SECRET! ||
        "a8a1790f9d4d6f28a1259122b069a082c6ef2162",
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET || "your_random_secret_key",
});

export { handler as GET, handler as POST };
