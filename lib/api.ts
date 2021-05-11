import { PostResponse } from "type";
import { NextApiRequest } from "next";

export async function getRequest(path: string) {
  const res = await fetch(
    "https://nextjs-microcms-bolilerplate.microcms.io/api/v1/" + path,
    {
      headers: {
        "X-API-KEY": process.env.APIKEY,
      } as HeadersInit,
    }
  );
  console.log(res);
  return await res.json();
}

export async function postRequest<T>(
  path: string,
  req: NextApiRequest
): Promise<PostResponse> {
  const res = await fetch(
    "https://nextjs-microcms-bolilerplate.microcms.io/api/v1/" + path,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env["W-APIKEY"],
      } as HeadersInit,
      body: JSON.stringify(req.body),
    }
  );
  console.log(res);
  return await res.json();
}
