import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
//import { baseUrl } from '../private/firebaseConfig';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false;

//Vue.prototype.$baseUrl = baseUrl;

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
