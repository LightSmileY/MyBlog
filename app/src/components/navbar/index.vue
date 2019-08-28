<template>
  <div id="navbar">
    <ul class="navbar-ul">
      <li class="navbar-li" :class="{'h-active': isActive === 1}" @click="toIndex">首页</li>
      <li class="navbar-li" :class="{'h-active': isActive === 2}" @click="toTechShare">技术分享</li>
      <li class="navbar-li" :class="{'h-active': isActive === 3}" @click="toMemory">韶华追忆</li>
      <li class="navbar-li" :class="{'h-active': isActive === 4}" @click="toMoodEssay">心情随笔</li>
      <li class="navbar-li" :class="{'h-active': isActive === 5}" @click="toTimeAxis">我的时光轴</li>
      <li class="navbar-li" :class="{'h-active': isActive === 6}" @click="toMessage">留言</li>
      <li class="navbar-li" :class="{'h-active': isActive === 7}" @click="toAboutMe">关于我</li>
    </ul>
    <div class="login-register" v-if="!userInfo.username">
      <span @click="toLogin">登录</span>&nbsp;/
      <span @click="toRegister">注册</span>
    </div>
    <div class="welcome" v-if="userInfo.username">
      <span class="username">{{userInfo.nickname}}&nbsp;,</span>
      欢迎您~
    </div>
    <div class="mask" v-if="isMask">
      <div class="login" v-if="isLogin">
        <login 
        @unLogin="unLoginFromSon" 
        @toRegister="toRegisterFromSon"
        @loginInfo="getLoginInfo"/>
      </div>
      <div class="register" v-if="isRegister">
        <register 
        @unRegister="unRegisterFromSon" 
        @toLogin="toLoginFromSon"
        @registerInfo="getRegisterInfo"/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/login'
import Register from '@/components/register'

export default {
  name: 'navbar',
  data(){
    return {
      isActive: 1,
      isMask: false,
      isLogin: false,
      isRegister: false,
      userInfo: {}
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    toIndex(){
      this.$router.push({name:'Index'})
      this.isActive = 1
    },
    toTechShare(){
      this.$router.push({name:'TechShare'})
      this.isActive = 2
    },
    toMemory(){
      this.$router.push({name:'Memory'})
      this.isActive = 3
    },
    toMoodEssay(){
      this.$router.push({name:'MoodEssay'})
      this.isActive = 4
    },
    toTimeAxis(){
      this.$router.push({name:'TimeAxis'})
      this.isActive = 5
    },
    toMessage(){
      this.$router.push({name:'Message'})
      this.isActive = 6
    },
    toAboutMe(){
      this.$router.push({name:'AboutMe'})
      this.isActive = 7
    },

    toLogin(){
      this.isMask = true
      this.isLogin = true
      this.isRegister = false
    },
    toRegister(){
      this.isMask = true
      this.isRegister = true
      this.isLogin = false
    },
    unLoginFromSon(data){
      this.isMask = data
    },
    unRegisterFromSon(data){
      this.isMask = data
    },
    toRegisterFromSon(data){
      this.isMask = data.isMask
      this.isLogin = data.isLogin
      this.isRegister = data.isRegister
    },
    toLoginFromSon(data){
      this.isMask = data.isMask
      this.isLogin = data.isLogin
      this.isRegister = data.isRegister
    },
    getLoginInfo(data){
      this.userInfo = data
    },
    getRegisterInfo(data){
      this.userInfo = data
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/navbar/index.scss";
</style>