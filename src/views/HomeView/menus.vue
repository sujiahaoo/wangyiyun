<template>
  <div>
    <div class="scroll-item ml-[-5.5vw] text-center" v-for="item in menus" :key="item"> <img :src="item.iconUrl" class="w-[18vw] h-[17vw]">
            <p class="text-xs text-#aaa mt-[-1vw]">{{item.name }}</p>
            
        </div>
  </div>
</template>
<script>
    import axios from 'axios';


  export default{ 
      props:['menus'],
   
         async created(){
          axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
            .then(res=>{
                // console.log(res.data.data);
                this.menus=res.data.data
            })
            .catch(err=>{
                console.log(err);
            })
        },
       
    }
    
</script>
<style>
   
</style>