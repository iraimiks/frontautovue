import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AutoView from '../views/AutoView.vue'
import SpecTrans from '../views/SpecTrans.vue'
import CollingView from '../views/CoolingView.vue'
import MotoView from '../views/MotoView.vue'
import WorksView from '../views/WorksView.vue'
import OilChange from '../views/OilChange.vue'
import ShowItems from '../components/ShowItems.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auto',
    name: 'auto',
    component: AutoView
  },
  {
    path: '/spec',
    name: 'spec',
    component: SpecTrans
  },
  {
    path: '/cooling',
    name: 'cooling',
    component: CollingView
  },
  {
    path: '/moto',
    name: 'moto',
    component: MotoView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/price',
    name: 'price',
    component: ShowItems
  },
  {
    path: '/oilchange',
    name: 'oilchange',
    component: OilChange
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
