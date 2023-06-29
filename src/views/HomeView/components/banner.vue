<!-- 轮播 -->
<template>
    <div>
      <van-swipe class="my-swipe mt-[3vw]" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item">  <img :src="item.pic" class="w-[83vw] h-[40vw] mx-auto rounded-2xl"></van-swipe-item>
     
</van-swipe>
</div>
</template>
<script>
import axios from 'axios';

    export default{ 
        props:['banners'],
        
    }
</script>

<style>
    .swiper{
        margin: 3vw auto;
    }
</style>