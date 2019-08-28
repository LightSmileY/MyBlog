<template>
  <div id="app">
    <g-banner/>
    <g-navbar/>
    <div class="g-main">
      <router-view/>
    </div>
    <g-footer/>
  </div>
</template>

<script>
import GBanner from './components/banner'
import GNavbar from './components/navbar'
import GFooter from './components/footer'
import Canvas from '@/assets/js/heart.js'

export default {
  name: 'app',
  components: {
    GBanner,
    GNavbar,
    GFooter
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
.g-main{
  // background: linear-gradient(#CDFFF2, #fff, #CDFFF2); 
  background-color: #E9F8FF;
}
</style>
