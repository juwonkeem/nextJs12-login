import NextAuth, { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { dbConnect } from '@/helpers'
import { UsersSch } from '@/schema'
import bcrypt from 'bcrypt'

export interface ProcessEnv {
  [key: string]: string | undefined
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'login',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await dbConnect()

        console.log(req)
        const findUser = await UsersSch.users.findOne({ email: credentials?.email })
        const user = {
          id: findUser?.id,
          name: findUser?.name,
          email: findUser?.email,
          password: findUser?.password,
        }

        if (
          user &&
          credentials?.password !== undefined &&
          user.password !== undefined &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          const { password, ...userWithoutPass } = user
          console.log('성공 !!>>>>>>', user)
          return Promise.resolve(userWithoutPass as unknown as User)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
})
