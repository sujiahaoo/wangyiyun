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
]

