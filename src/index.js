import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import app from '@/app.vue';
import Switch from './compontents/Switch.vue';
import formateTime from './utils/formateTime';
import router from './router';
import Player from '@/compontents/player/player';
Vue.use(Player);

// Vue.use(Player);
Vue.component('V-Switch', Switch);
// import store from "@/store";

Vue.component('Icon', Icon);
import Vant from 'vant';
import 'vant/lib/index.css';
import 'core-js';
Vue.use(Vant);
import { Popup,Area } from 'vant';
import { Circle } from 'vant';
import { NoticeBar,DatetimePicker,Picker,Field,Cell, CellGroup, Tab, Tabs    } from 'vant';

Vue.use(Popup).use(Area).use(formateTime).use(Circle).use(NoticeBar).use(DatetimePicker).use(Picker).use(Field).use(CellGroup).use(Cell).use(Tab).use(Tabs);

const vm = new Vue({
  el: '#app',
  router,
  // store,
 components: { app },
 template: '<app/>',
});

