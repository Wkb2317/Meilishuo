import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "components/common/toast/index";
import VueLazyLoad from "vue-lazyload";
import { Form } from "vant";
import { Field } from "vant";
import { Button } from 'vant'

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

Vue.config.productionTip = false;

Vue.use(toast);
Vue.use(VueLazyLoad);
// 原型，增加事件总线这个方法
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
