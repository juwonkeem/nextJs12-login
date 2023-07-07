import { dbConnect } from '@/helpers'
import { UsersSch } from '@/schema'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect()
    const { email, password } = req.body
    const user = await UsersSch.users.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...userWithoutPass } = user
      console.log('성공 !!>>>>>>', user)
      return res.status(200).json(userWithoutPass)
    } else {
      return res.status(401).json({ error: 'email or password ' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
