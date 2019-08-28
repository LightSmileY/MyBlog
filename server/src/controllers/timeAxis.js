import TimeAxis from '../models/timeAxis'

export default {

  /*获取时光轴*/
  async getTimeAxis(ctx, next) {
    let timeAxis = await TimeAxis.find()
    if(timeAxis.length){
      ctx.body = {
        code: 0,
        msg: '获取成功',
        timeAxis
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '获取失败,时光轴为空'
      }
    }
  },

  /*根据title查询一条信息*/
  async getTimeAxisByTitle(ctx, next) {
    let title = ctx.request.body.title
    let timeAxis = await TimeAxis.findOne({
      title
    })
    if(timeAxis){
      ctx.body = {
        code: 0,
        msg: '查询成功',
        timeAxis
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '查询失败，不存在该文章'
      }
    }
  },

  /*创建时光轴元素*/
  async addTimeAxis(ctx, next) {
    let {
      title,
      info,
      images,
      location,
      create_time,
      update_time
    } = ctx.request.body

    let timeAxis = await TimeAxis.findOne({
      title
    })
    if(timeAxis){
      ctx.body = {
        code: -1,
        msg: `已存在title为“${title}”的时光轴元素`
      }
      return
    }

    let newTimeAxis = await TimeAxis.create({
      title,
      info,
      images,
      location,
      create_time,
      update_time
    })
    if(newTimeAxis){
      ctx.body = {
        code: 0,
        msg: '创建成功',
        timeAxis: newTimeAxis
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '创建失败'
      }  
    }
  },

  /*更新时光轴元素*/
  async updateTimeAxis(ctx, next) {
    let {
      title,
      info,
      images,
      location,
      create_time,
      update_time
    } = ctx.request.body
    await TimeAxis.updateOne({title}, {
      info,
      images,
      location,
      create_time,
      update_time
    }, (err, res) => {
      if(err){
        ctx.body = {
          code: -1,
          msg: '更新失败'
        }
        return
      }
    })
    let newTimeAxis = await TimeAxis.findOne({title})
    ctx.body = {
      code: 0,
      msg: '更新成功',
      timeAxis: newTimeAxis
    }
  },

  /*删除时光轴元素*/
  async deleteTimeAxis(ctx, next) {
    let title = ctx.request.body.title
    await TimeAxis.remove({title}, (err, res) => {
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