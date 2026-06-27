import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add guard clause to check if credentials exists
        if (!credentials) {
          return null;
        }

        // Temporary mock users — replace with FastAPI call when backend is ready
        const users = [
          { id: "1", email: "enumerator@neps.org", password: "password123", role: "enumerator", name: "Test Enumerator" },
          { id: "2", email: "lead@neps.org", password: "password123", role: "country-lead", name: "Test Country Lead" },
          { id: "3", email: "admin@neps.org", password: "password123", role: "admin", name: "Test Admin" },
        ]

        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        )

        if (!user) return null

        return { id: user.id, email: user.email, name: user.name, role: user.role }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role as string
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})
