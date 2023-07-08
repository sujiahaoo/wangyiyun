import store from "storejs";
import { getUserDetail, getUserAccount, fetchUserPlaylist } from '@/request'
import { areaList } from '@vant/area-data';
export default {
    render(){
        return(
            <Wrapper>
              <div class="w-screen bg-[#F5F8FA]">
        <div class="w-screen h-[70vw] bg-[skyblue] ">
            <img src={userData.backgroundUrl} alt="" class="absolute h-[70vw] w-screen"/>
            <div class="h-[12vw] flex items-center justify-between fixed w-[100vw]">

                <van-icon name="arrow-left" size="7vw" color="white" />
                <div class="flex items-center">
                    <div class="w-[13vw] h-[7vw] text-[2vw] bg-[#F3EEE6] rounded-2xl text-center leading-[7vw] ">照片墙

                    </div>
                    <div class="w-[4vw] h-[4vw] rounded-[50%] bg-[#CAB5A1] ml-[2vw]"></div>
                    <div class="w-[2vw] h-[2vw] rounded-[50%] bg-[#CAB5A1] ml-[2vw]"></div>


                </div>
                <Icon icon="ant-design:more-outlined" color="white" width="30" />

            </div>
        </div>
        <div class="w-[92vw] h-[46vw] bg-[white] mx-auto rounded-xl  absolute left-[4vw] top-[63vw] text-center">
            <img src={userData.avatarUrl} alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-8vw] left-[37vw]"/>
            <div class="text-[5vw] mt-[10vw]">{ userData.nickname }</div>
            <div class="text-[3vw] text-[#D2D4DA] mt-[2vw]"> <span class="mr-[3vw]">{datause.data.profile.follows
            }&nbsp;关注</span> <span>{ datause.data.profile.followeds }&nbsp;粉丝</span> <span class="ml-[4vw]">Lv.{
    datause.data.level }</span></div>
            <div class="flex text-[3vw] mt-[1vw]">
                <div class=" border rounded-[5px] ml-[19vw]">IP:{ areaList.province_list[datause.data.profile.province] }
                </div>
                <div class=" border rounded-[5px] ml-[2vw]">{ areaList.province_list[datause.data.profile.province]
                }&nbsp;{ areaList.city_list[datause.data.profile.city] }</div>

                <div class=" border rounded-[5px] ml-[2vw]">村龄{ nian(datause.data.createDays) }年</div>

            </div>
            <div class="flex  mt-[3vw]">
                <div class="w-[22vw] h-[8vw] border text-[4vw] rounded-xl leading-[8vw] ml-[30vw]">编辑资料</div>
                <div class="border w-[7vw] h-[7vw] rounded-[50%] ml-[3vw]"><van-icon name="arrow-down" /></div>
            </div>
        </div>
        <div class="w-[92vw] h-[58vw] bg-white mx-auto mt-[54vw] rounded-xl relative">
            <div class="flex justify-around absolute top-[-10vw] text-[5vw]">
                <div class="ml-[13vw] border-b-[3px] border-[red]">主页</div>
                <div class="ml-[13vw]">动态</div>
                <div class="ml-[13vw]">播客</div>
            </div>
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
                    <b class="text-[4vw]  ml-[3vw]">{atause.data.listenSongs }首</b>
                    <div class="text-[3.5vw] text-[#A8ACB3] absolute top-[23vw] left-[2vw]"><van-icon name="like-o"
                            color="#A8ACB3" />听歌排行</div>
                </div>
                <div class="w-[27vw] h-[30vw] border rounded-xl bg-[#F7FAFC] relative">
                    <p class="text-[3.5vw] text-[#A8ACB3] ml-[3vw] mt-[2vw]">我的喜欢</p>
                    <b class="text-[4vw]  ml-[3vw]">属于你的音乐档案</b>
                    <div class="text-[3.5vw] text-[#A8ACB3] absolute top-[23vw] left-[2vw]"><van-icon name="like-o"
                            color="#A8ACB3" />黑胶时光机</div>
                </div>
            </div>
        </div>
        <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
            <div class="pt-[4vw] ml-[4vw]">
                <b class="text-[5vw]">收藏的歌单</b> (23)<span>

                </span>
            </div>
            {/* <ul>
                <li v-for="item in songList" :key="item" class="flex ml-[3vw] mt-[4vw]">

                    <img :src="item.coverImgUrl" class="w-[13vw] h-[13vw] rounded-xl" alt="">
                    <div class="ml-[4vw]">
                        <p class="text-[4vw] truncate w-[68vw]">{{ item.name }}</p>
                        <p class="text-[3vw] text-[#D1D4D5]">{{ item.trackCount }}首,By {{ item.creator.nickname }},播放{{
                            wan(item.playCount) }}</p>
                    </div>

                </li>
            </ul> */}
        </div>
        <div class="w-[90vw] bg-[white] mx-auto mt-[10vw] rounded-xl">
            <div class="pt-[4vw] ml-[4vw]">
                <b class="text-[5vw]">创建歌单的歌单</b> (1个)<span>

                </span>
            </div>
            {/* <ul>
                <li v-for="item in create" :key="item" class="flex ml-[3vw]">
                    <img src={item.coverImgUrl} alt="" class="w-[13vw] h-[13vw] rounded-xl">
                    <div class="ml-[3vw]">
                        <p class="text-[4vw] truncate w-[68vw]">{item.name }</p>
                        <p class="text-[3vw] text-[#D1D4D5]">{ item.creator.gender }首</p>
                    </div>
                </li>
            </ul> */}
        </div>
        </div>
        </Wrapper>
        )
    },
    data() {
        return {
            userData: {},
            datause: {},
            areaList,
            songList: {},
            create: {}
        }
    },
    async created() {
        const resUser = await getUserAccount();
        // console.log(resUser);
        store.set('_cookieMusic', resUser.data.profile);
        this.datause = await getUserDetail(resUser.data.profile.userId);
        // console.log(this.datause);
        this.userData = store.get('_cookieMusic')
        // console.log(this.areaList);
        const detail = await getUserDetail(resUser.data.profile.userId);
        const res4 = await fetchUserPlaylist(detail.data.profile.userId);
        this.songList = res4.data.playlist
            .filter((item) => item.subscribed)
            .slice(1);
        this.create = res4.data.playlist
            .filter((item) => !item.subscribed)
            .slice(0, 1);
        this.trackCount = res4.data.playlist[0].trackCount;
        console.log('收藏的歌单', this.songList);
        console.log('创建的歌单', this.create);

    },
    methods: {
        nian(num) {
            return (num / 365).toFixed(0)
        },
        wan(num) {
            if(num > 100000000){
                return (num / 100000000).toFixed(1) + '亿'
            }
            else if (num > 10000) {
                return (num / 10000).toFixed(1) + '万'
            }
        }

    }
}