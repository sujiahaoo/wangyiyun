import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import app from '@/app.vue';
import Switch from './compontents/Switch.vue';
import formateTime from './utils/formateTime';
import router from './router';
Vue.component('V-Switch', Switch);
Vue.component('Icon', Icon);
import Vant from 'vant';
import 'vant/lib/index.css';
import 'core-js';
Vue.use(Vant);
import { Popup,Area } from 'vant';

Vue.use(Popup).use(Area).use(formateTime);

const vm = new Vue({
  el: '#app',
  router,
  // store,
 components: { app },
 template: '<app/>',
});

