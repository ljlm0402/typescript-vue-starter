import '@/utils/common'
import vueCommon from '@/utils/vueCommon'
import http from '@/utils/http'
import i18n from '@/utils/i18n'
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
  i18n,
  render: h => h(App)
}).$mount('#app')
