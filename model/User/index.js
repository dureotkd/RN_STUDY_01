"use strict";
const db = require("../Core/database");

/**
 * use strict ?
 * module export 와 export 의 차이점
 */
const Core = require("../Core");

class User extends Core {
  constructor(props) {
    // Core 상속
    super(props);

    this.core = new Core();
  }

  /**
   * * 단일 ROW 데이터
   */
  getRow({ where, database }) {
    let sql = `SELECT * FROM ${database}.user WHERE 1`;

    const result = this.core.excute({
      database: database,
      sql: sql,
      type: "row",
    });

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
}

const user = new User();

module.exports = user;
