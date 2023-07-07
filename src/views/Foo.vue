<template>
    <div>
      <h1 @click="$store.mutations.increase">Foo view{{ count }}</h1>
      <button @click="fn">toggle dialog</button>
      <!-- <button @click="increase">toggle dialog</button> -->
      <!-- <Dialog title="警告" message="我是提示内容！" /> -->
    </div>
  </template>
  <script>
  import Dialog from '@/compontents/Dialog';
  import store from '@/store/_index'
  import {mapState} from '@/vuex'
  import {getUserAccount } from "@/request"
  // console.log(store);
  export default {
    computed:{
      // count(){
      //   return store.state.count
      // },
      // msg(){
      //   return store.state.msg
      // }
      ...mapState(['count'])
    },
    methods: {
      // increase(){
      //   store.mutations.increase()
      // },
      increase:store.mutations.increase,
      fn() {
        Dialog({ title: '警告', message: '我是提示内容！' })
          .then(function () {
            console.log('点击了确定');
          })
          .catch(function () {
            console.log('点击了取消');
          });
      },
    },
   async created() {
    
    },
  };
  </script>