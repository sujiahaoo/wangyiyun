<template>
  <div class="w-screen bg-gradient-to-r from-purple-100 to-purple-200">
    <!-- 头部 -->

    <div class="h-[12vw] pt-5 flex w relative text-xs:10px">
         <Icon @click.native="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)" icon="basil:menu-solid" class="w-[4vw] h-[8vw] mr-4 " />
          <input type="text" class="inp w-[70vw] h-[8vw] pl-[6vw] rounded-3xl">
          <Icon icon="circum:search" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[9vw]" />
          <Icon icon="ph:scan-duotone" color="#78758b" class="w-[4vw] h-[8vw] absolute left-[70vw]" />
          <Icon icon="tabler:microphone" color="#3b445b" class="w-[4vw] h-[8vw] ml-5" />
          
          
        
     </div>

    <!-- 轮播 -->

    <banners :banners="banners" />
    <!-- 菜单 -->

    <div class=" overflow-hidden h-[23vw]">
     
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content flex w-[185vw]">
          <menus :menus="menus"></menus>

        </div>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="w-sreen h-[46vw] text-xs mt-4 overflow-hidden">
      <div class="w-[95vw] h-[6vw] flex now mx-auto">
        <p class="flex ml-[5vw]">推荐歌单
          <icon class="mt-0" icon="ep:arrow-right-bold" color="black" width="15" />
        </p>
        <icon class="ml-[5vw]" icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper" ref="menus">
        <div class="scroll-content flex w-[170vw] float-left">
          <!-- <div class="w-[28vw] h-[28vw] float-left">
          <transition name="abc" v-for="(item) in lunbo" :key="item">
            <div v-if="visible" class="absolute top-0 left-0">
            <img :src="item.uiElement.image.imageUrl" class="w-[25vw] h-[25vw]" alt="">
         </div>
         </transition>
        </div> -->
        <div class="w-[28vw] h-[30vw]  mr-[vw] float-left">
              <div class="w-[27vw] h-[27vw] border-[1px] overflow-hidden relative rounded-[3vw]">
                <div class="absolute top-[2vw] right-[6.5%] font-[800] text-[#fff] flex items-center z-30">
                  <Icon icon="ion:infinite-outline" class="text-[#fff] w-[6vw] h-[6vw]"/>
                </div>
                <transition class="relative" name="abc" v-for="(item, index) in lunbo" :key="item.id">
                  <div v-if="visible === index" class="absolute top-0 left-0&quot; " >
                    <img :src="item.uiElement.image.imageUrl" alt="" class="w-[25vw] h-[25vw] rounded-[3vw]" />
                  </div>         
                </transition>
              </div>
              <p class="w-[25vw] h-[8vw] text-[10px] text-[#3E4759] scroll-item line-clamp-2 whitespace-normal mt-[-3vw]">
                {{ resourceData }}
              </p>
            </div>

          <songdan :songdan="songdan"></songdan>

        </div>
      </div>
    </div>
    <!-- 新歌速递 -->
    <!-- <song /> -->
    <div class=" overflow-hidden h-[74vw] relative mt-[4vw]">
      <div class="flex justify-between wrapper mb-4 z-999 ">
        <div class="flex items-center  ml-[8vw] ">
          <span class="text-xs">新歌新碟/数字专辑</span>
          <icon icon="ep:arrow-right-bold" color="black" width="15"/>
          
        </div>
        
      </div>
      <span class="absolute left-[96vw] top-[-1vw]">
      <icon class="mt-1" icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup"/>

      </span>
      

      <div class="scroll-wrapper" ref="song">
        <div class="scroll-content flex w-[420vw]">
          <song :song="song" />
        </div>
      </div>
    </div>
    <!-- 排行榜 -->
    <!-- <paihang :paihang="paihang"/> -->
    <div class=" overflow-hidden h-[85vw] mt-8">
      <div class="flex justify-between wrapper mb-4">
        <div class="flex items-center  ml-[8vw]">
          <span class="text-xs">排行榜</span>
          <icon icon="ep:arrow-right-bold" color="black" width="15" />
        </div>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper" ref="song2">

        <div class="scroll-content flex w-[325vw]">
          <paihang :paihang="paihang" />
        </div>
      </div>
    </div>

    <!-- 日历 -->
    <div class="w-90vw h-[59vw] mx-auto">
      <div class="flex justify-between items-center"><b class="ml-[8vw]">音乐日历</b>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
        <day :day="day" />
    </div>
    <div class="mt-5 border-b pb-4 border-gray-300 font-[3vw]">
      <div class="flex justify-between wrapper mb-4">
        <span class="font-[700] text-[18px] ml-[5vw]">热门话题</span>
        <icon icon="ri:more-2-fill" color="black" width="15" @click.native="showPopup" />
      </div>
      <div class="scroll-wrapper overflow-hidden" ref="scrollsong">
        <ul class="scroll-content flex w-[185vw]">
          <li
            class="scroll-item w-[90vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around box-border rounded-2xl bg-gradient-to-b from-[#a0a07d] to-[#b3b599]">
            <div>
              <p class="flex items-center w-[47vw] mb-[1vw]">
                <Icon icon="solar:chat-round-like-linear" width="20" color="white" />
                <span class="text-[#fff]  ml-[1.3vw]">最令你感动的那首歌</span>
              </p>
              <p class="text-[#c9c9c9] text-[13px]">484万热度</p>
            </div>
            <div class="flex justify-between w-[100%]">
              <div class="flex flex-col justify-end">
                <p class="text-[#ececec]">Saint_Denis:今日份的感动</p>
                <p class="text-[#ececec]">"我希望我们能永远真诚且热烈"</p>
              </div>
              <div>
                <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt=""
                  class="w-[14vw] h-[14vw] rounded-xl ml-[5vw]">
              </div>
            </div>
          </li>
          <li
            class="scroll-item w-[90vw] h-[35.44vw] mr-3 p-3 flex flex-col justify-around  box-border rounded-2xl bg-gradient-to-b from-[#937ea2] to-[#aa95b9]">
            <div>
              <p class="flex items-center w-[47vw] mb-[1vw]">
                <Icon icon="solar:chat-round-like-linear" width="20" color="white" />
                <span class="text-[#fff]  ml-[1.3vw]">最令你感动的那首歌</span>
              </p>
              <p class="text-[#c9c9c9] text-[13px]">22万热度</p>
            </div>
            <div class="flex justify-between w-[100%]">
              <div>
                <p class="text-[#ececec]">辣目小霏:今日份的感动</p>
                <p class="text-[#ececec]">you by chance.</p>
              </div>
              <div>
                <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt=""
                  class="w-[14vw] h-[14vw] rounded-xl">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup closeable v-model="show" position="bottom"
      :style="{ height: '20%', borderRadius: '10px 10px 0 0' }">
      <p class="ml-4 mt-5 w-[90vw] h-[8vw] border-b-2 border-[#000]">推荐歌单</p>
      <p class="flex font-[5vw] mt-[3vw] items-center "><Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="mdi:like" /><b class="ml-[5vw]">优点推荐</b></p>
      <p class="flex font-[5vw] items-center"> <Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="ph:prohibit-bold"/><b class="ml-[5vw]">减少推荐</b></p>

      <p class="flex text-[5vw] items-center"><Icon class="ml-[3vw] w-[3vw] h-[3vw]" icon="material-symbols:refresh"/><b class="ml-[5vw]">刷新</b></p>

    </van-popup>

    <Drawer :visible.sync="drawerVisible" direction="ltr">
      <!-- <template #header>
        <div class="flex justify-between items-center">
          <p>推荐歌单</p>
          <Icon icon="clarity:times-line" />
        </div>
      </template> -->
     <template>
                    <div class="w-[80%] h-[10vw] fixed top-0 flex items-center justify-between bg-white">
                        <div class="flex justify-between items-center ">
                            <img class="w-[6.67vw] h-[6.94vw] rounded-[50%] mr-[2.87vw]" src="https://img0.baidu.com/it/u=1204940695,1987188323&fm=253&fmt=auto&app=138&f=JPEG?w=517&h=500" alt="">
                            <div class="flex items-center">
                                <span>iKun</span>
                                <icon icon="ep:arrow-right-bold" color="black" width="15"/>
                            </div>
                        </div>
                        <icon icon="lucide:scan-line" color="#000" width="20"  />
                    </div>
                </template>
                <div class="w-[100%] h-[8vw]"></div>
               
                    <!-- 黑胶 -->
                    <div class="w-[75.74vw] h-[28.06vw] pt-[3.24vw] px-[4.17vw] pb-[2.87vw] mt-[5.65vw] mb-[4.17vw] flex flex-col justify-between text-[3vw] bg-gradient-to-r from-[#3b3937] to-[#5b504c] rounded-2xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-[3.89vw] text-[#fce3e1]">开通黑胶VIP</p>
                                <p class="text-[#a08d89]">立享超21项专属特权 ></p>
                            </div>
                            <div class="w-[16.39vw] h-[6.39vw] text-[#a9948e] border-[2px] border-[#a9948e] rounded-[20px] text-center leading-[6.39vw]">会员中心</div>
                        </div>
                        <p class="text-[#a08d89]">专享优惠!黑胶VIP仅￥0.26/天!</p>
                    </div>
                    <div class="mb-[4.17vw] bg-white rounded-xl px-[4.26vw]">
                        <div class="h-[12.69vw] border-b-[1px] border-[#ccc] flex justify-between items-center">
                            <div class="flex items-center">
                                <Icon icon="solar:letter-linear" width="15"/>
                                <p class="ml-[3vw]">消息中心</p>
                            </div>
                            <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                        </div>
                        <div class="h-[12.69vw] border-b-[1px] border-[#ccc] flex justify-between items-center">
                            <div class="flex items-center">
                                <Icon icon="simple-icons:shell"  width="15"/>
                                <p class="ml-[3vw]">云贝中心</p>
                            </div>
                            <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                        </div>
                        <div class="h-[12.69vw] flex justify-between items-center">
                            <div class="flex items-center">
                                <Icon icon="streamline:interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights" width="15" />
                                <p class="ml-[3vw]">创作者中心</p>
                            </div>
                            <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                        </div>
                    </div>
                    <!-- 音乐服务 -->
                    <div class="mb-[4.17vw] bg-white rounded-xl">
                        <div class="h-[10vw] pl-[4.26vw] border-b-[1px] border-[#ccc] text-[#ccc] leading-[10vw]">音乐服务</div>      
                        <div class="px-[4.26vw]">
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="emojione-monotone:dotted-six-pointed-star" width="15"/>
                                    <p class="ml-[3vw]">趣测</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">点击查看今日运势</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="emojione-monotone:admission-tickets" width="15" />
                                    <p class="ml-[3vw]">云村有票</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="system-uicons:cube" width="15" />
                                    <p class="ml-[3vw]">多多西西口袋</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="solar:bag-4-outline" width="15" />
                                    <p class="ml-[3vw]">商城</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                    <p class="ml-[3vw]">Beat专区</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">顶尖制作邀你创作</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ri:bell-line" width="15" />
                                    <p class="ml-[3vw]">口袋彩铃</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">游戏专区</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">音乐浇潘治愈花园</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 其他 -->
                     <div class="mb-[4.17vw] bg-white rounded-xl">
                        <div class="h-[10vw] pl-[4.26vw] border-b-[1px] border-[#ccc] text-[#ccc] leading-[10vw]">其他</div>      
                        <div class="px-[4.26vw]">
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:setting-one" width="15" />
                                    <p class="ml-[3vw]">设置</p>
                                </div>
                                <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="emojione-monotone:admission-tickets" width="15" />
                                    <p class="ml-[3vw]">深色模式</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="system-uicons:cube" width="15" />
                                    <p class="ml-[3vw]">定时关闭</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="solar:bag-4-outline" width="15" />
                                    <p class="ml-[3vw]">个性装扮</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                    <p class="ml-[3vw]">边听边存</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">在线听歌免流量</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ri:bell-line" width="15" />
                                    <p class="ml-[3vw]">添加Siri捷径</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">音乐黑名单</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">青少年模式</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">未开启</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">音乐闹钟</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    

                    <div class="mb-[4.17vw] bg-white rounded-xl">
                        <div class="px-[4.26vw]">
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:setting-one" width="15" />
                                    <p class="ml-[3vw]">我的客服</p>
                                </div>
                                <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="emojione-monotone:admission-tickets" width="15" />
                                    <p class="ml-[3vw]">我的订单</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="system-uicons:cube" width="15" />
                                    <p class="ml-[3vw]">优惠券</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="solar:bag-4-outline" width="15" />
                                    <p class="ml-[3vw]">分享网易云音乐</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" width="15" />
                                    <p class="ml-[3vw]">边听边存</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">个人信息手机与使用清单</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ri:bell-line" width="15" />
                                    <p class="ml-[3vw]">个人信息第三方共享清单</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">个人与隐私保护</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]"></span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                
                            </div>
                            <div class="h-[12.69vw] flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mingcute:game-2-line" width="15" />
                                    <p class="ml-[3vw]">关于</p>
                                </div>
                                <div class="flex">
                                    <span class="text-[#ccc] text-[2.6vw] mr-[2.78vw]">未开启</span>
                                    <icon icon="ep:arrow-right-bold" color="#ccc" width="15" />
                                </div>
                                
                            </div>
                           
                        </div>
                   
                    
                </div>
                <div class="bg-white w-[80vw] text-center  h-[15vw] mb-[5vw] rounded-2xl text-red-600 lh">退出登录</div>
    </Drawer>
  </div>
</template>
<script>


import axios from 'axios';
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      drawerVisible: false,
      visible: 0,
      banners: [],
      songdan: [],
      activeMenuItem: '',
      playlists: [],
      menus: [],
      song: [],
      paihang: [],
      day: [],
      lunbo:[],
      show: false,
      resourceData: '',
    }
  },
  components: {
    top: () => import('./HomeView/components/top.vue'),
    banners: () => import('./HomeView/components/banner.vue'),
    menus: () => import('./HomeView/components/menus.vue'),
    songdan: () => import('./HomeView/components/songdan.vue'),
    song: () => import('./HomeView/components/song.vue'),
    paihang: () => import('./HomeView/components/paihang.vue'),
    day: () => import('./HomeView/components/rili.vue'),
    Drawer:()=> import('../compontents/Drawer.vue') 


  },
  mounted() {
    this.init(this.$refs.scrollsong)
    this.init(this.$refs.song2)
    this.init(this.$refs.song)
    this.init(this.$refs.menus)

    this.init(this.$refs.scroll)
    this.init(this.$refs.scroll1)
 
this.animateItems();

  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init(name) {
      this.bs = new BScroll(name, {
        scrollX: true,
        scrollY: false,
        probeType: 4 // listening scroll event
      })
    },
    showPopup() {
      this.show = true;
    },
    animateItems() {
            setInterval(() => {
              this.visible++;
              if (this.visible === this.lunbo.length) {
                this.visible = 0;
              }
              this.resourceData =
                this.lunbo[this.visible].uiElement.mainTitle.title;
            }, 5000);
          },
  },
 



  async created() {
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
      )
      .then((res) => {
        this.day = res.data.data.calendarEvents.slice(0, 2);
        // console.log(this.day);
      })

    axios
      .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then((res) => {
        //   this.song = res.data.data.blocks[5].creatives;
        this.paihang = res.data.data.blocks[5].creatives;

      })
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then(res => {
        this.banners = res.data.data.blocks[0].extInfo.banners;
        // console.log(this.banners);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
      .then(res => {
        // console.log(res.data.data);
        this.menus = res.data.data
      })
      .catch(err => {
        console.log(err);
      })
      //歌单
    axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then(res => {
        this.songdan = res.data.data.blocks[1].creatives.slice(1);
        this.lunbo = res.data.data.blocks[1].creatives[0].resources;
        
       console.log(this.lunbo);
      })
      .catch(err => {
        console.log(err);
      })
    axios
      .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
      .then((res) => {
        //   this.song = res.data.data.blocks[5].creatives;
        this.song = res.data.data.blocks[5].creatives;

      })
  }
}

</script>

<style>
.w {
  width: 88vw;
  margin: 0 auto;
}

.now {
  align-items: center;
  justify-content: space-between;
}
.abc-enter{
  opacity: 0;
  transform: translateY(100%) scale(.7);
}
.abc-enter-active{
  transition: all ease-in-out 1s;
}
.abc-enter-to{
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave{
  transform: translateY(0) scale(1);
}
.abc-leave-active{
  transition: all ease-in-out 1s;
}
.abc-leave-to{
  transform: translateY(-100%) scale(.7);
}


img {
  max-width: none
}

.horizontal-container,
.scroll-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;

  border-radius: 5px;

  height: 35vw;
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
}

.scroll-item {
  
  /* font-size: 20px; */
  display: inline-grid;

  padding: 0 10px;
}

.ps {
  white-space: normal;
  
}
.lh {
  line-height: 15vw;
}

</style>
