import AboutMe from '../models/aboutMe'

export default {
  
  /*创建我的资料*/
  async createMyProfile(ctx, next) {
    let {
      nickName,
      sex,
      age,
      height,
      weight,
      charactors,
      hobbies,
      specialities,
      edu,
      major,
      ideality,
      dream,
      maxim,
      tags
    } = ctx.request.body

    let newMyProfile = await AboutMe.create({
      nickName,
      sex,
      age,
      height,
      weight,
      charactors,
      hobbies,
      specialities,
      edu,
      major,
      ideality,
      dream,
      maxim,
      tags
    })
    if(newMyProfile){
      ctx.body = {
        code: 0,
        msg: '创建成功',
        myProfile: newMyProfile
      }
    }else{
      ctx.body = {
        code: -1,
        msg: '创建失败'
      }  
    }
  },

  /*获取我的资料*/
  async getMyProfile(ctx, next) {
    let myProfile = await AboutMe.find()
    ctx.body = {
      code: 0,
      msg: '获取成功',
      myProfile
    }
  },

  /*更新我的资料*/
  async updateMyProfile(ctx, next) {
    let {
      nickName,
      sex,
      age,
      height,
      weight,
      charactors,
      hobbies,
      specialities,
      edu,
      major,
      ideality,
      dream,
      maxim,
      tags
    } = ctx.request.body
    await AboutMe.updateOne({nickName}, {
      sex,
      age,
      height,
      weight,
      charactors,
      hobbies,
      specialities,
      edu,
      major,
      ideality,
      dream,
      maxim,
      tags
    }, (err, res) => {
      if(err){
        ctx.body = {
          code: -1,
          msg: '更新失败'
        }
        return
      }
    })
    let newMyProfile = await AboutMe.findOne({nickName})
    ctx.body = {
      code: 0,
      msg: '更新成功',
      myProfile: newMyProfile
    }
  }
}