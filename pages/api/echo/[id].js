export default function getById(req, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(req.query.id);
}
