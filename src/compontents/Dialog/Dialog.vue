<template>
   <div>
  <div v-show="visible"
    class="w-[320px] fixed top-[50%] left-[50%] text-[16px] rounded-[12px] bg-white translate-x-[-50%] translate-y-[-40%]"
    style="z-index: 111;">
   


      <div class="pt-[26px] font-medium leading-[24px] text-center">
        {{ title }}
      </div>
      <div>
        <div class="pt-[8px] pb-[26px] px-[24px] box-border text-[#646566] text-[14px] text-center">
          {{ message }}
        </div>
      </div>
      <div class="flex items-center text-center h-[48px] border-t border-[#ebedf0] cursor-pointer">
        <div @click="cancel" class="flex-1 border-r border-[#ebedf0] box-border leading-[48px]">
          <span class="text-[skyblue]">取消</span>
        </div>
        <div @click="confirm" class="flex-1 leading-[48px]">
          <span class="text-[skyblue]">确认</span>
        </div>
      </div>
    </div>
    <div
      v-if="visible"
      ref="drawerMask"
      class="bg-black opacity-20 absolute w-screen h-[200vh] top-0 right-0 bottom-0 left-0 z-[20]"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
    cancel() {
      this.hide();
      this.reject();
    },
    confirm() {
      this.hide();
      this.resolve();

    },
  },
  // props: {
  //   title: {
  //     type: String,
  //   },
  //   message: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
  