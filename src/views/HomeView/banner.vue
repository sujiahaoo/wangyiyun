<!-- 轮播 -->
<template>
      <van-swipe class="my-swipe mt-[3vw]" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item">  <img :src="item.pic" class="w-[83vw] h-[40vw] mx-auto rounded-2xl"></van-swipe-item>
     
</van-swipe>
</template>
<script>
import axios from 'axios';

    export default{ 
        props:['banners'],
         async created(){
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then(res=>{
                this.banners = res.data.data.blocks[0].extInfo.banners; 
               console.log(this.banners);
            })
            .catch(err=>{
                console.log(err);
            })
        }

    }
</script>

<style>
    .swiper{
        margin: 3vw auto;
    }
</style>