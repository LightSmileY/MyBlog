<template>
  <div id="moodEssay">
    <div class="essay-items" v-for="item in arrayList">
      <div class="icon-time">
        <img src="@/assets/icons/time.png">&nbsp;
        <div class="time">
          {{item.create_time}}
        </div>
      </div>
      <div class="line"></div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.body[0].para}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'moodEssay',
  props: {
    arrayList: Array
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/moodEssay.scss";
</style>