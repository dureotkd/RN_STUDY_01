"use strict";
const db = require("../Core/database");
const Core = require("../Core");

class Summoner extends Core {
  constructor(props) {
    // Core 상속
    super(props);

    this.core = new Core();
  }

  /**
   * * 단일 ROW 데이터
   */
  getRow({ where, database }) {
    let sql = `SELECT * FROM ${database}.summoner WHERE 1`;

    const result = this.core.excute({
      database: database,
      sql: sql,
      type: "row",
    });

    console.log(result);

    return result;
  }

  /**
   * * 배열 Array 데이터
   */
  getAll() {
    console.log(`All Data...`);
  }

  /**
   * * 개수 Number 데이터
   */
  getCount() {
    console.log(`All Data...`);
  }

  /**
   * * INSERT 단일
   */
  save(data) {
    const sql = this.core.getInsertQuery({
      table: "summoner",
      data: data,
    });

    const result = this.core.excute({
      database: "soundGame",
      sql: sql,
      type: "exec",
    });

    return result;
  }

  /**
   * * MULTI INSERT
   */
  multiSave() {}
}

const summoner = new Summoner();

module.exports = summoner;
