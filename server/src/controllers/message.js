import Message from '../models/message'

export default {

  /*获取所有留言*/
  async getAllMessages(ctx, next){
    let messages = await Message.find()
    if(messages.length){
      ctx.body = {
        code: 0,
        msg: '获取成功',
        messages
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '获取失败,留言表为空'
      }
    }
  },

  /*根据用户名获取所有留言*/
  async getMessagesByUsername(ctx, next){
    let username = ctx.request.body.username
    let messages = await Message.find({username})
    if(messages.length){
      ctx.body = {
        code: 0,
        msg: '获取成功',
        messages
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '获取失败，不存在该用户的留言'
      }
    }
  },

  /*添加留言*/
  async addMessage(ctx, next){
    let {
      username,
      nickname,
      message,
      time
    } = ctx.request.body
    let newMessage = await Message.create({
      username,
      nickname,
      message,
      time
    })
    if(newMessage){
      ctx.body = {
        code: 0,
        msg: '留言成功',
        message: newMessage
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '留言失败'
      }  
    }
  },

  /*删除留言*/
  async deleteMessage(ctx, next){
    let username = ctx.request.body.username
    await Message.remove({username}, (err, res) => {
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
  }
}