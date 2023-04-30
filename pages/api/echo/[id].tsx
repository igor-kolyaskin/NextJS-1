import { NextApiRequest, NextApiResponse } from "next";

interface IdNextApiRequest extends NextApiRequest {
    id?: string | number
}

export default function getById(req: IdNextApiRequest, response: NextApiResponse) {
  //   response.statusCode = 200;
  //   response.setHeader("Content-Type", "application/json");
  //   response.end(req.query.id);
  response.json({ yourId: req.query.id });
}
