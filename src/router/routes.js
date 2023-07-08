import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
import SongSheetView from '@/views/SongSheetView.vue'
import MineView from '@/views/MineView.vue';
export default [
  {
    path: "/",
    redirect: '/PersonalCenter'

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
    component:()=>import('@/views/MyProfileView.vue')
  }
  ,{
    path: '/PersonalCenter',
    // 懒加载组件
    component:()=>import('@/views/PersonalCenter.vue')
  }
]

