import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import store from './store/store'

Vue.use(ElementUI);

// Vue.prototype.$axios = axios
// Vue.prototype.$qs = qs
Vue.prototype.$store = store;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
