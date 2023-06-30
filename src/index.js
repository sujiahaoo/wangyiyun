import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './views/index.vue';
import Switch from './compontents/Switch.vue';
Vue.component('V-Switch', Switch);

Vue.component('Icon', Icon);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Popup } from 'vant';
Vue.use(Popup);
// 页面打开请求自动发送
// 请求回来的数据还要渲染到页面上 （数据驱动视图）
// 数据驱动视图变化的条件：数据必须是响应式数据（data）+ 数据必须通过模板语法绑定到模板中111
// vue中this的指向问题：methods中的所有函数（不要箭头函数）的this指向vm（vue的实例）
const vm = new Vue({
  el: '#app',
 render:h=>h(indexView),

});
window.vm = vm;
console.log(vm);
// 以_开头的变量名属性名是私有变量或私用属性，不希望其他人去使用
// 一般情况下：我们在实例化vue传递的配置项 a => $a
// el => $el
// data => $data
// afterInit ==> created
