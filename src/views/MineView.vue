<template>
    <div class="h-screen w-screen bg-[#F5F5F5]">
        <div class="w-[90vw] h-[14vw] mx-auto flex justify-between items-center relative">
            <router-link :to="{ path: '/IndexView' }">
                <Icon icon="ic:baseline-less-than" class="w-[5vw] h-[5vw]" />
            </router-link>

            <input type="text" class="border-2 border-#fff w-[70vw] h-[8vw] pl-[6vw] rounded-3xl ">
            <span class="text-[#71787E]">搜索</span>
            <Icon icon="grommet-icons:form-search" class="w-[7vw] h-[7vw] absolute left-[9vw]" />
        </div>
        <div class="w-[90vw] h-[10vw] flex  justify-between items-center mx-auto">
            <p class="flex items-center">
                <Icon icon="icon-park-solid:people" color="red" class="w-[5vw] h-[5vw]" /><b>歌手</b>
            </p><span class="text-[#E5E8EA]">|</span>
            <p class="flex items-center">
                <Icon icon="entypo:music" color="red" class="w-[5vw] h-[5vw]" /><b>曲风</b>
            </p><span class="text-[#E5E8EA]">|</span>
            <p class="flex items-center">
                <Icon icon="basil:music-outline" color="red" class="w-[5vw] h-[5vw]" /><b>专区</b>
            </p><span class="text-[#E5E8EA]">|</span>
            <p class="flex items-center">
                <Icon icon="ph:microphone-duotone" color="red" class="w-[5vw] h-[5vw]" /><b>识曲</b>
            </p>
        </div>
        <div class="w-screen h-[200vw] flex  justify-between items-center mx-auto mt-7">
            <van-swipe :loop="false" class="w-[850vw] h-[200vw]" :width="260">
                <van-swipe-item v-for="item in biaoti" class="h-[190vw] bg-[white] ml-4 rounded-xl" style="width: 70vw" :key="item">
                    <div class="text-[6vw] font-[800] h-[18vw] w-[60vw] border-b-2 leading-12 ml-[6vw]  flex items-center"> {{ item.name }}
                         <p class="text-[3vw] w-[15vw] h-[6vw] rounded-xl bg-[#F0F5F6] flex items-center justify-around ">播放<Icon icon="mdi:play" /></p>
                    </div>
                   
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {fetchToplisDetail} from '@/request/index'
export default { 
    data() {
        return {
            biaoti :[]
        }
    },
    async created() {
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/toplist/detail'
            )
            .then((res) => {
                this.biaoti=res.data.list.slice(0,9)
                
                // console.log(this.biaoti);


            })
            axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/playlist/detail'
            )
            .then((res) => {
             console.log(res);

            })
            
          
    }
}
</script>