<template>
    <div class="w-[100%] px-[4vw] bg-[white] fixed bottom-0 z-[50]">
        <div class="h-[14.3vw] flex items-center justify-between">
            <div class="w-[10.77vw] rotate-container">
                <!-- <img src="../../static/55.png" alt="" class="w-[10.77vw] h-[10.77vw]" > -->
                <div class="w-[12vw] h-[12vw] rounded-full bg-black "></div>
                <img :src="Player._currentTrack?.al?.picUrl" alt="" class="w-[8vw] h-[8vw] rounded-[50%] absolute top-[2vw] left-[2vw] rotate-image"  :class="{ 'paused-animation': this.play }">
            </div>
            <p class="w-[58vw] text-[black] text-[3.33vw]">{{ Player._currentTrack.name }}</p>
              <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="50px" :stroke-width="80" color="black" layer-color="red">
                <div @click="Player.playOrPause()">
                  <!-- <Icon @click.native="shows" v-if="xian" icon="ion:play-sharp"  class="w-[4vw] h-[4vw] "/> -->
                  <Icon @click.native="shows" v-if="yin" icon="ph:play-fill" />
                <Icon @click.native="shows" v-if="xian" icon="ic:round-pause" />
                </div>
                
              </van-circle>
            <Icon @click.native="display" icon="iconamoon:playlist" class="text-[4.7vw] text-[black]" />
        </div>
         <van-popup v-model= show round position="bottom" style=" height:70%;backgroundColor:#272727"  >
            <div class="w-[100%] pr-[5vw] pl-[4.62vw]">
              <p class="text-[4vw] text-[white] mt-[4.97vw] pb-[4.4vw]">当前播放</p>
              <div class="text-[white] text-[4.26vw] flex items-center justify-between pr-[8vw]">
                <div class=" flex items-center justify-between"> <Icon icon="icon-park-outline:loop-once" class="text-[#ADADAD] text-[5.38vw]" />&nbsp;&nbsp;列表循环</div>
                <div class="flex items-center justify-between w-[28vw]">
                <Icon icon="line-md:downloading-loop" class="text-[#ADADAD] text-[5.38vw]" />
                <Icon icon="icon-park-outline:add" class="text-[#ADADAD] text-[5.38vw]" />
                <Icon icon="uiw:delete" class="text-[#ADADAD] text-[5vw]" />
                </div>
              </div>
              <!-- 歌曲列表 -->
              <div class="mt-[8vw]">
         <ul class="">
            <li class="flex justify-between items-center mt-[6vw]" v-for='item in fetch' :key="item" >
              <!-- <div class="text-[3vw] text-[#afac86] w-[4vw]">{{index+1}}</div> -->
              <div class="text-[4vw] text-white dark:text-[black] w-[66vw] overflow-hidden h-[13vw]"><p>{{item.name}}</p>
            <div class="text-[white] dark:text-[black] text-[3vw] mt-[2vw] ">
            <!-- <p class="text-[#d3c27a] text-[2vw] border border-[#d3c27a] flex justify-center items-center">
              <span>超清母带</span>
            </p> -->
            <template v-for="artist in item.ar">
              <span v-if="artist.name" class="overflow-hidden" :key="artist">{{ artist.name }}</span>
            </template>
          </div>
              </div>
              <div class="text-[white] dark:text-[black] w-[13vw] flex justify-between items-center">
                <!-- <Icon class="text-[white] dark:text-[black]" icon="ph:monitor-play-fill" width="20" height="20" />
                <Icon  class="text-[white] dark:text-[black]" icon="simple-line-icons:options-vertical" width="20" /> -->
                <Icon icon="bi:x" color="#7f7f7f" width="20" />
              </div>
            </li>
          </ul>
              </div>
              </div>
        </van-popup>
    </div>
</template>                      
<script>
import Player from "./player"
import {songQu} from "@/request"
export default {
    data() {
        return {
            Player: new Player(),
            show:false,
            currentRate:0,
            fetch:[],
            play:window.$player?._playing,
            xian:true,
            yin:false
        }
    },
    computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
    methods:{
        display(){
            this.show = !this.show
        },
        shows(){
          this.xian=!this.xian;
          this.yin=!this.yin;
        }
    },
     async created() {
        console.log(this.Player);
        window.$player = this.Player,
        songQu(this.$route.query.id).then((res) => {
          // console.log(res)
          this.fetch = res.data.songs 
          // console.log(this.fetch);
        })
    },
   
}
</script>
<style>
.van-circle{
    width: 25px !important;
}
.rotate-container {
  position: relative;
}

.rotate-image {
  animation: rotate 10s infinite linear; /* 调整动画的持续时间和速度根据实际需要 */
}

.paused-animation {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>