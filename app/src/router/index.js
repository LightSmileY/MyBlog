import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    /*首页*/
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index')
    },
    /*技术分享*/
    {
      path: '/techShare',
      name: 'TechShare',
      component: () => import('@/views/techShare')
    },
    /*韶华追忆*/
    {
      path: '/memory',
      name: 'Memory',
      component: () => import('@/views/memory')
    },
    /*心情随笔*/
    {
      path: '/moodEssay',
      name: 'MoodEssay',
      component: () => import('@/views/moodEssay')
    },
    /*我的时光轴*/
    {
      path: '/timeAxis',
      name: 'TimeAxis',
      component: () => import('@/views/timeAxis')
    },
    /*给我留言*/
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/message')
    },
    /*关于我*/
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: () => import('@/views/aboutMe')
    },
    /*文章详情*/
    {
      path: '/articleDetail',
      name: 'ArticleDetail',
      component: () => import('@/views/articleDetail')
    },
    /*管理页*/
    {
      path: '/managePage',
      name: 'ManagePage',
      component: () => import('@/views/managePage'),
      children: [
        // 用户页
        {
          path: '/managePage/user',
          name: 'User',
          component: () => import('@/views/managePage/user')
        },
        // 文章页
        {
          path: '/managePage/article',
          name: 'Article',
          component: () => import('@/views/managePage/article')
        },
        // 留言页
        {
          path: '/managePage/message',
          name: 'Message',
          component: () => import('@/views/managePage/message')
        },
        // 时光轴页
        {
          path: '/managePage/timeAxis',
          name: 'TimeAxis',
          component: () => import('@/views/managePage/timeAxis')
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
