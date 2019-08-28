<template>
  <div id="article">
    <div class="container">
      <div class="left">
        <div class="moodEssayPage">
          <div class="articleList">
            <div class="title">
              心情随笔
            </div>
            <div class="essay" 
            v-loading="loading1"
            element-loading-text="玩命加载中"
            element-loading-background="rgba(255, 255, 255, 0)">
              <mood-essay :arrayList="moodEassyList"/>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="attentMe">
          <attent-me/>
        </div>
        <!-- <el-divider></el-divider> -->
        <div class="newArticles" 
        v-loading="loading2"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <new-articles :arrayList="articleList.slice(0,6)"/>
        </div>
        <!-- <el-divider></el-divider> -->
        <div class="links">
          <links/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoodEssay from '@/components/public/moodEssay'
import AttentMe from '@/components/public/attentMe'
import NewArticles from '@/components/public/newArticles'
import Links from '@/components/public/links'
import { getArticlesByType, getArticlesTypeInTS } from '@/api/getData'

export default {
  name: 'moodEssayPage',
  data(){
    return{
      loading1: true,
      loading2: true,
      prop: {
        type: "心情随笔"
      },
      moodEassyList: [],
      articleList: []
    }
  },
  components: {
    AttentMe,
    NewArticles,
    Links,
    MoodEssay
  },
  beforeMount(){
    let _this = this
    getArticlesByType(_this.prop)
    .then(res => {
      console.log(res)
      _this.moodEassyList = res.data.articles.reverse()
      _this.loading1 = false
    })

    getArticlesTypeInTS()
    .then(res => {
      console.log(res)
      _this.articleList = res.data.articles.reverse()
      _this.loading2 = false
    })
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/article/index.scss";
</style>