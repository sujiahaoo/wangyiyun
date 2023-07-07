<template>
  <div @click="clickHandler" >
    <transition :name="direction">
      <div
        v-show="visible"
        class="w-[100vw] h-[220px] bg-[#F5F5F5] z-[10] fixed overflow-auto"
        :style="[drawerContentStyle]"
      >
        <div>
          <slot name="header" >
            <div class="flex justify-between items-center  ">
              <p>{{ title }}</p>
              <!-- <Icon @click.native="closeDrawer" icon="clarity:times-line" /> -->
            </div>
          </slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </transition>
    <div
      v-if="visible"
      ref="drawerMask"
      class="bg-black opacity-20 absolute w-screen h-[200vh] top-0 right-0 bottom-0 left-0 z-[9]"
    ></div>
  </div>
</template>
<script>
export default {
  // 单向数据流（父级通过props传递给子组件的数据 子组件没有权利修改）
  props: {
    visible: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      // default: '默认标题',
    },
    direction: {
      type: String,
      default: 'ltr',
      validator(direction) {
        return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
      },
    },
  
  },
  // 计算属性
  computed: {
    drawerContentStyle() {
      if (this.direction === 'btt') {
        return {
          width: '100vw',
          left: 0,
          bottom: 0,
        };
      } else if (this.direction === 'ttb') {
        return {
          width: '100vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'ltr') {
        return {
          height: '100vh',
          width:'83vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'rtl') {
        return {
          height: '100vh',
          right: 0,
          top: 0,
        };
      }
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('update:visible', false);
    },
    clickHandler(e) {
      if (e.target === this.$refs.drawerMask) {
        // this.visible = false;
        // 使用vm.$emit给父组件传递数据
        this.closeDrawer();
      }
    },
  },
};
</script>
<style scoped>
/* .btt-enter,
.btt-leave-to, */

  .ltr-enter,.ltr-leave-to{
        transform: translateX(-100%);
    }
    .ltr-enter-active,.ltr-leave-active {
        transition: all ease-in-out 1s;
    }
    .ltr-enter-to,.ltr-leave{
        transform: translateX(0);
    }





</style>
