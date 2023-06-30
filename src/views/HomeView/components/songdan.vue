<template>

   <div>
     
         
     
    <div class="scroll-item float-left  w-[25vw] mr-3 relative " v-for="item in songdan" :key="item"> 
            <img :src="item.uiElement.image.imageUrl" class="w-[25vw] h-[25vw] rounded-3xl">
            <p class="ps text-xs w-[25vw] h-[10vw] text-#aaa">{{item.uiElement.mainTitle.title}}</p>
            <p class="flex items-center text-[#fff] text-xs absolute top-[2vw] right-0"><Icon icon="bi:play-fill" />   {{ comjis(item.resources[0].resourceExtInfo.playCount) }}</p>
           <p class="text-[#fff] absolute right-0 bottom-[10vw]"><Icon class="w-[6vw] h-[6vw]" icon="bi:play-fill" /></p>
        </div>
   </div>

     
</template>
<script>

 export default{ 
       props:['songdan'],
      data(){
         return{
            visible:true
         }
      }
       ,
       methods:{
         comjis(num){
            if(num>100000000){
               return (num/100000000).toFixed(1)+"亿";
               
            }else if(num>10000) {
               return (num/10000).toFixed(1)+"万";
            }
         }
       }
    }
</script>
<style>

</style>