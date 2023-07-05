<template>
    <div class="h-[160vh] w-screen bg-[#F5F5F5]">
        <div class="w-[90vw] h-[14vw] mx-auto flex justify-between items-center relative">
            <router-link :to="{ path: '/IndexView' }">
                <Icon @click.native="ss" class="z-10 w-[6vw] h-[6vw]" icon="ph:arrow-left-bold" />
            </router-link>

            <input :placeholder="defaultSearch.showKeyword" v-model="userSearchKeywords" type="text"
                class="border-2 border-#fff w-[70vw] h-[8vw] pl-[6vw] rounded-3xl ">
            <ul v-if="searchSuggestList.length" class="absolute bg-[pink] h-[25vw] w-{68vw] top-[14vw] left-[10vw]">
                <li v-for="item in searchSuggestList" :key="item.id" @click="searchHandler(item.name)">
                    {{ item.name }}
                </li>
            </ul>
            <span class="text-[#71787E]">搜索</span>
            <!-- <Icon @click.native="searchHandler(userSearchKeywords)" icon="grommet-icons:form-search"
                class="w-[7vw] h-[7vw] absolute left-[9vw]" /> -->
            <Icon icon="circum:search" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[11vw] "
                @click.native="searchHandler(userSearchKeywords)" />

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
        <div class="w-[90vw] h-[21vw] mx-auto mt-[3vw]">
            <b class="text-[4.5vw] flex items-center justify-between">猜你喜欢 <Icon icon="material-symbols:refresh" color="#71787E" @click.native="GuessLike"/></b>
            <div class="flex mt-[3vw] text-xs justify-around text-center leading-[10vw] text-[#8B9091]">
                <div class="w-[16vw] h-[9vw] bg-white rounded-2xl" v-for="item in LikesDate" :key="item">
                    {{ item.searchWord }}
                </div>
                
            </div>

        </div>
        <!-- <div class="w-screen h-[200vw] flex  justify-between items-center mx-auto mt-7">
            <van-swipe :loop="false" class="w-[850vw] h-[200vw]" :width="270">
                <van-swipe-item v-for="item in rankDate" class="h-[190vw] bg-[white] ml-4 rounded-xl" style="width: 70vw"
                    :key="item">
                    <div class="text-[6vw] font-[800] h-[18vw] w-[60vw] border-b-2 leading-12 ml-[6vw]  flex items-center">
                        {{ item.name }}
                        <p class="text-[3vw] w-[15vw] h-[6vw] rounded-xl bg-[#F0F5F6] flex items-center justify-around ">播放
                            <Icon icon="mdi:play" />
                        </p>
                    </div>
                    <ul>
                        <li></li>
                    </ul>
                </van-swipe-item>
            </van-swipe>
        </div> -->
        <div class="mb-[10vw]">
            <van-swipe :loop="false" :width="300" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in rank" :key="item.id" class="w-[64.3vw]">
                    <div class="w-[64.3vw] mr-[2.87vw] px-[4vw] bg-white dark:bg-[#] rounded-xl">
                        <div class="text-[4.26vw] font-[800] h-[18vw] border-b-[0.32vw] leading-12 flex items-center"> {{
                            item.name }}
                            <p v-if="index === 0"
                                class="text-[2.84vw] w-[12.97vw] h-[5.68vw] rounded-xl ml-[3.02vw] bg-[#F0F5F6] flex items-center justify-center mt-[1vw]">
                                播放
                                <Icon icon="mdi:play" />
                            </p>
                        </div>
                        <ul class="w-[64.3vw] ">
                            <li class="h-[13.56vw] leading-[13.56vw] font-[800] flex items-center"
                                v-for="(item2, index2) in item.tracks.slice(0, 20)" :key="item2">
                                <p v-if="index2 + 1 <= 3" class="text-[#dd4147] w-[3.95vw] text-[3.27vw]">{{ index2 + 1 }}</p>
                                <p v-if="index2 + 1 > 3" class="text-[#9a9a9d] w-[3.95vw] text-[3.27vw]">{{ index2 + 1 }}</p>
                                <p
                                    class="ml-[5.93vw] text-[3.46vw] w-[47.74vw] overflow-hidden whitespace-nowrap text-ellipsis">
                                    {{ item2.name }}</p>
                            </li>
                        </ul>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';

import {
    
    fetchSearchDefault,
    fetchSearchResult,
    fetchSearchSuggest,
    fetchHomeData,
} from '@/request';
export default {
    data() {
        return {
            biaoti: [],
            userSearchKeywords: '',
            searchSuggestList: [],
            defaultSearch: {},
            recommondPlaylist: [],
            rank: [],
            rankDate: [],
            Likes:null,
            LikesDate:[],
        }
    },
    async created() {

        // 获取首页数据
        const homeData = await fetchHomeData();
        // console.log(homeData.data.data.blocks[1].creatives);
        this.recommondPlaylist = homeData.data.data.blocks[1].creatives;
        // 获取搜索默认值
        const res1 = await fetchSearchDefault();
        this.defaultSearch = res1.data.data;

        // const playlist = await Promise.all(this.rank.map(({ id }) => axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail', { params: { id } })));
        // this.rankDate = playlist.map(item => item.data.playlist).slice(0, 11);
        // console.log(this.rankDate[0].tracks.slice(0, 20));
        // // console.log(this.rankDate);
        const res = await axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail');
        const playlist = await Promise.all(res.data.list.map(({ id }) => axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail', { params: { id } })));
        this.rank = playlist.map(item => item.data.playlist).slice(0, 11)
        this.rankDate=this.rank[0].tracks.slice(0, 20)

        // const resLink = await axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/hot/detail');
        // console.log(resLink.data.data);
        const res3=await axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/search/hot/detail');
        this.Likes=res3.data.data
        this.LikesDate=this.Likes.slice(0,4)
        // console.log(this.LikesDate);
    },
    methods: {
        ss(){
      this.$router.push('/IndexView')
    },
        // fn(e) {
        //   this.drawerVisible = e;
        // },
        async searchHandler(keywords) {
            const res = await fetchSearchResult({
                keywords: keywords || this.defaultSearch.realkeyword,
            });
            // console.log(res);
        },
        GuessLike(){
            this.Likes.push(...this.Likes.splice(0,4))
            this.LikesDate=this.Likes.slice(0,4)
        }
    },
    watch: {
        // async userSearchKeywords(keywords) {
        //   const res = await fetchSearchSuggest(keywords);
        //   this.searchSuggestList = res.data.result.songs;
        // },
        userSearchKeywords: _.debounce(async function (keywords) {
            const res = await fetchSearchSuggest(keywords);
            this.searchSuggestList = res.data.result.songs;
        }, 300),
    },

}
</script>