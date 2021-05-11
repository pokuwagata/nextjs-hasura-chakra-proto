import { request } from 'lib'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const json = await request("news")
    res.status(200).json(json)
  } else {
    res.status(405).end()
  }
}