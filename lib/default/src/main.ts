import '@/utils/common'
import vueCommon from '@/utils/vueCommon'
import http from '@/utils/http'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.mixin(vueCommon)
Vue.prototype.$http = http
Vue.prototype.$EventBus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
