<template>
   
    <div class="w-[50px] h-[30px] rounded-[15px] bg-[#ee0a24]" :class="`${value ? 'bg-red-500' : 'bg-black'}`"
        @click="toggle">
        
        <div class="w-[30px] h-[30px] rounded-[15px] bg-white transition-all" :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'
            }`"></div>
         
    </div>


</template>
<script>
export default {
    //model主要去配置v-model指令所需使用的,属性和事件名
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        value: {
            type: Boolean,
            require: true
        }
    },
    methods: {
        toggle() {
            this.$emit('updaye:value', !this.value);
            this.$emit('input', !this.value)

        }
    }
}
</script>
<style>
    
</style>