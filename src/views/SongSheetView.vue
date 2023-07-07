<template>
    <div>
        <!-- 头部 -->
        <div class="w-screen h-[80vw] bg-[#9FA160] ">
            <div
                class="w-[100vw] h-[12vw] mx-auto flex items-center justify-between overflow-hidden fixed top-0  bg-[#9FA160] ">
                <Icon icon="ic:baseline-less-than" color="white" class="w-[7vw] h-[7vw] mr-[3vw]" />
                <b class="text-[white] text-[5vw]">歌单</b>
                <div class="flex items-center">
                    <Icon icon="simple-line-icons:magnifier" color="white" class="w-[6vw] h-[6vw]" />
                    <Icon icon="ant-design:more-outlined" color="white" class="ml-[4vw] w-[7vw] h-[7vw]" />
                </div>
            </div>
            <div class="w-[95vw] h-[12vw]"></div>
            <div v-if="visisbly" class="h-[43vw] overflow-x-hidden">
                <p class="flex  pl-[4vw] pr-[4vw]" style="justify-content: space-between;">
                    <span class="text-[2vw] text-[#d8c7b1]">喜欢这个歌单的用户也听了</span>
                    <span class="w-[5vw] h-[5vw] rounded-[50%] bg-[#908161] flex"
                        style="align-items: center; justify-content: center; w">
                        <Icon icon="ep:arrow-up" class="text-[#fff] text-[3.5vw]" @click.native="handleArrowUpClick()" />
                    </span>
                </p>
                <div class=" overflow-auto  pl-[4vw] pr-[4vw] mt-[4vw] lunbo overflow-x-hidden">
                    <div class=" flex " :style="`width:${music?.length * 30 + 30}vw`"
                        style="justify-content: space-around;">
                        <div v-for="(item) in music" :key="item.tom" class="w-[32vw]">
                            <img :src="item.coverImgUrl" alt="" class="w-[28vw] h-[28vw] rounded-[3vw]">
                            <p class=" line-clamp-2 text-[#fff] text-[2vw] mt-[2vw]">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="xians" class="h-[40vw]">
                <div class="w-[95vw] h-[30vw] mx-auto mt-[3vw] flex">
                    <img :src="songList.coverImgUrl" alt="" class="w-[28vw] h-[28vw] rounded-xl">
                    <p class="flex items-center text-[#fff] text-xs absolute top-[18vw] left-[18vw] right-1">
                        <Icon icon="bi:play-fill" /> {{ comjis(songList.playCount) }}
                    </p>
                    <div class="text-[white] ml-[5vw]">
                        <b class="text-white text-[4vw] flex items-center justify-around"> {{ songList.name }}
                            <!-- <Icon class="ml-[6vw]" icon="material-symbols:arrow-drop-down-circle-outline" color="white"
                                @click.native=handleArrowUpClick() /> -->
                                <span class="w-[5vw] h-[5vw] rounded-[50%] bg-[#908161] flex ml-[6vw]"
                        style="align-items: center; justify-content: center; w">
                        <Icon icon="ep:arrow-down" class="text-[#fff] text-[3.5vw]" @click.native="handleArrowUpClick()" />
                    </span>

                        </b>
                        <div class="flex items-center mt-[1vw]"><img :src="songList.creator.avatarUrl" alt=""
                                class="w-[6vw] h-[6vw] rounded-[50%] "> <span class="text-[3vw] ml-[2vw]">{{
                                    songList.creator.nickname }}</span>
                            <div class="w-[12vw]  h-[5vw] bg-[#8b8b66] rounded-xl text-xs  text-center leading-[5vw] ml-[2vw]"
                                style="  background-color:rgba(255, 255, 255, 0.1)">+关注</div>
                        </div>
                        <div style="  background-color:rgba(255, 255, 255, 0.1)"
                            class="w-[10vw] text-[1vw] h-[6vw] rounded-[10px]  text-center mt-[2vw] leading-[1.5rem]"
                            v-for="item in songList.algTags" :key="item">
                            {{ item }}
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-[95vw] h-[25vw] text-[white] mx-auto mt-[5vw]">
                <div class="text-[3vw] flex items-center ">
                    <div class="w-[80vw] overflow-hidden whitespace-nowrap">{{ songList.description }}</div>
                    <Icon class="ml-[6vw]" icon="ic:baseline-greater-than" color="white" width="25" />
                </div>
                <div class="flex justify-between mt-[3vw]">
                    <div class="w-[28vw] h-[10vw]  rounded-3xl flex items-center"
                        style="  background-color:rgba(255, 255, 255, 0.1)">
                        <Icon width="32" icon="basil:forward-solid" color="white" class="ml-[5vw]" /><span>{{
                            songList.shareCount }}</span>
                    </div>
                    <div class="w-[28vw] h-[10vw]  rounded-3xl flex items-center"
                        style="  background-color:rgba(255, 255, 255, 0.1)">
                        <Icon icon="ant-design:message-twotone" color="white" width="28" class="ml-[5vw]" /><span
                            class="ml-[2vw]">{{ songList.commentCount }}</span>
                    </div>
                    <div class="w-[28vw] h-[10vw] bg-[#E1284A] rounded-3xl flex items-center">
                        <Icon icon="fa6-solid:kit-medical" color="white" width="30" height="30" class="ml-[5vw]" /><span
                            class="ml-[2vw]">{{ comjis(songList.subscribedCount) }}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="w-screen  mt-[3vw] ">
            <div class="h-[14vw] w-screen">
                <div class="w-screen ">
                    <header
                        class="w-screen h-[13.66vw] pl-[3.11vw] pr-[4.88vw] flex items-center justify-between rounded-t-[3vw]  left-0  sticky top-[12vw] bg-[skyblue]">
                        <div class="flex">
                            <div
                                class="w-[6.22vw] h-[6.22vw] rounded-[50%] bg-[#ff3a3c] flex items-center justify-center mr-[2.75vw]">
                                <Icon class="w-[2.31vw] h-[2.49vw] text-white" icon="ion:play" />
                            </div>
                            <div class="w-[27.62vw] flex justify-between items-center">
                                <p class="text-[3.91vw] font-[800]">播放全部</p>
                                <p class="text-[3vw]">({{ songList.trackIds.length }})</p>
                            </div>
                        </div>
                        <div class="flex">
                            <Icon icon="circum:save-down-1" width="25" class="mr-[3vw]" />
                            <Icon icon="solar:list-down-minimalistic-bold" width="25" />
                        </div>
                    </header>
                    <ul class="w-[90vw]">
                        <li v-for="(item, index) in songqu" :key="item.id"
                            class="flex items-center justify-between ml-[4vw] w-[90vw] h-[14vw] text-[4vw] ">
                            <div class="flex">
                                <span class="mt-[3vw] text-[#CBCCD3]">{{ index + 1 }} </span>
                                <span class="ml-[6vw] w-[62vw] whitespace-nowrap overflow-hidden text-overflow-ellipsi">{{
                                    item.name }} <div class="flex">
                                        <div v-for="item2 in item.ar" :key="item2" class="text-[3vw] text-[#CBCCD3]">
                                            {{ item2.name }}&nbsp;
                                        </div>
                                    </div></span>



                            </div>
                            <div class="flex">
                                <Icon icon="octicon:play-24" color="gray" class="mr-[3vw]" />
                                <Icon icon="ant-design:more-outlined" color="gray" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

import {
    songDetails, songQu, musicSlider
} from '@/request';
export default {
    data() {
        return {
            visisbly: false,
            xians: true,
            songList: {},
            songqu: {},
            lunbo: {}
        }
    },
    async created() {
        // console.log(this.$route)
        songDetails(this.$route.query.id).then((res) => {
            // console.log(res)
            this.songList = res.data.playlist
            console.log(this.songList);
        })
        songQu(this.$route.query.id).then((res1) => {
            // console.log(res)
            this.songqu = res1.data.songs
            // console.log(this.songqu);
        })
        //歌单

        musicSlider(this.$route.query.id).then((res) => {
            console.log(res)
            this.music = res.data.playlists
            console.log(this.music);
        })

    }
    , methods: {

        handleArrowUpClick() {
            this.visisbly = !this.visisbly
            this.xians = !this.xians
        },
        comjis(num) {
            if (num > 100000000) {
                return (num / 100000000).toFixed(1) + "亿";

            } else if (num > 10000) {
                return (num / 10000).toFixed(0) + "万";
            }
        }
        ,
        songDetails(id) {
            //  console.log(id)  //7487787817
            this.$router.push({ path: '/song', query: { id } });
        },

    },

}
</script>
<style>
* {
    padding: 0;
    margin: 0;
}
</style>