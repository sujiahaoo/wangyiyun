<template>
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
</template>
<script>
  import axios from 'axios';
    import BScroll from '@better-scroll/core'
 export default{ 
        data(){
            return{
                song:[],
            }
        },
         async created(){
            axios
            .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res) => {
            //   this.song = res.data.data.blocks[5].creatives;
              this.song=res.data.data.blocks[5].creatives;
              
            })
        },
        mounted() {
      this.init(this.$refs.song)
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
    }
</script>