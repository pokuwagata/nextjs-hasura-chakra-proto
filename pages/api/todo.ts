import { getRequest, postRequest } from "lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // const todos = await prisma.todo.findMany();
    // res.status(200).json({ todos: JSON.parse(JSON.stringify(todos)) });
  }
  if (req.method === "POST") {
    // console.log(req.body);
    // const json = await postRequest("todo", req);
    // res.status(200).json(json);
  } else {
    res.status(405).end();
  }
}
