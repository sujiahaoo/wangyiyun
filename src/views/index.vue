<template>
  <div class="w-screen bg-gradient-to-r from-purple-100 to-purple-200">
    <!-- 头部 -->

    <top />

    <!-- 轮播 -->

    <banners :banners="banners" />
    <!-- 菜单 -->

    <div class=" overflow-hidden h-[23vw]">
     
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content flex w-[185vw]">
          <menus :menus="menus"></menus>

        </div>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="w-sreen h-[46vw] text-xs mt-4 overflow-hidden">
      <div class="w-[95vw] h-[6vw] flex now mx-auto">
        <p class="flex ml-[5vw]">推荐歌单
          <icon class="mt-0" icon="ep:arrow-right-bold" color="black" width="15" />
        </p>
        <icon class="ml-[5vw]" icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper" ref="menus">
        <div class="scroll-content flex w-[170vw]">
          <songdan :songdan="songdan"></songdan>

        </div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <!-- <song /> -->
    <div class=" overflow-hidden h-[74vw] relative mt-[4vw]">
      <div class="flex justify-between wrapper mb-4 z-999 ">
        <div class="flex items-center  ml-[8vw] ">
          <span class="text-xs">新歌新碟/数字专辑</span>
          <icon icon="ep:arrow-right-bold" color="black" width="15"/>
          
        </div>
        
      </div>
      <span class="absolute left-[96vw] top-[-1vw]">
      <icon class="mt-1" icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup"/>

      </span>
      

      <div class="scroll-wrapper" ref="song">
        <div class="scroll-content flex w-[420vw]">
          <song :song="song" />
        </div>
      </div>
    </div>
    <!-- 排行榜 -->
    <!-- <paihang :paihang="paihang"/> -->
    <div class=" overflow-hidden h-[85vw] mt-8">
      <div class="flex justify-between wrapper mb-4">
        <div class="flex items-center  ml-[8vw]">
          <span class="text-xs">排行榜</span>
          <icon icon="ep:arrow-right-bold" color="black" width="15" />
        </div>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper" ref="song2">

        <div class="scroll-content flex w-[325vw]">
          <paihang :paihang="paihang" />
        </div>
      </div>
    </div>

    <!-- 日历 -->
    <div class="w-90vw h-[59vw] mx-auto">
      <div class="flex justify-between items-center"><b class="ml-[8vw]">音乐日历</b>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
        <day :day="day" />
    </div>
    <div class="mt-5 border-b pb-4 border-gray-300 font-[3vw]">
      <div class="flex justify-between wrapper mb-4">
        <span class="font-[700] text-[18px] ml-[5vw]">热门话题</span>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper overflow-hidden" ref="scrollsong">
        <ul class="scroll-content flex w-[185vw]">
          <li
            class="scroll-item w-[90vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around box-border rounded-2xl bg-gradient-to-b from-[#a0a07d] to-[#b3b599]">
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
                <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt=""
                  class="w-[14vw] h-[14vw] rounded-xl ml-[5vw]">
              </div>
            </div>
          </li>
          <li
            class="scroll-item w-[90vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around  box-border rounded-2xl bg-gradient-to-b from-[#937ea2] to-[#aa95b9]">
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
                <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt=""
                  class="w-[14vw] h-[14vw] rounded-xl">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup closeable v-model="show" position="bottom"
      :style="{ height: '20%', borderRadius: '10px 10px 0 0' }">
      <p class="ml-4 mt-5 w-[90vw] h-[8vw] border-b-2 border-[#000]">推荐歌单</p>
      <p class="flex font-[5vw] mt-[3vw] items-center "><Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="mdi:like" /><b class="ml-[5vw]">优点推荐</b></p>
      <p class="flex font-[5vw] items-center"> <Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="ph:prohibit-bold"/><b class="ml-[5vw]">减少推荐</b></p>

      <p class="flex text-[5vw] items-center"><Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="material-symbols:refresh"/><b class="ml-[5vw]">刷新</b></p>

    </van-popup>

  
  </div>
</template>
<script>


import axios from 'axios';
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      drawerVisible: true,
      visible: true,
      banners: [],
      songdan: [],
      activeMenuItem: '',
      playlists: [],
      menus: [],
      song: [],
      paihang: [],
      day: [],
      show: false,
    }
  },
  components: {
    top: () => import('./HomeView/components/top.vue'),
    banners: () => import('./HomeView/components/banner.vue'),
    menus: () => import('./HomeView/components/menus.vue'),
    songdan: () => import('./HomeView/components/songdan.vue'),
    song: () => import('./HomeView/components/song.vue'),
    paihang: () => import('./HomeView/components/paihang.vue'),
    day: () => import('./HomeView/components/rili.vue'),


  },
  mounted() {
    this.init(this.$refs.scrollsong)
    this.init(this.$refs.song2)
    this.init(this.$refs.song)
    this.init(this.$refs.menus)

    this.init(this.$refs.scroll)
    this.init(this.$refs.scroll1)
    new BScroll(document.querySelector('.wrapper'), {
       mouseWheel: true,//开启鼠标滚轮
       disableTouch: false
})

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
    },
    showPopup() {
      this.show = true;
    },
  },




  async created() {
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
      )
      .then((res) => {
        this.day = res.data.data.calendarEvents.slice(0, 2);
        // console.log(this.day);
      })

    axios
      .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then((res) => {
        //   this.song = res.data.data.blocks[5].creatives;
        this.paihang = res.data.data.blocks[5].creatives;

      })
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then(res => {
        this.banners = res.data.data.blocks[0].extInfo.banners;
        // console.log(this.banners);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
      .then(res => {
        // console.log(res.data.data);
        this.menus = res.data.data
      })
      .catch(err => {
        console.log(err);
      })
      //歌单
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then(res => {
        this.songdan = res.data.data.blocks[1].creatives.slice(1);
        console.log( this.songdan);
        
       
      })
      .catch(err => {
        console.log(err);
      })
    axios
      .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then((res) => {
        //   this.song = res.data.data.blocks[5].creatives;
        this.song = res.data.data.blocks[5].creatives;

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
  
  font-size: 20px;
  display: inline-grid;

  padding: 0 10px;
}

.ps {
  white-space: normal;
}

</style>
