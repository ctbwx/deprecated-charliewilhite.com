// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueClipboard from 'vue-clipboard2';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app';
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueClipboard);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
