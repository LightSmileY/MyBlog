<template>
  <div id="links">
    <div class="title">
      友情链接
    </div>
    <ul class="links-ul">
      <li class="links-li" @click="toLongBlog">胡健龙个人博客</li>
      <li class="links-li">杨伟艺个人博客</li>
      <li class="links-li">张凤云个人博客</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'links',
  components: {
    
  },
  methods: {
    toLongBlog(){
      let url = "https://hihaker.github.io/"
      window.open(url,"_blank")
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/links.scss";
</style>