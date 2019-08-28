import Router from 'koa-router'
import aboutMe from '../controllers/aboutMe'

let router = new Router({
  prefix: '/aboutMe'
})

/***********用户接口***********/

router.post('/createMyProfile', aboutMe.createMyProfile) // 创建我的资料
      .get('/getMyProfile', aboutMe.getMyProfile) // 获取我的资料
      .post('/updateMyProfile', aboutMe.updateMyProfile) // 修改我的资料

export default router