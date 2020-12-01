var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '47.101.61.134',
  user: 'root',
  password: '123456',
  port: '3306',
});

connection.connect();

// 创建数据库
connection.query(
  'CREATE DATABASE IF NOT EXISTS violateer DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;',
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);

connection.query('use violateer;');

// 创建表
connection.query(
  `CREATE TABLE IF NOT EXISTS user(
      name text,
      age int
  );`,
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);

connection.end();
