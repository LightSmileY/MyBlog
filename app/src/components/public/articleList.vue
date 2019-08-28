<template>
  <div id="articleList">
    <li class="articleList-li" v-for="(item, index) in arrayList" :key="index">
      <div class="image" @click="toArticleDetaiPage">
        <img :src="item.body[0].image"/>
      </div>
      <dl class="articleList-dl">
        <dt class="articleList-dt" @click="toArticleDetaiPage(index)">{{item.title}}</dt>
        <dd class="articleList-dd">{{item.body[0].para}}</dd>
        <div class="info">
          <div class="type">
            <img src="@/assets/icons/type.png" alt="">
            {{item.type}}
          </div>
          <div class="time">
            <img src="@/assets/icons/time.png" alt="">
            {{item.update_time}}
          </div>
          <div class="likes">
            <img src="@/assets/icons/like.png" alt="">
            点赞({{item.likes.length}})
          </div>
          <div class="comments">
            <img src="@/assets/icons/comment.png" alt="">
            评论({{item.comments.length}})
          </div>
          <div class="views">
            <img src="@/assets/icons/view.png" alt="">
            浏览({{item.views}})
          </div>
        </div>
      </dl>
    </li>
  </div>
</template>

<script>

export default {
  name: 'footer',
  props: {
    arrayList: Array
  },
  methods: {
    toArticleDetaiPage(i){
      let _this = this
      this.$router.push({
        name:'ArticleDetail', 
        query: { title: _this.arrayList[i].title }
      })
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/articleList.scss";
</style>