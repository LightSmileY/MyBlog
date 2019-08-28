<template>
  <div id="newArticles">
    <div class="title">
      最新文章
    </div>
    <ul class="newArticles-ul">
      <li 
      class="newArticles-li" 
      v-for="(item, index) in arrayList"
      :key="index"
      @click="toArticleDetaiPage(index)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'newArticles',
  props: {
    code: 0,
    arrayList: Array
  },
  methods: {
    toArticleDetaiPage(i){
      let _this = this
      this.$router.push({
        name:'ArticleDetail', 
        query: { title: _this.arrayList[i].title }
      })
      this.$emit('refresh',this.code)
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/newArticles.scss";
</style>