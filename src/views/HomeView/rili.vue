<template>
    <div>
        <li v-for="item in day" :key="item" class="flex justify-around items-center mt-[3vw]  ml-[4vw] float-left
                ">
          <div class="">
            <p class="text-[#dedede]"><span>{{ new Date().getMonth() + 1 }}/{{ new Date().getDate() }}</span></p>
            <p>{{ item.title }}</p>
          </div>
          <img :src="item.imgUrl" alt="" class="w-[12vw] h-[12vw] rounded-xl ml-[4vw]">
        </li>

    </div>
</template>
<script>
    export default {
        props:['day']
    }
</script>