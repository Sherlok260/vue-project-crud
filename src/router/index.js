import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import GET from '../views/GET'
import POST from '../views/POST'
import PUT from '../views/PUT'
import DELETE from '../views/DELETE'
import GetProduct from '../views/GetProduct'
import GetProductType from '../views/GetProductType'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/get',
    name: 'get',
    component: GET
  },
  {
    path: '/post',
    name: 'post',
    component: POST
  },
  {
    path: '/put',
    name: 'put',
    component: PUT
  },
  {
    path: '/delete',
    name: 'delete',
    component: DELETE
  },
  {
    path: '/get/getProduct',
    name: 'getProduct',
    component: GetProduct
  },
  {
    path: '/get/getProductType',
    name: 'getProductType',
    component: GetProductType
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
