<template>
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
</template>
<script>
       import axios from 'axios';
    import BScroll from '@better-scroll/core'
 export default{ 
        data(){
            return{
                songdan:[],
            }
        },
         async created(){
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6')
            .then(res=>{
               this.songdan=res.data.result
            })
            .catch(err=>{
                console.log(err);
            })
        },
        mounted() { this.init(this.$refs.scroll1)
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
<style>

</style>