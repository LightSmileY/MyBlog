import Router from 'koa-router'
import timeAxis from '../controllers/timeAxis'

let router = new Router({
  prefix: '/timeAxis'
})

/***********时光轴接口***********/

router.get('/getAll', timeAxis.getTimeAxis)              // 获取时光轴
      .get('/getByTitle', timeAxis.getTimeAxisByTitle)   // 根据title查询一条信息
      .post('/add', timeAxis.addTimeAxis)                // 更新时光轴元素
      .post('/update', timeAxis.updateTimeAxis)          // 更新时光轴元素
      .post('/delete', timeAxis.deleteTimeAxis)          // 删除时光轴元素

export default router