<template>
  <div id="attentMe">
    <div class="title">
      关注我
    </div>
    <div class="mine">
      <dl class="mine-dl" @click="toMyGithub" title="去博主的GitHub">
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
</template>

<script>

export default {
  name: 'attentMe',
  methods: {
    toMyGithub(){
      let url = "https://github.com/LightSmileY"
      window.open(url,"_blank");
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/attentMe.scss";
</style>