// import { dbConnect } from 'helpers';
// import { CommandsSch } from 'schema';

// export async function handle(req: Request) {
//   await dbConnect()
//   const commandList = await CommandsSch.Commands.find({})
//   return new Response(JSON.stringify(commandList), {
//     headers: { 'Content-Type': 'application/json' },
//     status: 200,
//   })
// }

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
