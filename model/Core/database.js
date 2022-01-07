"use strict";

const mysql = require("mysql");
const db = mysql.createPoolCluster();

db.add("soundGame", {
  host: "localhost",
  user: "root",
  password: "",
  database: "soundGame",
  port: 3306,
});

module.exports.db = db;
