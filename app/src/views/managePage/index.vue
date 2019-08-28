<template>
  <div id="managePage">
    <div class="container">
      <ul class="navs">
        <li 
        class="nav-item"
        :class="{'nav-item-active': isActive === 1}"
        @click="toUserManagePage">
          <i id="icon" class="el-icon-user"></i>
          <span class="name">用户</span>
        </li>
        <li 
        class="nav-item"
        :class="{'nav-item-active': isActive === 2}"
        @click="toArticleManagePage">
          <i id="icon" class="el-icon-document"></i>
          <span class="name">文章</span>
        </li>
        <li 
        class="nav-item"
        :class="{'nav-item-active': isActive === 3}"
        @click="toMessageManagePage">
          <i id="icon" class="el-icon-chat-dot-round"></i>
          <span class="name">留言</span>
        </li>
        <li 
        class="nav-item"
        :class="{'nav-item-active': isActive === 4}"
        @click="toTimeAixsManagePage">
          <i id="icon" class="el-icon-timer"></i>
          <span class="name">时光轴</span>
        </li>
      </ul>
      <div class="body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'managePage',
  data() {
    return {
      isActive: 1
    }
  },
  components: {
    
  },
  methods: {
    toUserManagePage(){
      this.$router.push({path:'/managePage/user'})
      this.isActive = 1
    },
    toArticleManagePage(){
      this.$router.push({path:'/managePage/article'})
      this.isActive = 2
    },
    toMessageManagePage(){
      this.$router.push({path:'/managePage/message'})
      this.isActive = 3
    },
    toTimeAixsManagePage(){
      this.$router.push({path:'/managePage/timeAxis'})
      this.isActive = 4
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/managePage/index.scss";
</style>