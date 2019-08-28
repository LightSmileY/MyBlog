<template>
  <div id="article">
    <div class="container">
      <div class="left">
        <div class="indexPage">
          <div class="slide" 
          v-loading="loading"
          element-loading-text="玩命加载中"
          element-loading-background="rgba(255, 255, 255, 0)">
            <el-carousel :interval="4000" type="card" height="180px">
              <el-carousel-item v-for="item in articleList.slice(0,6)">
                <img :src="item.body[0].image">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="articleList">
            <div class="title">
              最新文章
            </div>
            <ul class="article-ul" 
            v-loading="loading"
            element-loading-text="玩命加载中"
            element-loading-background="rgba(255, 255, 255, 0)">
                <article-list :arrayList="articleList"/>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="attentMe">
          <attent-me/>
        </div>
        <div class="newArticles" 
        v-loading="loading"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <new-articles :arrayList="articleList.slice(0,6)"/>
        </div>
        <div class="links">
          <links/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/public/articleList'
import AttentMe from '@/components/public/attentMe'
import NewArticles from '@/components/public/newArticles'
import Links from '@/components/public/links'
import { getArticlesTypeInTS } from '@/api/getData'

export default {
  name: 'index',
  data(){
    return{
      loading: true,
      prop: {
        type: "韶华追忆"
      },
      articleList: []
    }
  },
  components: {
    ArticleList,
    AttentMe,
    NewArticles,
    Links
  },
  beforeMount(){
    let _this = this
    getArticlesTypeInTS()
    .then(res => {
      console.log(res)
      _this.articleList = res.data.articles.reverse()
      _this.loading = false
    })
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/article/index.scss";
</style>