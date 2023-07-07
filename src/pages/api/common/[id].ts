import { dbConnect } from '@/helpers'
import { CommandsSch } from '@/schema'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()
  const commandList = await CommandsSch.commands.find({})
  res.status(200).json(commandList)
}
