<template>
     <div>
     <div class="h-[12vw] pt-5 flex w relative text-xs:10px">
         <Icon @click.native="show = !show" icon="basil:menu-solid" class="w-[4vw] h-[8vw] mr-4 " />
          <input type="text" class="inp w-[70vw] h-[8vw] pl-[6vw] rounded-3xl">
          <Icon icon="circum:search" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[9vw]" />
          <Icon icon="ph:scan-duotone" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[70vw]" />
          <Icon icon="tabler:microphone" color="#3b445b" class="w-[4vw] h-[8vw] ml-5" />
          
          
        
     </div>
     <!-- <van-popup v-model="show">内容</van-popup>
      -->
      <van-popup v-model="show" closeable position="left" :style="{ width: '45%', height: '100%' }" />
</div>
</template>
<script>
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);

export default {
     props: ['top'],
     data() {
    return {
      show: false,
    };
  },
 
}
</script>
