// Local dev only: serves index.html and runs api/check-explanation.js in-process,
// so the real UI can be tested without deploying or installing the Vercel CLI.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import checkExplanation from "./api/check-explanation.js";

const PORT = 3000;

createServer(async (req, res) => {
  if (req.url === "/api/check-explanation" && req.method === "POST") {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    req.body = raw ? JSON.parse(raw) : {};
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (data) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(data)); };
    await checkExplanation(req, res);
    return;
  }

  const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}).listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});
