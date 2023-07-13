<template>
  <div class="w-screen h-screen">
    <!-- <IndexView></IndexView> -->
    <!-- <router-link :to="{path:'/MineView'}">go to MineView</router-link> -->
    <!-- <router-link :to="{path:'/IndexView'}">go to IndexVIew</router-link> -->

    <router-view></router-view>
    <!-- 播放 -->
    <!-- 播放器 -->
        <Player class="fixed bottom-0 bg-[#fff] z-[30]" />
    <!-- <Menus /> -->
  </div>
</template>
<script>
import Player from "@/compontents/player/player.vue"


export default {
  components:{Player}
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
