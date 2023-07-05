<template>
    <div>
        <!-- 头部 -->
        <div class="w-screen h-[74vw] bg-[#9FA160] ">
            <div class="w-[95vw] h-[12vw] mx-auto flex items-center justify-between overflow-hidden">
                <Icon icon="ic:baseline-less-than" color="white" class="w-[7vw] h-[7vw] mr-[3vw]" />
                <b class="text-[white] text-[5vw]">歌单</b>
                <div class="flex items-center">
                    <Icon icon="simple-line-icons:magnifier" color="white" class="w-[6vw] h-[6vw]" />
                    <Icon icon="ant-design:more-outlined" color="white" class="ml-[4vw] w-[7vw] h-[7vw]" />
                </div>
            </div>
            <div class="w-[95vw] h-[30vw] mx-auto mt-[3vw] flex">
                <img :src="songList.coverImgUrl" alt="" class="w-[28vw] h-[28vw] rounded-xl">
                <div class="text-[white] ml-[5vw]">
                    <b class="text-white text-[4vw] flex items-center justify-around"> {{ songList.name }}
                        <Icon class="ml-[6vw]" icon="material-symbols:arrow-drop-down-circle-outline" color="white" />
                    </b>
                    <div class="flex items-center mt-[1vw]"><img :src="songList.creator.avatarUrl" alt="" class="w-[6vw] h-[6vw] rounded-[50%] "> <span
                            class="text-[3vw] ml-[2vw]">{{songList.creator.nickname }}</span>
                        <div class="w-[12vw]  h-[5vw] bg-[#8b8b66] rounded-xl text-xs  text-center leading-[5vw] ml-[2vw]"  style="  background-color:rgba(255, 255, 255, 0.1)">+关注</div>
                    </div>
                    <div  style="  background-color:rgba(255, 255, 255, 0.1)" class="w-[10vw] text-[1vw] h-[6vw] rounded-[10px]  text-center mt-[2vw] leading-[1.5rem]" v-for="item in songList.algTags" :key="item">
                        {{ item }}
                    </div>
                    
                </div>
            </div>
            <div class="w-[95vw] h-[25vw] text-[white] mx-auto mt-[5vw]">
                <div class="text-[3vw] flex items-center "><div class="w-[80vw] overflow-hidden whitespace-nowrap">{{ songList.description }}</div>
                    <Icon class="ml-[6vw]" icon="ic:baseline-greater-than" color="white" width="30"/>
                </div>
                <div class="flex justify-between mt-[3vw]">
                    <div class="w-[28vw] h-[10vw]  rounded-3xl flex items-center" style="  background-color:rgba(255, 255, 255, 0.1)">
                        <Icon width="32" icon="basil:forward-solid" color="white" class="ml-[5vw]" /><span>{{ songList.shareCount }}</span>
                    </div>
                    <div class="w-[28vw] h-[10vw]  rounded-3xl flex items-center" style="  background-color:rgba(255, 255, 255, 0.1)">
                        <Icon icon="ant-design:message-twotone" color="white" width="28" class="ml-[5vw]" /><span class="ml-[2vw]">{{ songList.commentCount }}</span>
                    </div>
                    <div class="w-[28vw] h-[10vw] bg-[#E1284A] rounded-3xl flex items-center">
                        <Icon icon="fa6-solid:kit-medical" color="white" width="30" height="30" class="ml-[5vw]" /><span
                            class="ml-[2vw]">{{ songList.subscribedCount }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import {
    songDetails
} from '@/request';
export default {
    data() {
        return {
            songList: {}
        }
    },
    async created() {
        // console.log(this.$route)
        songDetails(this.$route.query.id).then((res) => {
            // console.log(res)
            this.songList=res.data.playlist
            console.log(this.songList);
        })
    }

}
</script>