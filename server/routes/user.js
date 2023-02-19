const express = require("express");
var userRouter = express.Router();
const sqlite3 = require("sqlite3");
// DBとの接続
const db = new sqlite3.Database("./myDb.db");

/**
 * /api/user/
 * 全てのユーザーを取得
 */
userRouter.get("/", async function (req, res, next) {
  console.log("fetchAllUsers  :  /api/user/");
  let result = null;
  const data = await db.all("select * from user", [], (err, rows) => {
    if (err) {
      // エラー発生時.
      result = err.message;
    }
    // 取得データ rows に対する処理.
    result = rows;
    console.log("result", result);
    // 取得データを呼び出し元(クライアント側に返す)
    res.send(result);
  });
});

/**
 * /api/user/:id
 * パラメータとしてIDを渡し、指定のユーザーを取得
 */
userRouter.get("/:id", async function (req, res, next) {
  console.log("fetchUserById  :  /api/user/1");
  const userId = req.params.id;
  let result = null;
  const data = await db.get(
    `select * from user where id=:userId `,
    [userId],
    (err, rows) => {
      if (err) {
        // エラー発生時.
        result = err.message;
      }
      // 取得データ rows に対する処理.
      result = rows;
      console.log("result", result);
      // 取得データを呼び出し元(クライアント側に返す)
      res.send(result);
    }
  );
});

module.exports = userRouter;
