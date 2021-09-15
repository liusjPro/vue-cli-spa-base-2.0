import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

// 共通API导入
import '@assets/js/httpUser'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
