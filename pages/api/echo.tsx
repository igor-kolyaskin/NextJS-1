export default function echo(req: {
  query: { message: any; };
}, response: {
  statusCode: number;
  setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void;
}) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
