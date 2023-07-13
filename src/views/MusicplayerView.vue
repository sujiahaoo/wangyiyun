<template>
    <div class="w-screen h-screen bg-gradient-to-br from-blue-300 to-pink-400">
        <div class="w-[100vw] h-[20vw]  flex justify-around items-center">
            <van-icon name="arrow-down" size="25" color="white" @click="getSong" />
            <div class=" text-center">
                <b class="text-[white]">{{ $player._currentTrack.name }}</b>
                <div class="flex text-[#939B98] items-center">{{ $player._currentTrack.al.name }}<div
                        class="w-[8vw] h-[5vw] rounded-[5px] text-[2vw] bg-[#555D5A] leading-[5vw] text-center">关注</div>
                </div>
            </div>
            <van-icon name="share-o" size="25" color="white" />
        </div>
        <div class="w-screen h-[110vw] mt-[13vw] relative">
         
         
                <img :src="imageSrc" alt="" :class="{ 'rotate-45': isRotated }"  class="w-[21vw] h-[35vw] mx-auto absolute left-[44vw] xuan" style="">
          
            <div class=" relative pt-[22vw]">
                <transition>
                <img class=" w-[45vw] h-[45vw] rounded-full mx-auto absolute top-[32vw] left-[28vw] xhzuan"
                    :src=" $player._currentTrack?.al?.picUrl " :style="{ transform: rotateStyle }" alt="">
                </transition>
                <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="w-[65vw] h-[65vw] mx-auto">
            </div>
        </div>
        <div class="w-[83vw] h-[13vw] flex justify-around mx-auto">
            <Icon icon="icon-park-outline:like" color="white" width="40" />
            <Icon icon="ion:download-outline" color="white" width="40" />
            <Icon icon="iconoir:emoji-sing-right-note" color="white" width="40" />
            <Icon icon="ant-design:message-outlined" color="white" width="40" />
            <Icon icon="fontisto:more-v-a" color="white" width="7" />
        </div>
        <div class="w-[80vw] h-[12vw] mx-auto flex items-center">
            <div>0000</div>
            <div class="w-[2vw] h-[2vw] rounded-full bg-white"></div>
            <div class="h-[1vw] w-[72vw] bg-[#747273]"></div>
            <div>111</div>
        </div>
        <div class="w-[80vw] h-[18vw] mx-auto flex justify-around items-center mt-[10vw]">
            <Icon icon="bx:shuffle" color="white" width="40" />
            <Icon icon="fluent:previous-16-filled" color="white" width="40" />

            <Icon :icon=" `${$player._playing ? 'zondicons:pause-outline' : 'zondicons:play-outline'}` " color="white"
                width="60" @click.native=" playFn " />
            <!-- <Icon :icon="`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="20px" @click.native="playFn" /> -->
            <Icon icon="fluent:next-16-filled" color="white" width="40" />
            <Icon icon="icon-park-solid:more-app" color="white" width="40" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageSrc: '/static/needle-ab.png', // 图片路径,
           isRotated :false,
           isRotating: false // 初始状态为不旋转
        }
    },
    computed: {
    rotateStyle() {
      return this.isRotating ? 'transform: rotate(360deg)' : ''; // 设置旋转样式
    }
  },
    methods: {
        // 跳转到歌单
        getSong() {
            this.$router.go(-1)
        }
        , playFn() {
            this.$player.playOrPause();
            this.isRotated = !this.isRotated; // 切换旋转状态
            this.isRotating = true ; // 停止旋转
        },
    
    }
}
</script>
<style>
.xuan{
    transform: rotate(0);
    transition: transform 0.3s ease;
    z-index: 70;transform-origin:top
}
 .rotate-45{
  transform: rotate(-25deg);
  transition: transform 0.3s ease;

}
.rotate-transition-enter-active,
.rotate-transition-leave-active {
  transition: transform 0.3s ease;
}

@keyframes xhzuan{
    0%   {transform:rotate(0deg);}	
    100%   {transform:rotate(360deg);}
}
</style>