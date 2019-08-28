
export default {
  mongodb: 'mongodb://localhost:27017/myblog',
  redis:{
    get host(){
      return 'localhost'
    },
    get port(){
      return 6379
    }
  },
  // QQ邮箱SMTP服务
  smtp: {
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '2434740987@qq.com'
    },
    get pass(){
      return ''
    },
    // 生成4位数随机验证码
    get code(){
      return Math.random().toString(16).slice(2,6).toUpperCase()
    },
    // 验证码过期时间控制10分钟
    get expire(){
      return () => {
        return new Date().getTime() + 60 * 60 * 1000 * 10
      }
    }
  }
}