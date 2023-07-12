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
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">性别</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]"  onClick={this.isshows} > 男<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between  h-[13vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">二维码</span><span class="flex   items-center mr-[5vw]"><van-icon name="enlarge" color="#CECFD1" class="mr-[2vw]" /><van-icon name="arrow" color="#CECFD1" /></span></li>
                        </ul>
                        <ul class="w-screen mt-[3vw] bg-[white]">
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">生日</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.shows}>请输入输入信息 <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">地区</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.negation}>{this.Greeting(this.isLoggedIn)}<van-icon name="arrow" color="#CECFD1" /></span></li>
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
                        {/* 地区 */}
                        <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                            <van-area area-list={areaList} value="110101" onCancel={this.negation} columns-num="2" onConfirm={this.confirm} onConfirm-button-text="完成"></van-area>
                        </van-popup>

                        {/* 出生年月 */}
                        <van-popup v-model={this.show} position="bottom" style={{ height: '40%' }}>
                            <van-datetime-picker
                                v-model={this.currentDate}
                                onCancel={this.shows}
                                type="date"
                                title="选择年月日"
                                min-date={this.minDate}
                                max-date={this.maxDate} onConfirm={this.confirm1}
                            />
                        </van-popup>

                        {/* 性别 */}
                        <van-popup v-model={this.isShow} position="bottom" style={{ height: '40%' }}>
                            <van-picker
                                title="性别"
                                show-toolbar
                                columns={this.columns}
                                onConfirm={this.confirm2}
                                onCancel={this.isshows}
                            ></van-picker>
                        </van-popup>

                        {/* 修改姓名 */}
                        <van-popup v-model={this.showName} position="bottom" style={{ height: '100%' }}>
                           
                        </van-popup>
                    </div>
                </div>
            </Wrapper>
        )

    },
    data() {
        return {
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(2021, 0, 17),
            areaList,
            userData: [],
            areaDate: [],
            popupVisible: false,
            isLoggedIn: true,
            show: false,
            isShow: false,
            showName:false,
            arr: [],
            columns: ['男', '女'],
        }
    },
    async created() {
        const resUser = await getUserAccount();
        store.set('_cookieMusic', resUser.data.profile);
        this.datause = await getUserDetail(resUser.data.profile.userId);
        this.userData = store.get('_cookieMusic')
        console.log(this.userData);
        this.arr
    },
    methods: {
        confirm(e) {
            this.popupVisible = !this.popupVisible;
            console.log(e);
            this.areaDate = e
            this.isLoggedIn = false
        }, confirm1(e) {
            this.show = !this.show;
            console.log(e);

        },
        confirm2(e) {
            this.isShow = !this.isShow;
            console.log(e);

        },
        negation() {
            this.popupVisible = !this.popupVisible;
        }
        ,
        shows() {
            this.show = !this.show
        },
        isshows() {
            this.isShow = !this.isShow
        }
        ,
        tiaozhuan() {
            this.$router.push('/Pers')

        },
        Greeting(isLoggedIn) {
            if (isLoggedIn) {
                return <p class="text-[3.84vw] text-[#929292]">{areaList.province_list[this.userData.province]}&nbsp;&nbsp;{areaList.city_list[this.userData.city]}</p>
            } else {
                return <p class="text-[3.84vw] text-[#929292]">{this.areaDate[0].name}&nbsp;&nbsp;{this.areaDate[1].name}</p>
            }
        }
    }

}