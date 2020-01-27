import Message from '../models/message'
import qiniu from 'qiniu'
import request from 'request'
import fs from "fs"

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
  },

  /*生成七牛云token*/
  async getQiniuToken(ctx, next){
    let accessKey = 'VMEV1de0PH_OesuCDiWpCMV-6sla1yI3C-gHFn86'
    let secretKey = 'Dch4ktitO9WrxdRtTPj2URgnG81ZNlgV-lMhTHYP'
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    let options = {
      scope: "lightsmiley"
    }
    let putPolicy = new qiniu.rs.PutPolicy(options)
    let uploadToken = putPolicy.uploadToken(mac)
    ctx.body = uploadToken
  },

  /*将人脸融合结果写为图片并返回存储地址给前端*/
  async getMergeImage(ctx, next){
    let postData = ctx.request.body
    let URL = "https://api-cn.faceplusplus.com/imagepp/v1/mergeface"
    let createTime = (new Date()).valueOf()
    let path = 'C:/Program Files/Apache Software Foundation/Tomcat 7.0/webapps/mergeimages/' + createTime +'.png'

    await request.post({
      url: URL,
      formData: postData
    }, (err, res, body) => {
      let obj = JSON.parse(body)
      let base64image = obj.result
      let dataBuffer = new Buffer(base64image, 'base64')
      fs.writeFile(path,dataBuffer, err => {
        if(err){
          console.log(err)
        }else{
          console.log("写入成功")
          // ctx.body = {
          //   code: 0,
          //   result: 'fengblog.xyz/mergeimages/' + createTime + '.png'
          // }
        }
      })
    })
    ctx.body = {
      code: 0,
      result: 'http://fengblog.xyz/mergeimages/' + createTime + '.png'
    }
  }
}