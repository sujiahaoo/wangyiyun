<template>
  <div class="w-screen h-screen">
    <!-- <IndexView></IndexView> -->
    <!-- <router-link :to="{path:'/MineView'}">go to MineView</router-link> -->
    <!-- <router-link :to="{path:'/IndexView'}">go to IndexVIew</router-link> -->

    <router-view></router-view>
  </div>
</template>
<script>


export default {
  // created() {
  //   // setTimeout(() => {
  //   //   // 编程式导航
  //   //   this.$router.push('/IndexView');
  //   // }, 10000);
  // },
  // components: { IndexView },
  // data() {
  //   return {
  //     visibleView: 'HomeView',
  //   };
  // },
  // beforeCreate() {
  //   window.onhashchange = () => {
  //     this.visibleView = location.hash.replace('#', '');
  //     console.log(this.visibleView);
  //   };
  // },
  // created() {
  //   window.vm = this;
  // },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
