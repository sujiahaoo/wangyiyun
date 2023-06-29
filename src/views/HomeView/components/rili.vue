<template>
      <ul class="w-[85vw] h-[50vw] bg-white mx-auto mt-3 rounded-2xl">
   
        <li v-for="item in day" :key="item" class="flex items-center mt-[3vw]  ml-[5vw] float-left w-[78vw] h-[20vw] justify-between
                ">
          <div class="">
            <p class="text-[#dedede]"><span>{{ new Date().getMonth() + 1 }}/{{ new Date().getDate() }}</span></p>
            <p>{{ item.title }}</p>
          </div>
          <div>
          <img :src="item.imgUrl" alt="" class="w-[12vw] h-[12vw] rounded-xl ml-[1vw]">

          </div>
        </li>

    </ul>

</template>
<script>
    export default {
        props:['day']
    }
</script>