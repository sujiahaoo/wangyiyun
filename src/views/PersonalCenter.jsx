import store from "storejs";
import { Tab, Tabs } from 'vant';
import { getUserDetail, getUserAccount, fetchUserPlaylist, getUserComment } from '@/request'
import { areaList } from '@vant/area-data';
Vue.use(Tabs).use(Tab)
export default {
    render() {
        return (
            <Wrapper>
                <div class="w-screen bg-[#F5F8FA]">
                    <div class="w-screen h-[70vw] bg-[skyblue] ">
                        <img src={this.userData.backgroundUrl} alt="" class="absolute h-[70vw] w-screen" />
                        <div class="h-[12vw] flex items-center justify-between fixed w-[100vw]">

                            <van-icon name="arrow-left" size="7vw" color="white" onClick={this.tiao} />
                            <div class="flex items-center">
                                <div class="w-[13vw] h-[7vw] text-[2vw] bg-[#F3EEE6] rounded-2xl text-center leading-[7vw] ">照片墙

                                </div>
                                <div class="w-[4vw] h-[4vw] rounded-[50%] bg-[#CAB5A1] ml-[2vw]"></div>
                                <div class="w-[2vw] h-[2vw] rounded-[50%] bg-[#CAB5A1] ml-[2vw]"></div>


                            </div>
                            <Icon icon="ant-design:more-outlined" color="white" width="30" />

                        </div>
                    </div>
                    <div class="w-[92vw] bg-[white] relative mx-auto rounded-xl left-[1vw] top-[-20vw] mt-[14vw] text-center">
                        <img src={this.userData.avatarUrl} alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-8vw] left-[37vw]" />
                        <div class="text-[5vw] pt-[14vw]">{this.userData.nickname}</div>
                        <div class="text-[3vw] text-[#D2D4DA] mt-[2vw]"> <span class="mr-[3vw]">{this.datause.data.profile.follows
                        }&nbsp;关注</span> <span>{this.datause.data.profile.followeds}&nbsp;粉丝</span> <span class="ml-[4vw]">Lv.{
                            this.datause.data.level}</span></div>
                        <div class="flex text-[3vw] mt-[1vw]">
                            <div class=" border rounded-[5px] ml-[19vw]">IP:{areaList.province_list[this.datause.data.profile.province]}
                            </div>
                            <div class=" border rounded-[5px] ml-[2vw]">{areaList.province_list[this.datause.data.profile.province]
                            }&nbsp;{areaList.city_list[this.datause.data.profile.city]}</div>

                            <div class=" border rounded-[5px] ml-[2vw]">村龄{this.nian(this.datause.data.createDays)}年</div>

                        </div>
                        <div class="flex  mt-[3vw]">
                            <div class="w-[22vw] h-[8vw] border text-[4vw] rounded-xl leading-[8vw] ml-[30vw]" onClick={this.tiaozhuan}>编辑资料</div>
                            <div class="border w-[7vw] h-[7vw] rounded-[50%] ml-[3vw] transform animate-spin"><van-icon name="arrow-down" onClick={this.fangfa} /></div>
                        </div>
                        {this.visvible == true ? (
                            <ul class="h-[40vw] flex justify-around items-center  transition-all ease-in-out">
                                <li class="w-[25vw] h-[35vw] bg-[#F7F7F7] text-center rounded-xl">

                                    <img src="https://pic.rmb.bdstatic.com/05c721972dfddac4de018101bfc6f69f.jpeg" class="w-[12vw] relative top-[3vw] ml-[4vw] h-[12vw] rounded-full" alt="" />
                                    <p class="mt-[3vw]">ikun</p>
                                    <div class="border-[red] border w-[14vw] h-[7vw] text-[red] rounded-xl ml-[4vw]">+ 关注</div>
                                </li>
                                <li class="w-[25vw] h-[35vw] bg-[#F7F7F7] text-center rounded-xl">

                                    <img src="https://pic.rmb.bdstatic.com/05c721972dfddac4de018101bfc6f69f.jpeg" class="w-[12vw] relative top-[3vw] ml-[4vw] h-[12vw] rounded-full" alt="" />
                                    <p class="mt-[3vw]">ikun</p>
                                    <div class="border-[red] border w-[14vw] h-[7vw] text-[red] rounded-xl ml-[4vw]">+ 关注</div>
                                </li>
                                <li class="w-[25vw] h-[35vw] bg-[#F7F7F7] text-center rounded-xl">

                                    <img src="https://pic.rmb.bdstatic.com/05c721972dfddac4de018101bfc6f69f.jpeg" class="w-[12vw] relative top-[3vw] ml-[4vw] h-[12vw] rounded-full" alt="" />
                                    <p class="mt-[3vw]">ikun</p>
                                    <div class="border-[red] border w-[14vw] h-[7vw] text-[red] rounded-xl ml-[4vw]">+ 关注</div>
                                </li>
                            </ul>) : ('')}
                    </div>

                   

                    <van-tabs class="mt-[-10vw]">
                        <van-tab title="主页"> <div class="w-[92vw] h-[58vw] bg-white mx-auto rounded-xl relative">
                       
                       <div class="text-[5vw]  pt-[5vw]">
                           <b class="ml-[9vw]">音乐品味</b>
                       </div>
                       <div class="w-[86vw] h-[36vw] flex mx-auto justify-around mt-[5vw] relative">
                           <div class="w-[27vw] h-[30vw] border rounded-xl bg-[#FEF5F3]">
                               <p class="text-[3.5vw] text-[#A8ACB3] ml-[3vw] mt-[2vw]">我的喜欢</p>
                               <b class="text-[4vw] ml-[3vw]">40首</b>
                               <div class="text-[3.5vw] text-[#A8ACB3] absolute bottom-[8vw] left-[2vw]"><van-icon name="like-o"
                                   color="#A8ACB3" />喜欢的音乐</div>
                           </div>
                           <div class="w-[27vw] h-[30vw] border rounded-xl bg-[#FDF9ED] relative">
                               <p class="text-[3.5vw] text-[#A8ACB3] ml-[3vw] mt-[2vw]">累计听歌</p>
                               <b class="text-[4vw]  ml-[3vw]">{this.datause.data.listenSongs}首</b>
                               <div class="text-[3.5vw] text-[#A8ACB3] absolute top-[23vw] left-[2vw]"><van-icon name="bar-chart-o" color="#A8ACB3" />听歌排行</div>
                           </div>
                           <div class="w-[27vw] h-[30vw] border rounded-xl bg-[#F7FAFC] relative">
                               <p class="text-[3.5vw] text-[#A8ACB3] ml-[3vw] mt-[2vw]">我的喜欢</p>
                               <div class="text-[4vw]  ml-[3vw] font-bold">属于你的音乐档案</div>
                               <div class="text-[3.5vw] text-[#A8ACB3] absolute top-[23vw] left-[2vw]"><van-icon name="balance-o" color="#A8ACB3" />黑胶时光机</div>
                           </div>
                       </div>
                   </div></van-tab>
                        <van-tab title="动态"><div class="w-[92vw] h-[58vw] bg-white mx-auto rounded-xl relative"></div></van-tab>
                        <van-tab title="博客"><div class="w-[92vw] h-[58vw] bg-white mx-auto rounded-xl relative"></div></van-tab>
                    </van-tabs>

                    <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
                        <div class="pt-[4vw] ml-[4vw]">
                            <b class="text-[5vw]">收藏的歌单</b> (23)<span>

                            </span>
                        </div>

                        {this.songList.map((item, index) => (
                            <li class="flex ml-[3vw] mt-[4vw]">

                                <img src={item.coverImgUrl} class="w-[13vw] h-[13vw] rounded-xl" alt="" />
                                <div class="ml-[4vw]">
                                    <p class="text-[4vw] truncate w-[68vw]">{item.name}</p>
                                    <p class="text-[3vw] text-[#D1D4D5]">{item.trackCount}首,By {item.creator.nickname}播放 {
                                        this.wan(item.playCount)}</p>
                                </div>

                            </li>
                        ))}



                    </div>
                    <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
                        <div class="pt-[4vw] ml-[4vw]">
                            <b class="text-[5vw]">创建歌单的歌单</b> (1个)<span>

                            </span>
                        </div>
                        <ul>
                            {this.create.map((item, index) => (
                                <li class="flex ml-[3vw]" key={index}>
                                    <img src={item.coverImgUrl} alt="" class="w-[13vw] h-[13vw] rounded-xl" />
                                    <div class="ml-[3vw]">
                                        <p class="text-[4vw] truncate w-[68vw]">{item.name}</p>
                                        <p class="text-[3vw] text-[#D1D4D5]">{item.creator.gender}首</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
                        <div class="pt-[4vw] ml-[4vw] flex justify-between items-center">
                            <b class="text-[5vw]">我的评论({this.comment.commentCount}个)</b> <span>
                                <Icon icon="material-symbols:lock" color="gray" class=" mr-[3vw" />
                            </span>
                        </div>
                        <ul>
                            {this.comment.comments.map((item, index) => (
                                <li>
                                    <div class="flex justify-between items-center"><div class="ml-[4vw] flex text-[2vw] text-[#D5D4D5]"><img src={item.user.avatarUrl} alt="" class="w-[13vw] h-[13vw] mr-[1vw] rounded-xl" />{item.resourceInfo.slice(9, 21)}</div><Icon icon="icon-park-outline:good-two" color="gray" /></div>
                                    <b class="ml-[4vw]">{item.content}</b>
                                    <p class="ml-[5vw] text-[2vw] text-[#D5D4D5]">{this.$t(item.time)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
                        <div class="pt-[4vw] ml-[4vw] flex justify-between items-center">
                            <b class="text-[5vw]">我的j基本信息</b> <div class="border rounded-xl mr-[3vw]">
                                {this.cunmin.profileVillageInfo.title}
                            </div>
                        </div>
                        <div class="ml-[4vw] text-[3vw] text-[#D5D4D5]">
                            <div class='mt-[2vw]'>村龄:{this.cunmin.createDays}</div>
                            <div class='mt-[2vw]'>性别:男</div>
                            <div class='mt-[2vw]'>地区:{areaList.province_list[this.datause.data.profile.province]
                            }&nbsp;{areaList.city_list[this.datause.data.profile.city]}</div>
                        </div>
                        <div class="h-[10vw] w-[90vw] border-t-2 text-center leading-[10vw] text-[3vw] text-[#D5D4D5]">查看更多<van-icon name="arrow" color="#D5D4D5" /></div>

                    </div>
                </div>
                <div class="h-[16vw] w-screen"></div>
            </Wrapper>
        )
    },
    data() {
        return {
            userData: {},
            datause: {},
            areaList,
            songList: [],
            create: [],
            comment: [],
            cunmin: [],
            visvible: false,
            active: 2,
        }
    },
    async created() {
        const resUser = await getUserAccount();
        store.set('_cookieMusic', resUser.data.profile);
        this.datause = await getUserDetail(resUser.data.profile.userId);
        // console.log(this.datause);
        this.userData = store.get('_cookieMusic')
        // console.log(this.userData);
        const detail = await getUserDetail(resUser.data.profile.userId);
        console.log(detail.data);
        this.cunmin = detail.data
        const res4 = await fetchUserPlaylist(detail.data.profile.userId);
        const res5 = await getUserComment(resUser.data.profile.userId)
        //   console.log(res5);
        this.songList = res4.data.playlist
            .filter((item) => item.subscribed)
            .slice(1);
        this.create = res4.data.playlist
            .filter((item) => !item.subscribed)
            .slice(0, 1);
        this.comment = res5.data.data
        this.trackCount = res4.data.playlist[0].trackCount;
        console.log('收藏的歌单', this.songList);
        console.log('创建的歌单', res4.data);
        // console.log('评论', this.comment);
    },
    methods: {
        nian(num) {
            return (num / 365).toFixed(0)
        },
        wan(num) {
            if (num > 100000000) {
                return (num / 100000000).toFixed(1) + '亿'
            }
            else if (num > 10000) {
                return (num / 10000).toFixed(1) + '万'
            }
        },
        tiaozhuan() {
            this.$router.push('/MyProfileView')

        },
        tiao() {
            this.$router.push('/IndexView')

        },
        fangfa() {
            this.visvible = !this.visvible
        }

    }
}
