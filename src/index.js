import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import app from '@/app.vue';
import Switch from './compontents/Switch.vue';
// import Dialog from './compontents/Dialog';
// Vue.use(Dialog);
import router from './router';
Vue.component('V-Switch', Switch);
Vue.component('Icon', Icon);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Popup } from 'vant';
Vue.use(Popup);
// import Vuex from '@/vuex';
// Vue.use(Vuex)
// const store=new Vuex.Store({
//   state:{
//     count:123,
//     msg:'hellow,vuex!'
//   },
//   mutations:{
//     increase(state){
//       state.count++
//     }
//   }
// })
const vm = new Vue({
  el: '#app',
  router,
  // store,
 components: { app },
 template: '<app/>',
});

