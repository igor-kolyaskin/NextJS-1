export default function echo(req, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
