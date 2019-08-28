import Koa from 'koa'

import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import user from './routes/user'
import article from './routes/article'
import message from './routes/message'
import timeAxis from './routes/timeAxis'
import aboutMe from './routes/aboutMe'
import cors from 'koa-cors'

const app = new Koa()

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(user.routes())
app.use(user.allowedMethods())
app.use(article.routes())
app.use(article.allowedMethods())
app.use(message.routes())
app.use(message.allowedMethods())
app.use(timeAxis.routes())
app.use(timeAxis.allowedMethods())
app.use(aboutMe.routes())
app.use(aboutMe.allowedMethods())

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/myblog', {
  useNewUrlParser: true
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

console.log('Koa2服务正在3000端口运行...')

module.exports = app
