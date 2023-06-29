<template>
  <div class="w-screen bg-gradient-to-r from-purple-100 to-purple-200">
    <!-- 头部 -->

    <top />

    <!-- 轮播 -->

    <banners :banners="banners"/>
    <!-- 菜单 -->

    

    <div class="horizontal-container overflow-hidden mt-7">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
       <menus :menus="menus" />
      </div>
    </div>
  </div>
    <!-- 歌单 -->
    <songdan />
    <!-- 新歌速递 -->
    <song />
    <!-- 排行榜 -->
    <!-- <paihang :paihang="paihang"/> -->
    <div class=" overflow-hidden h-[85vw] mt-8">
            <div class="flex justify-between wrapper mb-4">
                <div class="flex items-center  ml-[8vw]">
                    <span class="text-xs">排行榜</span>
                    <icon icon="ep:arrow-right-bold" color="black" width="15" />
                </div>
                <icon icon="ri:more-2-fill" color="black" width="15" />
            </div>
            <div class="scroll-wrapper" ref="song2" >
              
                <div class="scroll-content flex w-[300vw]">
                        <paihang :paihang="paihang"/>
                </div>
            </div>
        </div>

    <!-- 日历 -->
    <div class="w-90vw h-[59vw] mx-auto">
      <div class="flex justify-between items-center"><b class="ml-[8vw]">音乐日历</b>
        <icon icon="ri:more-2-fill" color="black" width="15" />
      </div>
      <ul class="w-[85vw] h-[50vw] bg-white mx-auto mt-3 rounded-2xl">
       <day :day="day"/>
      </ul>
    </div>
    <div class="mt-5 border-b pb-4 border-gray-300 font-[3vw]">
                <div class="flex justify-between wrapper mb-4">
                    <span class="font-[700] text-[18px] ml-[5vw]">热门话题</span>
                    <icon icon="ri:more-2-fill" color="black" width="15" />
                </div>
                <div class="scroll-wrapper overflow-hidden" ref="scrollsong">
                    <ul class="scroll-content flex w-[210vw]">
                        <li class="scroll-item w-[105.61vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around box-border rounded-2xl bg-gradient-to-b from-[#a0a07d] to-[#b3b599]">
                            <div>
                                <p class="flex items-center w-[47vw] mb-[1vw]">
                                    <Icon icon="solar:chat-round-like-linear" width="20" color="white" />
                                    <span class="text-[#fff]  ml-[1.3vw]">最令你感动的那首歌</span>
                                </p>
                                <p class="text-[#c9c9c9] text-[13px]">484万热度</p>
                            </div>
                            <div class="flex justify-between w-[100%]">
                                <div class="flex flex-col justify-end">
                                    <p class="text-[#ececec]">Saint_Denis:今日份的感动</p>
                                    <p class="text-[#ececec]">"我希望我们能永远真诚且热烈"</p>
                                </div>
                                <div>
                                    <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt="" class="w-[14vw] h-[14vw] rounded-xl ml-[5vw]">
                                </div>
                            </div>
                        </li>
                        <li class="scroll-item w-[80.61vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around  box-border rounded-2xl bg-gradient-to-b from-[#937ea2] to-[#aa95b9]">
                            <div>
                                <p class="flex items-center w-[47vw] mb-[1vw]">
                                    <Icon icon="solar:chat-round-like-linear" width="20" color="white" />
                                    <span class="text-[#fff]  ml-[1.3vw]">最令你感动的那首歌</span>
                                </p>
                                <p class="text-[#c9c9c9] text-[13px]">22万热度</p>
                            </div>
                            <div class="flex justify-between w-[100%]">
                                <div>
                                    <p class="text-[#ececec]">辣目小霏:今日份的感动</p>
                                    <p class="text-[#ececec]">you by chance.</p>
                                </div>
                                <div>
                                    <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt="" class="w-[14vw] h-[14vw] rounded-xl">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
  </div>
</template>
<script>


import axios from 'axios';
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      banners:[],
      songdan:[],
      activeMenuItem: '',
      playlists: [],
      menus:[],
      song:[],
      paihang: [],
      day: []
    }
  },
  components: {
    top: () => import('./views/HomeView/top.vue'),
    banners: () => import('./views/HomeView/banner.vue'),
    menus: () => import('./views/HomeView/menus.vue'),
    songdan: () => import('./views/HomeView/songdan.vue'),
    song: () => import('./views/HomeView/song.vue'),
    paihang: () => import('./views/HomeView/paihang.vue'),
    day: () => import('./views/HomeView/rili.vue'),
    
    
  },
  mounted() {
    this.init(this.$refs.scrollsong)
    this.init(this.$refs.song2)
    this.init(this.$refs.scroll)
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init(name) {
      this.bs = new BScroll(name, {
        scrollX: true,
        scrollY: false,
        probeType: 4 // listening scroll event
      })
    }
  },




  async created() {
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
      )
      .then((res) => {
        this.day = res.data.data.calendarEvents.slice(0, 2);
        console.log(this.day);
      })
  }
}
</script>

<style>
.w {
  width: 88vw;
  margin: 0 auto;
}

.now {
  align-items: center;
  justify-content: space-between;
}

img {
  max-width: none
}

.horizontal-container,
.scroll-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;

  border-radius: 5px;

  height: 35vw;
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
}

.scroll-item {
  /* height :40vw; */
  font-size: 24px;
  display: inline-grid;

  padding: 0 10px;
}

.ps {
  white-space: normal;
}</style>
