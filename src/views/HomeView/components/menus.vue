<template>
  <div class="relative dark:text-[white]">
    <div class="scroll-item ml-[-4vw] text-center " v-for="item in menus" :key="item"> <img :src="item.iconUrl" class="w-[18vw] h-[17vw] red-image">
      <p class="text-xs text-#aaa mt-[-1vw]">{{item.name }}</p>
        </div>
       <p class="absolute text-[#fff] top-[6vw] left-[6vw]">{{ new Date().getDate() }}</p> 
  </div>
</template>
<script>
    

  export default{ 
      props:['menus'],
    }
    
</script>
<style>
   .red-image {
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
    }
</style>