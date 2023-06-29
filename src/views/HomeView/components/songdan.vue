<template>

   <div>
    <div class="scroll-item  w-[25vw] mr-3" v-for="item in songdan" :key="item"> 
            <img :src="item.picUrl" class="w-[25vw] h-[25vw] rounded-3xl">
            <p class="ps text-xs w-[25vw] h-[10vw] text-#aaa">{{item.name}}</p>
            
        </div>
   </div>

     
</template>
<script>

 export default{ 
       props:['songdan']
    }
</script>
<style>

</style>