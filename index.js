const jsonServer = require("json-server");
const cors = require("cors");
const express=require("express");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const app=express();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.use(express.static(path.join(__dirname,"public","index.html")))

const PORT = 3003;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
