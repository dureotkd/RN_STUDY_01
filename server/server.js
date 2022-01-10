const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const socketIo = require("socket.io");
const moment = require("moment");
const app = express();
const Http = require("http");
const http = Http.createServer(app);
const router = express.Router();
const Summoner = require("../model/Summoner");
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

http.listen(8080, async (req, res) => {
  console.log(`서버가 요청 받을 준비가 되었습니다.😝`);
});

io.on("connection", (socket) => {
  console.log(`소켓이 연결되었습니다 😍`);
});

router.get("/", (req, res) => {
  res.send("Hello RESTFUL API !");
});

router.get("/users/me", async (req, res) => {
  console.log("?");

  const data = await Summoner.getRow({
    where: 1,
    database: "soundGame",
  });

  res.status(200).send(data);
});

/**
 * * 소환사 기본 정보를 INSERT 합니다
 */
router.post("/summoner", async (req, res) => {
  const data = JSON.parse(req.query.summonerApi);
  const nowDate = moment().format("Y-M-D H:mm:ss");
  data.regDate = nowDate;
  data.editDate = nowDate;

  const lastSaveId = await Summoner.save(data);

  lastSaveId ? res.status(201).send({ lastSaveId }) : res.send({});
});

/**
 * * 소환사 리그 정보를 INSERT 합니다
 */
router.post("/summonerLeage", async (req, res) => {
  const insertId = JSON.parse(req.query);

  res.send({});
});

/**
 * *
 */
router.post("/createTeamLeague", async (req, res) => {
  console.log(req.query);
});
