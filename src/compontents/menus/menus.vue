<template>
    <div>
        <van-icon name="bars" size="6vw" @click.native="showPopup()" />
        <van-popup v-model="show" position="bottom" :style="{ height: '80%', background: '#4C4C4C' }">
            <van-swipe :loop="false" :width="390">
                <van-swipe-item :style="{
                    width: '88vw',
                    height: '165vw', background: 'aliceblue', margin: ' 3vw', borderRadius: '3vw',overflow:'auto'
                }">
                    <div class="text-[black] text-[4.26vw] pl-[4.62vw] flex items-center justify-between">
                        <div class=" flex items-center justify-between">
                            <Icon icon="icon-park-outline:loop-once" class="text-[black] text-[5.38vw]" />&nbsp;&nbsp;列表循环
                        </div>
                        <div class="flex items-center justify-between w-[28vw]">
                            <Icon icon="line-md:downloading-loop" class="text-[black] text-[5.38vw]" />
                            <Icon icon="icon-park-outline:add" class="text-[black] text-[5.38vw]" />
                            <Icon icon="uiw:delete" class="text-[black] text-[5vw]" />
                        </div>
                    </div>
                    <ul> 
                        <li v-for="item in menusongList" :key="item" class="flex items-center justify-between">
                            <div class="flex truncate ml-[5vw] mt-[6vw] items-center" style="width: 60vw;">
                            <b class="text-[6vw]">{{item.name}}</b><div class="text-[#9E9E9E]">-{{item.ar[0].name}}</div>

                            </div>
                            <van-icon name="cross" color="black" class="mr-[4vw]"/>
                        </li>
                    </ul>
                </van-swipe-item>
                <van-swipe-item :style="{
                    width: '88vw',
                    height: '165vw', background: 'aliceblue', margin: ' 3vw', borderRadius: '3vw'
                }">2</van-swipe-item>
                <van-swipe-item :style="{
                    width: '88vw',
                    height: '165vw', background: 'aliceblue', margin: ' 3vw', borderRadius: '3vw'
                }">3</van-swipe-item>


            </van-swipe>
        </van-popup>
    </div>
</template>
<script>
import store from "storejs";
export default {
    data() {
        return {
            show: false,
            menusongList: [],

        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
    },
    async created() {
        const songlists = store.get('songs');
        this.menusongList = songlists;
        // console.log(this.menusongList);

    }
}
</script>
