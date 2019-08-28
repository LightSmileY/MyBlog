<template>
  <div id="article">
    <div class="container">
      <div class="left">
        <div class="articleDetailPage" 
        v-loading="loading1"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <div class="title">
            {{article.title}}
          </div>
          <div class="name-time">
            <div class="name">
              <img src="@/assets/icons/user.png">
              <span>淡然</span>
            </div>
            <div class="time">
              <img src="@/assets/icons/time.png">
              <span>{{article.create_time}}</span>
            </div>
          </div>
          <div class="body">
            <li class="p-img" v-for="item in article.body">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.para}}</p>
              <img :src="item.image">
            </li>
          </div>
          <div class="operate">
            <ul class="operate-ul">
              <li @click="toLike">
                <img :src="likeIcon">
                <div>点赞</div>
                <div>({{article.likes.length}})</div>
              </li>
              <li @click="openComment">
                <img src="@/assets/icons/comment.png">
                <div>评论</div>
                <div>({{article.comments.length}})</div>
              </li>
            </ul>
          </div>
          <div class="comments">
            <div class="comment-title">
              最新留言
            </div>
            <div class="toComment" v-if="toCommentStatus">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="评论该文章..."
                v-model="comment">
              </el-input>
              <el-button 
              type="primary"
              size="mini"
              @click.stop="toComment">
                评论
              </el-button>
            </div>
            <div class="commentList">
              <!-- 留言列表组件 -->
              <message-list :arrayList="messageList"/>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="attentMe">
          <attent-me/>
        </div>
        <div class="newArticles" 
        v-loading="loading2"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <new-articles 
          :arrayList="articleList.slice(0,6)"
          @refresh="reload"/>
        </div>
        <div class="links">
          <links/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AttentMe from '@/components/public/attentMe'
import NewArticles from '@/components/public/newArticles'
import Links from '@/components/public/links'
import { 
  getArticleByTitle, 
  getArticlesTypeInTS, 
  viewArticle,
  likeArticle,
  commentArticle
} from '@/api/getData'
import { getDate } from '@/assets/js/func'
import MessageList from '@/components/public/messageList'
/*点赞图标*/
import Like from '@/assets/icons/like.png'
import LikeActive from '@/assets/icons/like_active.png'

export default {
  name: 'article',
  data(){
    return{
      loading1: true,
      loading2: true,
      prop: {
        title: ''
      },
      article: {},
      articleList: [],
      //点赞
      likeIcon: Like,
      toCommentStatus: false,  /*是否展开了评论框*/
      comment: "",
      messageList: []
    }
  },
  components: {
    AttentMe,
    NewArticles,
    Links,
    MessageList
  },
  methods: {
    reload(data){
      let _this = this
      _this.prop.title = this.$route.query.title
      getArticleByTitle(_this.prop)
      .then(res => {
        console.log(res)
        _this.article = res.data.article
        _this.loading1 = false
      })
      .then(() => {
        viewArticle()
      })
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    /*获取文章*/
    getArticle(){
      let _this = this
      _this.prop.title = this.$route.query.title
      getArticleByTitle(_this.prop)
      .then(res => {
        console.log(res)
        _this.article = res.data.article
        _this.messageList = res.data.article.comments.reverse()
        _this.loading1 = false
        for(let i in _this.article.likes){
          if(_this.article.likes[i] = _this.$store.state.userInfo.username){
            _this.likeIcon = LikeActive
          }
        }
      })
    },
    /*点击点赞图标*/
    toLike(){
      let _this = this
      if(!this.$store.state.userInfo.username){
        this.$message({
          message: '请先登录~',
          type: 'error'
        });
      }else{
        if(this.likeIcon == LikeActive){
          this.$message({
            message: '已点过赞~',
            type: 'error'
          });
        }else{
          likeArticle({
            title: this.article.title,
            username: this.$store.state.userInfo.username,
            nickname: this.$store.state.userInfo.nickname,
            time: getDate()
          })
          .then(res => {
            console.log(res)
            _this.likeIcon = LikeActive
            _this.$message({
              message: res.data.msg,
              type: 'success'
            });
          })
        }
      }
    },
    /*点击评论图标*/
    openComment(){
      this.toCommentStatus == true ? this.toCommentStatus = false : this.toCommentStatus = true
    },
    /*点击评论按钮*/
    toComment(){
      let _this = this
      if(this.$store.state.userInfo.username){
        commentArticle({
          title: this.article.title,
          username: this.$store.state.userInfo.username,
          nickname: this.$store.state.userInfo.nickname,
          comment: this.comment,
          time: getDate()
        })
        .then(res => {
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
          _this.getArticle()
          _this.comment = "" /*评论后输入框置空*/
        })
      }else{
        this.$message({
          message: '请先登录~',
          type: 'error'
        });
      }
    }
  },
  beforeMount(){
    let _this = this
    this.getArticle()
    /*查看文章*/
    viewArticle(_this.prop)
    /*获取所有“技术分享”和“韶华追忆”文章*/
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