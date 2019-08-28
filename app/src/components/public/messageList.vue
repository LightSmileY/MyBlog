<template>
  <div id="messageList">
    <li class="messageList-li" v-for="item in arrayList">
      <div class="myInfo">
        <div class="avatar">
          <img src="@/assets/images/user.jpg">
        </div>
        <div class="myInfo-name-time">
          <div class="myInfo-name">{{item.nickname}}</div>
          <div class="myInfo-time">{{item.time}}</div>
        </div>
      </div>
      <p class="words">{{item.message}}</p>
      <p class="words">{{item.comment}}</p>
    </li>
  </div>
</template>

<script>

export default {
  name: 'messageList',
  props: {
    arrayList: Array
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/messageList.scss";
</style>