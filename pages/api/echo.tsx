import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string
  }
}

export default function echo(req: NextApiRequest, response: NextApiResponse) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
