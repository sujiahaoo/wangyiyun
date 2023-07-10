import { getUserAccount, getUserDetail } from "@/request"
import store from "storejs";
import { areaList } from '@vant/area-data';

export default {
    render() {
        return (
            <Wrapper> 
                <div class="bg-[#E9EBEE]">
                    <div class="h-[10vw] w-screen leading-[10vw] bg-[white]">
                        <van-icon name="arrow-left" class="w-[6vw] h-[6vw] ml-[6vw]" onClick={this.tiaozhuan} />
                        <b class="ml-[30vw] text-[5vw]">我的资料</b>
                    </div>
                    <div class="h-[10vw] w-screen text-center bg-[#DEE6F8] text-[3.5vw] border-[#D5D9E2] border-[2px]" style="line-height: 9vw;">
                        上传头像并完善个人信息,即可获得云贝
                    </div>
                    <div class="mt-[3vw]">
                        <ul class="w-screen h-[54vw] bg-[white]">
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">头像</span><span class="flex   items-center mr-[5vw]"><img src={this.userData.avatarUrl} alt="" class="w-[12vw] h-[12vw] rounded-full" /> <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">昵称</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]">{this.userData.nickname}<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">性别</span><span class="flex   items-center mr-[5vw]"> <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between  h-[13vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">二维码</span><span class="flex   items-center mr-[5vw]"><van-icon name="enlarge" color="#CECFD1" class="mr-[2vw]" /><van-icon name="arrow" color="#CECFD1" /></span></li>
                        </ul>
                        <ul class="w-screen mt-[3vw] bg-[white]">
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">生日</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]">请输入输入信息 <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">地区</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.negation}>{areaList.province_list[this.datause.data.profile.province]
                            }&nbsp;{areaList.city_list[this.datause.data.profile.city]}<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">大学</span><span class="flex   items-center mr-[5vw]"> <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">音乐标签</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]">请选择标签<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">简介</span><span class="flex   items-center mr-[5vw]"><van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[33vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">{this.userData.nickname}</span><span class="flex   items-center mr-[5vw]"></span></li>

                        </ul>
                        <ul class="w-screen  mt-[3vw]  bg-[white]">
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">个人主页隐私设置</span><span class="flex   items-center mr-[5vw]"> <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">主页模块顺序设置</span><span class="flex   items-center mr-[5vw]"><van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">账号被绑定设置</span><span class="flex   items-center mr-[5vw]"> <van-icon name="arrow" color="#CECFD1" /></span></li>
                        </ul>
                        <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                            <van-area area-list={areaList} value="110101" onCancel={this.negation} columns-num="2" onConfirm={this.confirm} onConfirm-button-text="完成"></van-area>
                        </van-popup>
                    </div>
                </div>
            </Wrapper>
        )

    },
    data() {
        return {
            areaList,
            userData: [],
            popupVisible: false,
        }
    },
    async created() {
        const resUser = await getUserAccount();
        store.set('_cookieMusic', resUser.data.profile);
        this.datause = await getUserDetail(resUser.data.profile.userId);
        this.userData = store.get('_cookieMusic')
        console.log(this.userData);

    },
    methods: {
        confirm(e) {
            this.popupVisible = false;
            console.log(e);
        },
        negation() {
            this.popupVisible = !this.popupVisible
        }
        ,
        tiaozhuan() {
            this.$router.push('/Pers')

        }
    }

}