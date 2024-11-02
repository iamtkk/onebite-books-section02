import { NextApiRequest, NextApiResponse } from "next";

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send(`Error revalidating: ${err}`);
  }
}
