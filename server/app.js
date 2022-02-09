const express = require("express")
var cors = require('cors')
const path = require("path")
const app =express()
const router = express.Router()
const jwt = require('jsonwebtoken')
/**
 *  路由
 * */
const login = require("./router/login")
const register = require("./router/register")

app.use(cors()); // 跨域
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // 使用body-parser中间件解析请求主体(不在需要引用bodyparser)

// app.use((req, res, next) => {
//   console.log('进入中间件');
//   console.log(req.path);
//   const allowpath = ['/login','/register']
//   if(allowpath.includes(req.path)){
//     next()
//   }
// })

app.use(express.static(path.join(__dirname, 'public')));

router.get("/checktoken" ,(req, res) => {
  const token = req.query['0']
  jwt.verify(token, 'keyl', function(err, decoded) {
    if(err){
      res.json({
        code: 0,
        msg: '重新登录'
      })
    } else {
    console.log(decoded.username)

      res.json({
        code: 1,
        msg: '校验成功',
        username : decoded.username
      })
    }
  });
})
app.use(router)

app.use("/login",login)
app.use("/register",register)

app.listen(3000,()=>{
  console.log('启动3000');
})
