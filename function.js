const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextJSHandle = server.getRequestHandler();

exports.nextServer = https.onRequest(async (req, res) => {
  await server.prepare();
  return nextJSHandle(req, res);
});
