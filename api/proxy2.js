export default async function handler(req, res) {
  const targetUrl = "http://saber.theokaitou.my.id" + req.url.replace("/api/proxy", "");

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined
  });

  const data = await response.text();
  res.status(response.status).send(data);
}
