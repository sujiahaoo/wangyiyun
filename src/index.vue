<template>
    <div class="w-screen bg-gradient-to-r from-purple-100 to-purple-200">
       <div class="h-[12vw] pt-5 flex w relative text-xs:10px">
            <Icon icon="basil:menu-solid"  class="w-[4vw] h-[8vw] mr-4 "/>
            <input type="text" class="inp w-[70vw] h-[8vw] pl-[6vw] rounded-3xl">
            <Icon icon="circum:search" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[9vw]"/>
            <Icon icon="ph:scan-duotone" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[70vw]"/>
            <Icon icon="tabler:microphone" color="#3b445b" class="w-[4vw] h-[8vw] ml-5"/>
       </div>
      
    <van-swipe class="my-swipe mt-[3vw]" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item">  <img :src="item.pic" class="w-[83vw] h-[40vw] mx-auto rounded-2xl"></van-swipe-item>
     
</van-swipe>

<div class="horizontal-container overflow-hidden mt-7">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item ml-[-5.5vw] text-center" v-for="item in menu" :key="item"> <img :src="item.iconUrl" class="w-[18vw] h-[17vw]">
            <p class="text-xs text-#aaa mt-[-1vw]">{{item.name }}</p>
            
        </div>
      </div>
    </div>
  </div>

    <div class="w-sreen h-[46vw] text-xs mt-4">
        <div class="w h-[6vw] flex now"><p class="flex ml-[5vw]">推荐歌单<icon class="mt-0" icon="ep:arrow-right-bold" color="black" width="15" /></p><icon class="mt-1" icon="ri:more-2-fill" color="black" width="15" /></div>

    <div class="horizontal-container h-[40vw] w-[80vw] overflow-hidden" id="song">
    <div class="scroll-wrapper" ref="scroll1">
      <div class="scroll-content">
        <div class="scroll-item  w-[25vw] mr-3" v-for="item in songdan" :key="item"> 
            <img :src="item.picUrl" class="w-[25vw] h-[25vw] rounded-3xl">
            <p class="ps text-xs w-[25vw] h-[10vw] text-#aaa">{{item.name}}</p>
            
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class=" overflow-hidden h-[74vw]">
            <div class="flex justify-between wrapper mb-4">
                <div class="flex items-center  ml-[8vw]">
                    <span class="text-xs">新歌新碟/数字专辑</span>
                    <icon icon="ep:arrow-right-bold" color="black" width="15" />
                </div>
                <icon icon="ri:more-2-fill" color="black" width="15" />
            </div>
            <div class="scroll-wrapper" ref="song" >
                <div class="scroll-content flex w-[300vw]">
                    <ul v-for="item in song" :key="item.id" class="scroll-item w-[85vw] h-[73vw]">
                        <li class=" w-[89vw] h-[14.17vw] mb-4 flex" v-for="item2 in item.resources" :key="item2.id">
                            <img :src="item2.uiElement.image.imageUrl" alt="" class="w-[14.17vw] h-[14.17vw] rounded-xl">
                            <div class="ml-2 ">
                                <p class="font-[300] text-[#000]">{{ item2.uiElement.mainTitle.title }}</p>
                                <p class="text-[13px] text-[#666]">{{item2.uiElement.subTitle.title}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
                    <ul v-for="item in paihang" :key="item.id" class="scroll-item w-[85vw] rounded-2xl mr-5 bg-white">
                      
                        <li class=" w-[89vw] h-[14.17vw] mb-4 flex items-center" >
                            <div class="font-[700] flex items-center ">
                                <p >{{ item.uiElement.mainTitle?.title }}</p>
                                <icon icon="ep:arrow-right-bold" color="black" width="15" />
                            </div>
                            <p class="ml-10 text-xs">{{ item.mainTitle?.titleDesc }}</p>
                        </li>
                        <li class="w-[85vw] h-[14.17vw] mb-4 flex justify-between relative" v-for="(item2,index) in item.resources" :key="item2.id">
                            <img :src="item2.uiElement.image.imageUrl" alt="" class="w-[14.17vw] h-[14.17vw] rounded-xl">
                            <div class="flex absolute left-[14vw] top-[3vw] justify-start test-xs mr-[20vw] items-center text-left overflow-hidden">
                                <p class="ml-4 mr-5"> 
                                    {{ index+1 }}
                                </p>
                            
                                <div class="font-[100] overflow-hidden w-[30vw]">
                                    <p class="text-xl text-[#000] ">{{ item2.uiElement.mainTitle.title }}</p>
                                    <p class="text-[13px] text-[#666]">{{item2.resourceExtInfo?.artists[0].name}}</p>

                                </div>
                            </div>
                            <p class="text-xs">{{ item.uiElement.labelText?.text }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 日历 -->
        <div class="w-90vw h-[59vw] mx-auto">
           <div class="flex justify-between items-center"><b class="ml-[8vw]">音乐日历</b> <icon icon="ri:more-2-fill" color="black" width="15" /></div> 
            <ul class="w-[85vw] h-[37vw] bg-white mx-auto mt-3 rounded-2xl">
                <li v-for="item in day" :key="item" class="flex justify-around m-[5vw]
                ">
                    <div>
                        <p class="text-[#dedede]"><span>今天</span><span>{{ new Date().getMonth() + 1 }}/{{ new Date().getDate() }}</span></p>
                        <p>{{ item.title }}</p>
                    </div>
                    <div><img :src="item.imgUrl" alt="" class="w-[12vw] h-[12vw] rounded-xl"></div>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
 
    import 'swiper/css/swiper.css';
    import axios from 'axios';
    import BScroll from '@better-scroll/core'
    export default{
        
        name: "swiper-com",
        data(){
            new Date().getMonth() + 1

            return {
                banners:[],
                songdan:[],
                activeMenuItem:'',
                playlists:[],
                menu:[],
                song:[],
                paihang:[],
                day:[]
            }
        },
        mounted() {
      this.init(this.$refs.scroll)
      this.init(this.$refs.scroll1)
      this.init(this.$refs.song)
      this.init(this.$refs.song2)
    },
    beforeDestroy() {
      this.bs.destroy()
    },
        methods:{
           
        init(name) {
        this.bs = new BScroll(name, {
          scrollX: true,
          scrollY:false,
          probeType: 4 // listening scroll event
        })
       
      }
           
        },
        created(){
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then(res=>{
                // console.log(res.data.data.blocks[0].extInfo.banners);
                this.banners = res.data.data.blocks[0].extInfo.banners;
                // console.log(res.data.data);

                // return this.activeMenuItem = this.menu[0].name;
                
            })
           
            .catch(err=>{
                console.log(err);
            })
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6')
            .then(res=>{
               this.songdan=res.data.result
            })
            .catch(err=>{
                console.log(err);
            })
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
            .then(res=>{
                // console.log(res.data.data);
                this.menu=res.data.data
            })
            .catch(err=>{
                console.log(err);
            })
             // 新歌速递
             axios
            .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res) => {
              this.song = res.data.data.blocks[5].creatives;
              this.paihang=res.data.data.blocks[3].creatives;
              
            })
            //音乐日历
            axios
            .get('https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000')
            .then((res) => {
              console.log(res.data.data.calendarEvents);
              this.day=res.data.data.calendarEvents;
            })
          }
            }
</script>

<style>
    .w{
        width: 88vw;
        margin: 0 auto;
    }
    .inp{
        border: 1px solid black;
    }
 
    .swiper{
        margin: 3vw auto;
    }
    .now{
        align-items: center;
        justify-content: space-between;
    }
    img{
        max-width:none
    }
    .horizontal-container,
  .scroll-wrapper{
    position: relative;
    width :90%;
    margin: 0 auto;

    border-radius: 5px;

    height: 35vw;
  }
  .scroll-content{
    display :inline-block;
    white-space :nowrap;
  }
  .scroll-item{
    /* height :40vw; */
      font-size: 24px;
      display :inline-grid;
      
      padding :0 10px;
  }
  .ps{
    white-space: normal;
  }

 
</style>
