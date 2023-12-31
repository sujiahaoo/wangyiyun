import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
import SongSheetView from '@/views/SongSheetView.vue'
import MineView from '@/views/MineView.vue';
export default [
  {
    path: "/",
    redirect: '/Login'

  },
  {
    path: '/IndexView',
    component: IndexView
  },
 
  {
    path: '/MineView',
    component: MineView,
  },
  {
    path: '/Login',
    // 懒加载组件
    component:()=>import('@/views/Login.vue')
  }
  ,{
    path: '/SongSheetView',
    // 懒加载组件
    component:()=>import('@/views/SongSheetView.vue')
  }
  ,
  {
    path:'/song',
    component:SongSheetView
  }
  ,{
    path: '/MyProfileView',
    // 懒加载组件
    component:()=>import('@/views/MyProfileView.jsx')
  }
  ,{
    path: '/Pers',
    // 懒加载组件
    component:()=>import('@/views/PersonalCenter.jsx')
  }
  ,{
    path: '/0708',
    // 懒加载组件
    component:()=>import('@/views/Feat-0708.jsx')
  },
  {
    path: '/player',
    // 懒加载组件
    component:()=>import('@/compontents/player/player.vue')
  },
  {
    path: '/menus',
    // 懒加载组件
    component:()=>import('@/compontents/menus/menus.vue')
  },
  
  {
    path: '/MusicplayerView',
    // 懒加载组件
    component:()=>import('@/views/MusicplayerView.vue')
  },
  {
    path: '/MusicplayerView',
    // 懒加载组件
    component:()=>import('@/views/MusicplayerView.vue')
  },

  {
    path: '/MVleaderboardView',
    // 懒加载组件
    component:()=>import('@/views/MVleaderboardView.vue')
  },
  {
    path: '/VideoPayerView',
    // 懒加载组件
    component:()=>import('@/views/VideoPayerView.vue')
  },
]

