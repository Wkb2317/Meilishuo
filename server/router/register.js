var express = require('express')
var router = express.Router()
var { db } = require('../db/db')


router.post("/", async (req, res) => {
  const { username,password } = req.body
  console.log(username);
  let result = await db('select count(username) usernamecount from user where username = ?', [username])
  console.log(result);
  if (result[0].usernamecount) {
    res.json({
      code: 0,
      msg: '用户名重复'
    })
  } else{
    res.json({
      code: 1,
      msg: '注册成功'
    })
    await db('insert into user (username, password) values (?,?)', [username,password])
  }


})

module.exports = router
