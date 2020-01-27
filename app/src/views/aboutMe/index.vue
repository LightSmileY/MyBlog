<template>
  <div id="aboutMe">
    <div class="container">
      <div class="me-left">
        <div class="title">关于我</div>
        <ul 
        class="aboutMe-ul"
        v-loading="loading"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <li class="aboutMe-li">
            <dt>网名：</dt>
            <dd>{{myProfile.nickName}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>性别：</dt>
            <dd>{{myProfile.sex == true ? "男" : "女"}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>年龄：</dt>
            <dd>保密</dd>
          </li>
          <li class="aboutMe-li">
            <dt>身高：</dt>
            <dd>{{myProfile.height}}cm</dd>
          </li>
          <li class="aboutMe-li">
            <dt>体重：</dt>
            <dd>{{myProfile.weight}}kg</dd>
          </li>
          <li class="aboutMe-li">
            <dt>性格：</dt>
            <dd>{{myProfile.charactors}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>爱好：</dt>
            <dd>{{myProfile.hobbies}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>特长：</dt>
            <dd>{{myProfile.specialities}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>学历：</dt>
            <dd>{{myProfile.edu}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>专业：</dt>
            <dd>{{myProfile.major}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>理想：</dt>
            <dd>{{myProfile.ideality}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>梦想：</dt>
            <dd>{{myProfile.dream}}</dd>
          </li>
          <li class="aboutMe-li">
            <dt>人生格言：</dt>
            <dd>
              <ul>
                <li v-for="maxim in myProfile.maxim">
                  {{maxim}}
                </li>
              </ul>
            </dd>
          </li>
        </ul>
      </div>
      <div class="me-right">
        <div class="myInfo">
          <div class="info">
            <div class="avatar">
              <img src="@/assets/images/avatar.jpg">
            </div>
            <p class="signature">
              不纠结，不抱怨，不后悔，用结果说话。
            </p>
          </div>
          <div class="icons">
            <dl class="mine-dl" @click="toMyGithub" title="去我的GitHub">
        <dt class="mine-dt"><img src="@/assets/icons/GitHub.png"></dt>
        <dd class="mine-dd">GitHub</dd>
      </dl>
      <dl class="mine-dl">
        <dt class="mine-dt">
          <img src="@/assets/icons/QQ.png">
          <div class="qrcode">
            <div class="image">
              <img src="@/assets/images/QQ.jpg">
            </div>
            <div class="line"></div>
          </div>
        </dt>
        <dd class="mine-dd">QQ</dd>
      </dl>
      <dl class="mine-dl">
        <dt class="mine-dt">
          <img src="@/assets/icons/WeChat.png">
          <div class="qrcode">
            <div class="image">
              <img src="@/assets/images/WeChat.jpg">
            </div>
            <div class="line"></div>
          </div>
        </dt>
        <dd class="mine-dd">微信</dd>
      </dl>
      <dl class="mine-dl">
        <dt class="mine-dt">
          <img src="@/assets/icons/WeiBo.png">
          <div class="qrcode">
            <div class="image">
              <img src="@/assets/images/WeiBo.jpg">
            </div>
            <div class="line"></div>
          </div>
        </dt>
        <dd class="mine-dd">微博</dd>
      </dl>
          </div>
        </div>
        <div class="label">
          <div class="title">
            我的标签
          </div>
          <ul 
          class="labels"
          v-loading="loading"
          element-loading-text="玩命加载中"
          element-loading-background="rgba(255, 255, 255, 0)">
            <li v-for="item in myProfile.tags">
              <el-tag :type="item.type">{{item.title}}</el-tag>
            </li>
          </ul>
        </div>
        <div class="manage" @click="toMagagePage">
          进入后台管理系统
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getMyProfile} from '@/api/getData'

export default {
  name: 'aboutMe',
  data(){
    return {
      loading: true,
      myProfile: {}
    }
  },
  components: {
    
  },
  methods: {
    toMagagePage(){
      if(this.$store.state.userInfo.isAdmin === true){
        this.$router.push({path: '/managePage/user'})
      }else{
        this.$notify.error({
          title: 'error',
          message: '抱歉, 您没有该权限~'
        });
      }
    },
    toMyGithub(){
      window.location.href = "https://github.com/LightSmileY"
    }
  },
  beforeMount(){
    let _this = this
    getMyProfile()
    .then(res => {
      console.log(res)
      _this.myProfile = res.data.myProfile[0]
    })
    .then(() => {
      _this.loading = false
    })
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/aboutMe/index.scss";
</style>