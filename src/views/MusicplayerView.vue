<template>
    <div>
        <!-- <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-screen h-screen "> -->


        <div class="w-screen h-screen  transition-container"
            :style="{ background: `url(${$player._currentTrack?.al?.picUrl})`, backgroundSize: '100%' }">
            <div id="mao" class=" w-screen h-screen absolute">

            </div>
            <div class=" relative">
                <div class="w-[100vw] h-[20vw]  flex justify-around items-center">
                    <van-icon name="arrow-down" size="25" color="white" @click="getSong" />
                    <div class=" text-center">
                        <b class="text-[white]">{{ $player._currentTrack.name }}</b>
                        <div class="flex text-[#939B98] items-center">{{ $player._currentTrack.al.name }}<div
                                class="w-[8vw] h-[5vw] rounded-[5px] text-[2vw] bg-[#555D5A] leading-[5vw] text-center">关注
                            </div>
                        </div>
                    </div>
                    <van-icon name="share-o" size="25" color="white" />
                </div>
                <div class="w-screen h-[110vw] mt-[13vw] relative">
                    <transition>

                        <img :src="imageSrc" alt="" :class="{ 'rotate-45': isRotated }"
                            class="w-[21vw] h-[35vw] mx-auto absolute left-[44vw] xuan" style="">
                    </transition>
                    <div class=" relative pt-[22vw]">
                        <transition name="rotate-transition">
                            <img :class="{ 'paused-animation': !this?.$player?._playing }"
                                :src="$player._currentTrack?.al?.picUrl" alt=""
                                class=" w-[45vw] h-[45vw] rounded-full mx-auto absolute top-[32vw] left-[28vw] rotate-image rotateAnimation">
                        </transition>
                        <img src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="w-[65vw] h-[65vw] mx-auto">
                    </div>
                </div>
                <div class="w-[83vw] h-[13vw] flex justify-around mx-auto">
                    <Icon icon="icon-park-outline:like" color="white" width="40" @click.native="$player._nextTrackCallback()" />
                    <Icon icon="ion:download-outline" color="white" width="40" />
                    <Icon icon="iconoir:emoji-sing-right-note" color="white" width="40" />
                    <Icon icon="ant-design:message-outlined" color="white" width="40" />
                    <Icon icon="fontisto:more-v-a" color="white" width="7" />
                </div>
                <!-- <div class="w-[80vw] h-[12vw] mx-auto flex items-center">
                <div>0000</div>
                <div class="w-[2vw] h-[2vw] rounded-full bg-white"></div>
                <div class="h-[1vw] w-[72vw] bg-[#747273]"></div>
                <div>111</div>
            </div> -->
                <!-- <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true"
                    :min="0" :max="$player._duration" :interval="0.1" class="flex-1 mx-[2.5vw]" /> -->
                <div class="flex justify-between items-center mt-[10vw]">
                    <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">{{ timeModification($player._progress) }}
                    </div>
                    <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none"
                        :drag-on-click="true" :min="0" :max="$player._duration" :interval="0.1" class="flex-1 mx-[2.5vw]" />
                    <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">{{ timeModification($player._duration) }}
                    </div>
                </div>

                <div class="w-[80vw] h-[18vw] mx-auto flex justify-around items-center mt-[10vw]">
                    <Icon icon="bx:shuffle" color="white" width="40" />
                    <Icon icon="fluent:previous-16-filled" color="white" width="40" />

                    <Icon :icon="`${$player._playing ? 'zondicons:pause-outline' : 'zondicons:play-outline'}`" color="white"
                        width="60" @click.native="playFn" />
                    <!-- <Icon :icon="`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="20px" @click.native="playFn" /> -->
                    <Icon icon="fluent:next-16-filled" color="white" width="40" @click.native="$player._nextTrackCallback()" />
                    <Icon icon="icon-park-solid:more-app" color="white" width="40" @click.native="show = !show" />
                </div>
            </div>

        </div>
        <!-- 播放列表 -->
        <van-popup class="rounded-t-[20px] px-[5.4vw]" v-model="show" position="bottom" :style="{ height: '60%' }">
            <div class="playmusic py-[6vw]">
                <h1 class="text-[4vw] font-extrabold">
                    当前播放 <span class="text-[2vw] text-[#929293]">({{ music.length }}) </span>
                </h1>
                <div class="flex justify-between mt-[6.6vw] items-center">
                    <div class="flex">
                        <!-- 列表循环图标 -->
                        <Icon icon="arcticons:loopboard" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                        <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
                    </div>
                    <div class="flex w-[30vw] justify-between">
                        <!-- 下载图标 -->
                        <Icon icon="mi:download" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                        <!-- 收藏图标 -->
                        <Icon icon="fluent:collections-20-regular" :horizontalFlip="true"
                            class="text-[5vw] text-[#B1B1B1]" />
                        <!-- 删除 -->
                        <Icon icon="fluent-mdl2:delete" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                    </div>
                </div>
            </div>
            <!-- 歌曲列表 -->
            <div>
                <div v-for="(item, index) in music" :key="index.id" class="flex justify-between items-center h-[14vw]"
                    @click="playSingle(item.id)">
                    <div class="flex items-center">
                        <img src="/static/wave.gif" class="red-image w-[2vw] h-[2vw]"
                            v-if="item.id === $player._currentTrack.id" alt="" />
                        <h1 class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1"
                            :class="item.id === $player._currentTrack.id ? 'text-[#D15B57]' : ''">
                            {{ item.name }}
                            <span :class="item.id === $player._currentTrack.id ? 'text-[#D15B57]' : ''"
                                class="text-[3vw] text-[#BCBCBC]">-{{ item.ar[0].name }}</span>
                        </h1>
                    </div>
                    <div class="flex items-center">
                        <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]" v-if="item.id === $player._currentTrack.id">播放来源</p>
                        <Icon @click.native="fn(index, item.id)" icon="ic:baseline-close" :horizontalFlip="true"
                            class="text-[5vw] text-[#B1B1B1]" />
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import store from 'storejs'

export default {
    data() {
        return {
            imageSrc: '/static/needle-ab.png', // 图片路径,
            isRotated: false,
            // isRotating: false,// 初始状态为不旋转
            show: false,
            music: [],
        }
    },
    computed: {
        rotateStyle() {
            return this.isRotating ? 'transform: rotate(360deg)' : ''; // 设置旋转样式
        }
    },
    methods: {
        timeModification(time) {
            const minutes = Math.floor(time / 60);
            return `${String(minutes).padStart(2, '0')}:${String(
                Math.floor(time % 60)
            ).padStart(2, '0')}`;
        },
        // 跳转到歌单
        getSong() {
            this.$router.go(-1)
        }
        , playFn() {
            this.$player.playOrPause();
            this.isRotated = !this.isRotated; // 切换旋转状态
        },
        fn(index, id) {

            if (this.$player._currentTrack.id === id) {
                this.playSingle(this.music[index + 1].id);
            }
            this.music.splice(index, 1);
            store.set('cookie_music', this.music);
        },
        playerAll() {
            this.$player.replacePlaylist(
                this.music.map((data) => data.id), '', ''
            );
        },
        playSingle(id) {
            this.$player.replacePlaylist([id], '', '');
            store.set('cookie_music', this.music);
        },


       
   

    },
    created() {
        console.log(this.$player)
        this.music = store.get('cookie_music');
        console.log(this.music);
    },
}
</script>
<style>
.xuan {
    transform: rotate(0);
    transition: transform 0.3s ease;
    z-index: 70;
    transform-origin: 15% 8%
}

.rotate-45 {
    transform: rotate(-25deg);
    transition: transform 0.3s ease;

}

#mao {
    background-color: rgba(255, 255, 255, 0.298);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 0.714286px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.898);

}

.transition-container {
    animation: slide-up 0.5s ease-out;
    /* 过渡动画 */
    position: relative;
    /* 相对定位 */
    top: 0;
    /* 初始位置在视口底部之外 */
}

@keyframes slide-up {
    0% {
        top: 100vh;
        /* 初始位置在视口底部之外 */
    }

    100% {
        top: 0;
        /* 结束位置为视口顶部 */
    }
}</style>