const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const socketIo = require("socket.io");
const app = express();
const Http = require("http");
const http = Http.createServer(app);
const router = express.Router();
const User = require("../model/User");
const cors = require("cors");
const io = socketIo(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// api 요청이 올시에만 라우터를 연결합니다.
app.use(cors());
app.use("/api", express.urlencoded({ extended: false }), router);

http.listen(8080, (req, res) => {
  console.log(`서버가 요청 받을 준비가 되었습니다.😝`);

  User.getRow();
});

io.on("connection", (socket) => {
  console.log(`소켓이 연결되었습니다 😍`);
});

router.get("/", (req, res) => {
  res.send("Hello RESTFUL API !");
});

router.get("/users/me", (req, res) => {
  console.log("나를 체크해줘 👩");
});
