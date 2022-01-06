"use strict";

const { db } = require("../Core/database");

class Core {
  constructor(props) {}

  /**
   * * MAKE MYSQL INSERT 쿼리문
   */
  getInsertQuery() {
    console.log(`getInsertQuery`);
  }

  /**
   * * MAKE MYSQL DELETE 쿼리문
   */
  getDeleteQuery() {
    console.log(`getDeleteQuery`);
  }

  /**
   * * 쿼리 DB 실행 함수
   * ! 생성자에 정의된 타입에 맞춰주세요
   * ?
   */
  excute({ database, sql, type }) {
    console.log(database, sql, type);

    db.getConnection(database, function (err, connection) {
      if (err) {
        console.log(JSON.stringify(err));

        console.log("에러났어");

        // callback(err, null);
      } else {
        connection.query(sql, function (err, rows) {
          console.log("연결은 잘됬는데 너 쿼리가 이상해");

          if (!err) {
            console.log("잘됬엉");
            // callback(null, {
            //   rows: rows,
            // });
          }
        });
      }
    });
  }
}

module.exports = Core;
