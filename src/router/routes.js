import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  {
    path: "/",
    redirect: '/IndexView'

  },
  {
    path: '/IndexView',
    component: IndexView
  },
 
  {
    path: '/MineView',
    component: MineView,
  }
]

