import NextAuth from 'next-auth/next'
import FacebookProvider from 'next-auth/providers/facebook'

const options = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)
