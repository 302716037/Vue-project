import VueRouter from 'vue-router'

import Home from './lib/components/Home.vue'
import Shoping from './lib/components/Shoping.vue'
import Shopcar from './lib/components/Shopcar.vue'
import AboutMe from './lib/components/AboutMe.vue'

import Newspage from './lib/components/news/Newspage.vue'
import Newsinfo from './lib/components/news/Newsinfo.vue'

import PhotosList from './lib/components/photos/photosList.vue'
import PhotosInfo from './lib/components/photos/photosInfo.vue'

import GoodsInfo from './lib/components/goods/GoodsInfo.vue'
import GoodsDetailedInfo from './lib/components/goods/GoodsDetailedInfo.vue'
import GoodsComments from './lib/components/goods/GoodsComments.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/shoping',component:Shoping},
    {path:'/shopcar',component:Shopcar},
    {path:'/aboutme',component:AboutMe},

    {path:'/home/newspage',component: Newspage},
    {path:'/home/newsinfo/:id',component: Newsinfo},
    {path:'/home/photoslist',component: PhotosList},
    {path:'/home/photosinfo/:id',component: PhotosInfo},

    {path:'/shoping/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'},
    {path:'/shoping/goodsdetailedinfo/:id',component:GoodsDetailedInfo,name:'goodsdetailedinfo'},
    {path:'/shoping/goodscomments/:id',component:GoodsComments,name:'goodscomments'},


  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router