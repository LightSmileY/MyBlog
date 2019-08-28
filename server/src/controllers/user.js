import User from '../models/user'

export default {
  /*用户注册*/
  async signup(ctx, next){
    const {
      username,
      password,
      email,
      nickname,
      create_time
    } = ctx.request.body

    // 数据库中查找是否存在该账号
    let user = await User.findOne({
      username
    })

    if(user){
      ctx.body = {
        code: -1,
        msg: '抱歉，该用户名已被注册'
      }
      return
    }
  
    let newUser = await User.create({
      username,
      password,
      email,
      nickname,
      create_time
    })
    if(newUser){
        ctx.body = {
          code: 0,
          msg: '注册成功',
          user: newUser
        }
    }else{
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  },

  /*用户登录*/
  async signin(ctx, next){
    let {
      username, 
      password,
      last_login_time
    } = ctx.request.body

    let user = await User.findOne({
      username
    })

    if(!user){
      ctx.body = {
        code: -1,
        msg: '不存在该用户!'
      }
    }else if(user.password == password){
      await User.updateOne({username}, {
        last_login_time
      }, err => {
        if(err){
          ctx.body = {
            code: -1,
            msg: '数据错误,登录失败'
          }
          return
        }else{
          ctx.body = {
            code: 0,
            msg: '登录成功',
            user
          }
        }
      })
    }else{
      ctx.body = {
        code: -1,
        msg: '密码错误!'
      }
    }
    return
  },
  
  /*请求验证码*/
  async verify(ctx, next){

    let transporter = nodeMailer.createTransport({
      service: Email.smtp.host,
      auth: {
        user: Email.smtp.user,
        pass: Email.smtp.pass
      }
    })
    //接收方
    let ko = {
      code: Email.smtp.code,
      expire: Email.smtp.expire,
      email: ctx.request.body.email,
      user: ctx.request.body.username
    }
    let mailOptions = {
      from: Email.smtp.user,
      to: ko.email,
      subject: '袁乾峰de博客注册验证码',
      html: `您在袁乾峰de博客进行注册，您的验证码是${ko.code}`
    }
    //发送邮件
    await transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        return console.log('验证码发送失败！')
      }/*else{
        Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
      }*/
      ctx.body = {
        code: 0,
        msg: '验证码已发送，可能会有延时，有效期10分钟'
      }
    })
  },

  /*退出登录*/
  async exit(ctx, next){
    
  },

  /*获取所有用户*/
  async getAllUsers(ctx, next){
    let users = await User.find()
    if(users.length){
      ctx.body = {
        code: 0,
        msg: '获取成功',
        users
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '获取失败,用户表为空'
      }
    }
  },

  /*根据用户名查询一个用户*/
  async getUserByUsername(ctx, next){
    let username = ctx.request.body.username
    let user = await User.findOne({
      username
    })
    if(user){
      ctx.body = {
        code: 0,
        msg: '查询成功',
        user
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '查询失败，不存在该用户'
      }
    }
  },

  /*添加用户*/
  async addUser(ctx, next){
    let {
      username,
      password,
      email,
      nickname,
      create_time,
      isAdmin
    } = ctx.request.body

    let user = await User.findOne({
      username
    })
    if(user){
      ctx.body = {
        code: -1,
        msg: `已存在用户名为“${username}”的用户`
      }
      return
    }

    let newUser = await User.create({
      username,
      password,
      email,
      nickname,
      create_time,
      isAdmin
    })
    if(newUser){
      ctx.body = {
        code: 0,
        msg: '创建成功',
        user: newUser
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '创建失败'
      }
    }
  },

  /*更新用户*/
  async updateUser(ctx, next){
    let {
      username,
      password,
      email,
      nickname,
      isAdmin
    } = ctx.request.body

    await User.updateOne({username}, {
      username,
      password,
      email,
      nickname,
      isAdmin
    }, (err, res) => {
      if(err){
        ctx.body = {
          code: -1,
          msg: '更新失败'
        }
        return
      }
    })
    let newUser = await User.findOne({username})
    ctx.body = {
      code: 0,
      msg: '更新成功',
      user: newUser
    }
  },

  /*删除用户*/
  async deleteUser(ctx, next){
    let username = ctx.request.body.username

    await User.remove({username}, (err, res) => {
      if(err){
        ctx.body = {
          code: -1,
          msg: '删除失败'
        }
      }else{
        ctx.body = {
          code: 0,
          msg: '删除成功'
        }
      }
    })
  },
}