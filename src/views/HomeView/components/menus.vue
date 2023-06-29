<template>
  <div>
    <div class="scroll-item ml-[-4vw] text-center" v-for="item in menus" :key="item"> <img :src="item.iconUrl" class="w-[18vw] h-[17vw]">
            <p class="text-xs text-#aaa mt-[-1vw]">{{item.name }}</p>
            
        </div>
  </div>
</template>
<script>
    

  export default{ 
      props:['menus'],
   
  
       
    }
    
</script>
<style>
   
</style>