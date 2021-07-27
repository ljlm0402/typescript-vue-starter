import "@/helpers/common";
import "@/plugins/compositionApi";
import vueCommon from "@/mixins";
import http from "@/helpers/http";
import i18n from "@/plugins/i18n";
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

Vue.mixin(vueCommon);

Vue.prototype.$http = http;
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
