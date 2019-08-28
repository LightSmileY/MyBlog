<template>
  <div id="timeAxis">
    <div class="container">
      <div class="title">
        我的时光轴
      </div>
      <div class="timeAxis-main" 
      v-loading="loading"
      element-loading-text="玩命加载中"
      element-loading-background="rgba(255, 255, 255, 0)">
        <time-axis-list :arrayList="timeAxisList"/>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAxisList from '@/components/public/timeAxisList'
import { getTimeAxis } from '@/api/getData'

export default {
  name: 'timeAxis',
  data(){
    return{
      loading: true,
      timeAxisList: []
    }
  },
  components: {
    TimeAxisList
  },
  beforeMount(){
    let _this = this
    getTimeAxis()
    .then(res => {
      console.log(res)
      _this.timeAxisList = res.data.timeAxis.reverse()
      _this.loading = false
    })
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/timeAxis/index.scss";
</style>