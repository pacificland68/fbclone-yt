import NextAuth from 'next-auth/next'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";

const options = {
  debug:true,
  providers: [
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //   isSecure: false,
    //   httpOptions: {
    //     timeout: 9000000
    //   }
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   httpOptions: {
    //     timeout: 50000,
    //   }
    // })
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions:{
        timeout: 50000
      }
    })
  ]
  // secret: 'IamVeryHandsome'
}

export default (req, res) => NextAuth(req, res, options)
