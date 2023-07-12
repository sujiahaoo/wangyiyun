import { getUserAccount, getUserDetail, getUpdate } from "@/request"
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
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">昵称</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.isShowName}>{ this.arr[2]}<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">性别</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.isshows} > {this. Sex(this.arr[0])}<van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between  h-[13vw]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">二维码</span><span class="flex   items-center mr-[5vw]"><van-icon name="enlarge" color="#CECFD1" class="mr-[2vw]" /><van-icon name="arrow" color="#CECFD1" /></span></li>
                        </ul>
                        <ul class="w-screen mt-[3vw] bg-[white]">
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">生日</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.shows}>{this.Timer(this.arr[1])} <van-icon name="arrow" color="#CECFD1" /></span></li>
                            <li class="flex justify-between border-b-[1px] h-[13vw] border-[#E8EAEC]  items-center "><span class="ml-[4vw] text-[5vw] text-[#545A6B]">地区</span><span class="flex   items-center mr-[5vw] text-[#CECFD1]" onClick={this.negation}>{areaList.province_list[this.arr[3]]}&nbsp;&nbsp;{areaList.city_list[this.arr[4]]}<van-icon name="arrow" color="#CECFD1" /></span></li>
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
                        {/* <van-popup v-model={this.showName} position="bottom" style={{ height: '100%' }}>
                            <van-area title="修改昵称" style={{height:'40vw'}}  onConfirm={this.confirm3}  onCancel={this.isShowName}>
                      
                            </van-area>
                            <div class="h-[12vw] w-[100vw] flex justify-around items-center"><div onConfirm={this.isShowName}>取消</div>
                                <div onClick={this.confirm3}>确认</div></div>
                            <van-cell-group>
                                <van-field v-model={this.value} placeholder="请输入用户名" />
                            </van-cell-group>

                            

                        </van-popup> */}
                        {/* 更换昵称 */}
                    <van-popup v-model={this.showName} position="bottom" style={{ height: '100%' }}>
                        <header class="bg-white h-[15.46vw] flex items-center justify-between px-[4.7vw] text-[4.85vw] font-[800]">
                            <div class="flex justify-start items-center">
                                <Icon nativeOnClick={() => { this.showName=false }} class="w-[5.64vw] h-[5.6vw] font-[800] mr-[5.08vw]" icon="icon-park-outline:arrow-left" />
                                <p class="text-[4.63vw]">修改昵称</p>
                            </div>
                            <p onClick={this.confirm3} class="text[3.84vw]">保存</p>
                        </header>
                        <div class="w-screen h-[20vw] pl-[4.85vw] pr-[2.48vw] relative flex items-center">
                            <input v-model={this.value} type="text"  class="w-[100%] h-[10.95vw] px-[2vw] leading-[10.95vw] border-b-[0.32vw] border-[#000] outline-none" />
                            <Icon class="text-[#adadad] w-[5.27vw] h-[5.05vw] absolute top-[8vw] right-[3.21vw]" icon="line-md:remove" />
                        </div>
                        {/* <van-picker show-toolbar columns={this.columns} default-index={this.data.profile.gender} onConfirm={this.confirmSex} onCancel={() => { this.nameVisible = false }} /> */}
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
            showName: false,
            arr: [],
            columns: ['男', '女'],
            value: '',
        }
    },
    async created() {
        const resUser = await getUserAccount();
        store.set('_cookieMusic', resUser.data.profile);
        const res = await getUserDetail(resUser.data.profile.userId)
        this.datause = res.data;
        this.userData = store.get('_cookieMusic')
        // console.log(this.userData);
        console.log(this.datause)
        this.arr = [this.datause.profile.gender, this.datause.profile.birthday, this.datause.profile.nickname, this.datause.profile.province, this.datause.profile.city, this.datause.profile.signature]
        console.log(this.arr);
    },
    methods: {
        // 地区
        async confirm(e) {
            this.popupVisible = !this.popupVisible;
            this.arr[3] = Number(e[0].code)
            this.arr[4] = Number(e[1].code)
            await getUpdate(this.arr[0], this.arr[1], this.arr[2], this.arr[3], this.arr[4], this.arr[5]).then(res => {
                // console.log('修改地区:'+ res);
            })
        },
        // 生日
        async  confirm1(e) {
            this.show = !this.show;
            // console.log(e);
            const dateString = e;
            const date = new Date(dateString);
            const timestamp = date.getTime();
            console.log(timestamp);
            this.arr[1]=timestamp
            await getUpdate(this.arr[0], this.arr[1], this.arr[2], this.arr[3], this.arr[4], this.arr[5]).then(res => {
                // console.log('修改地区:'+ res);
            })
        },
        // 性别
        async confirm2(e) {
            this.isShow = !this.isShow;
            // console.log(e);
            if(e==='男'){
              
                this.arr[0]=1
            }else{
                this.arr[0]=2
            }
            await getUpdate(this.arr[0], this.arr[1], this.arr[2], this.arr[3], this.arr[4], this.arr[5]).then(res => {
                // console.log('修改地区:'+ res);
            })
        },
        // 昵称
        async confirm3() {
            this.showName = !this.showName;
            this.arr[2]= this.value
            console.log(this.arr[2]);
            await getUpdate(this.arr[0], this.arr[1], this.arr[2], this.arr[3], this.arr[4], this.arr[5]).then(res => {
                // console.log('修改地区:'+ res);
            })

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
        isShowName() {
            this.showName = !this.showName
        },
        tiaozhuan() {
            this.$router.push('/Pers')

        },
        // Greeting(isLoggedIn) {
        //     if (isLoggedIn) {
        //         return <p class="text-[3.84vw] text-[#929292]">{areaList.province_list[this.userData.province]}&nbsp;&nbsp;{areaList.city_list[this.userData.city]}</p>
        //     } else {
        //         return <p class="text-[3.84vw] text-[#929292]">{this.areaDate[0].name}&nbsp;&nbsp;{this.areaDate[1].name}</p>
        //     }
        // }
        Sex(num) {
            if (num === 1) {
                return '男'
            } else if (num === 2) {
                return '女'
            }
            else if (num === 0) {
                return ''
            }
        },
        Timer(n){
            
           return `${new Date(n).getFullYear()}-${String(new Date(n).getMonth() + 1).padStart(2, '0')}-${String(new Date(n).getDate()).padStart(2, '0')}`;
        },
     
    }

}
