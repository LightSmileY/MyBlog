import Router from 'koa-router'
import user from '../controllers/user'

let router = new Router({
  prefix: '/user'
})

/***********用户接口***********/

router.post('/signup', user.signup)           // 注册
      .post('/signin', user.signin)           // 登录
      .post('/verify', user.verify)           // 请求验证码
      .get('/exit', user.exit)                // 退出登录
      .get('/getOne', user.getUserByUsername) // 获取一位用户
      .get('/getAll', user.getAllUsers)       // 获取所有用户
      .post('/add', user.addUser)             // 添加用户
      .post('/update', user.updateUser)       // 更新用户
      .post('/delete', user.deleteUser)       // 删除用户

export default router