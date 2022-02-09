//数据库操作的工具类
var mysql = require("mysql");

module.exports.db = function (sql, params) {
  //查询数据库，获取所有用户信息
  var connection = mysql.createConnection({
    host: "110.40.236.242",
    user: "root",
    password: "123456",
    database: "meilishuo",
  });
  // 连接数据库
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });

  //sql:select语句
  //insert into 表名 values(?,?,?,?)
  //?占位符，表示这里有一个待传入的参数,按照参数数组中的顺序依次赋值
  //params:参数[p1,p2,p3,p4]
  return new Promise((reslove, reject) => {
    connection.query(sql, params, function (error, results, fields) {
      if (error) reject(error);

      reslove(results);
    });
    // 关闭连接
    connection.end();
  });
};
