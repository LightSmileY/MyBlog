<template>
  <div id="timeAxis">
    <el-timeline>
      <el-timeline-item 
      :timestamp="item.create_time" 
      placement="top" size="large" 
      v-for="item in arrayList" 
      color="#6BCEFF">
        <el-card>
          <div class="myInfo">
            <div class="avatar">
              <img src="@/assets/images/avatar.jpg">
            </div>
            <div class="name-time">
              <div class="name">淡然</div>
              <div class="time">{{item.create_time}}</div>
            </div>
          </div>
          <p class="words" style="margin-bottom: 5px;color: #2A66CE;">#{{item.title}}#</p>
          <p class="words">{{item.info}}</p>
          <div class="myImages">
            <div class="myImage">
              <el-image
              style="width: 146px; height: 146px;margin: 20px 10px 0 10px;"
              :src="image"
              :preview-src-list="item.images"
              fit="cover"
              v-for="image in item.images"
              ></el-image>
            </div>
          </div>
          <div class="location">
            <img src="@/assets/icons/location.png">
            <span>{{item.location}}</span>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  name: 'timeAxis',
  data(){
    return {
      
    }
  },
  props: {
    arrayList: Array
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/pubComponents/timeAxisList.scss";
</style>

