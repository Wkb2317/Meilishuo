var express = require('express')
const jwt = require('jsonwebtoken')

var router = express.Router()
var { db } = require('../db/db')

router.post("/", async (req, res) => {
  const { username, password } = req.body
  console.log(req.body);
  console.log(password);
  let result = await db("select count(*) usernum from user where username = ? and password = ?", [username, password])
  console.log(result[0]);
  if(!result[0].usernum){
    res.json({
      code: 0,
      msg: '账户或者密码错误'
    })
  } else{
    const token = jwt.sign( req.body, 'keyl', {
      expiresIn: '1d'
    });
    res.json({
      code: 1,
      msg:'登录成功',
      token: token
    })
  }

  // await db()
})



module.exports = router

