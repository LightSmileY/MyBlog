import Router from 'koa-router'
import message from '../controllers/message'

let router = new Router({
  prefix: '/message'
})

/***********留言接口***********/

router.get('/getAll', message.getAllMessages)     // 获取所有留言
      .get('/getByUsername', message.getMessagesByUsername)
      .post('/add', message.addMessage)           // 添加留言
      .post('/delete', message.deleteMessage)     // 删除留言

export default router