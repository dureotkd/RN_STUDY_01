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

  getRow() {
    const sql = "SELECT * FROM tcst.`app`";

    this.core.excute({
      database: "soundGame",
      sql: sql,
      type: "row",
    });

    // Core.excute({
    //   database: "soundGame",
    //   sql: sql,
    //   type: "row",
    // });
  }

  getAll() {
    console.log(`All Data...`);
  }

  getCount() {
    console.log(`All Data...`);
  }
}

const user = new User();

module.exports = user;
