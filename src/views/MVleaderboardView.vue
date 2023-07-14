<template>
  <div :class="{ dark: switchCheckout }">
    <!-- 头部标题 -->
    <div class="!bg-white  text-[#000] dark:!bg-black dark:text-[white] transition-container">
     
        <div class="flex items-center  fixed top bg-white h-[15vw] w-[100vw]" style="z-index: 88;">
          <Icon icon="ph:arrow-left-light" color="#343434" width="8vw" @click.native="$router.push('/IndexView')" class="ml-[4vw]" />
          <p class="text-[#2e2e2e] text-[5vw] ml-[5vw]">MV排行榜</p>
        </div>
        <!-- tab切换 -->
        <van-tabs v-model="active" sticky offset-top="15vw" @change="changeTab" swipeable class="bg-white  text-[#000] dark:!bg-[#000] dark:text-[white]">
          <van-tab :title="item" v-for="item in title" :key="item.id">
             <!-- 更新时间 -->
      <div class="">
        <div class="flex items-center w-[91vw] mx-auto mt-[22vw]">
          <p class="text-[5vw] text-[#323232]">
            更新时间:{{ dayjs(MvList.updateTime).format('YYYY年MM月DD日 ') }}
          </p>
          <Icon icon="fluent:info-48-regular" color="#b3b3b3" width="5vw" height="5vw" />
        </div>
        <!-- MV列表部分 -->
        <ul>
          <li class="w-[91vw] mx-auto mt-[6vw]" v-for="(item, index) in MvList" :key="item.id">
            <div class="relative">
              <img :src="item.cover" alt="" class="w-[91vw] h-[51vw] rounded-[2vw]" />
              <div class="flex items-center absolute top-[1vw] left-[70vw]">
                <Icon icon="ri:play-line" color="white" width="5vw" height="5vw" />
                <p class="text-[4vw] text-[#fff]">
                  {{ dataTruncation(item.playCount) }}
                </p>
              </div>
            </div>

            <div class="flex items-center mt-[5vw]">
              <p class="text-[7vw] font-bold" :style="`color:${index <= 3 ? '#ff3b37' : '#999'}`">
                {{ index + 1 }}
              </p>
              <div class="ml-[7vw]">
                <p class="text-[4vw] text-[#333] font-bold line-clamp-1 w-[79vw]">
                  {{ item.name }}
                </p>
                <div class="w-[79vw] line-clamp-1">
                  <span v-for="(item1, index) in item.artists" :key="index" class="text-[2vw] text-[#818181]">
                    {{ index >= 0 ? ' / ' : '' }}{{ item1.name }}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
          </van-tab>
        </van-tabs>
      
     
    </div>
  </div>
</template>

<script>
import store from "storejs";

import { MvList } from '@/request';
export default {
  data() {
    return {
      title: ['内地', '港台', '欧美', '韩国', '日本'], //头部标题
      MvList: [], //数据
      initial: '内地', //默认数据渲染内地
      switchCheckout: null,
      active: 0,
    };
  },
  methods: {
    // 数据播放量判断函数
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume;
      }
    },
     changeTab(tit) {
      this.initial = this.title[tit];
      // console.log(this.initial);
    },
  },
  async created() {
    this.switchCheckout = store.get('switch')
    // const res1 = await MvList(this.initial);
    // this.MvList = res1.data.data;
    // console.log(res1);

    MvList(this.initial).then((res) => {
      // console.log(res);
      this.MvList = res.data.data;
    });
  },
  watch: {
    initial(value) {
      MvList(value).then((res) => {
        // console.log(res);
        this.MvList = res.data.data;
      });
    },
  },
};
</script>
<style>
/* .van-tab{
    background-color: #000 !important;
  } */


</style>


