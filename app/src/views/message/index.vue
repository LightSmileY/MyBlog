<template>
  <div id="message">
    <div class="container">
      <div class="title">
        给我留言
      </div>
      <div class="main">
        <div class="write">
          <el-input
            type="textarea"
            placeholder="请输入留言内容..."
            v-model="userInfo.message"
            maxlength="200"
            show-word-limit
            rows="4"
          >
          </el-input>
          <div class="submit">
            <el-button type="primary" size="small" @click="message">提交</el-button>
          </div>
        </div>
        <div class="message-title">
          最新评论
        </div>
        <ul class="message-ul" 
        v-loading="loading"
        element-loading-text="玩命加载中"
        element-loading-background="rgba(255, 255, 255, 0)">
          <!-- 留言列表组件 -->
          <message-list :arrayList="messageList"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MessageList from '@/components/public/messageList'  /*留言列表组件*/
import { addMessage, getAllMessages } from '@/api/getData'
import { getDate } from '@/assets/js/func'

export default {
  name: 'message',
  data() {
    return {
      loading: true,
      text: '',
      messageList: [],
      userInfo: {             /*留言所需信息*/

      }
    }
  },
  components: {
    MessageList
  },
  methods: {
    /*获取留言列表*/
    getMessageList(){
      let _this = this
      getAllMessages()
      .then(res => {
        console.log(res)
        _this.messageList = res.data.messages.reverse()
        _this.loading = false
      })
    },
    /*给我留言*/
    message(){
      let _this = this
      if(_this.$store.state.userInfo.username){
        if(_this.userInfo.message){
          _this.userInfo.username = _this.$store.state.userInfo.username
          _this.userInfo.nickname = _this.$store.state.userInfo.nickname
          _this.userInfo.time = getDate()
          addMessage(_this.userInfo).
          then(res => {
            console.log(res)
            if(res.data.code === 0){
              _this.success()
              _this.getMessageList()
            }else{
              _this.fail()
            }
          })
          .catch(() => {
            _this.fail()
          })
        }else{
          _this.info('留言内容不能为空哦~')
        }
      }else{
        _this.info('请登录后再留言哦~')
      }
    },
    info(string) {
      this.$message({
        message: string,
        type: 'warning'
      });
    },
    success() {
      this.$message({
        message: '留言成功',
        type: 'success'
      });
    },
    fail() {
      this.$message({
        message: '留言失败',
        type: 'error'
      });
    }
  },
  beforeMount(){
    this.getMessageList()
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/message/index.scss";
</style>