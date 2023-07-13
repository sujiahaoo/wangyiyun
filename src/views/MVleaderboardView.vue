<template>
    <div>
        <div class="w-screen h-[14vw] flex items-center">
            <van-icon name="arrow-left" size="20" class="ml-[5vw]" />
            <b class="text-[4vw] ml-[31vw]">MV排行榜</b>
        </div>
        <van-tabs v-model="active" swipeable>
            <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>

</script>