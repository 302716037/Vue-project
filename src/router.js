import VueRouter from 'vue-router'

import Home from './lib/components/Home.vue'
import Mamber from './lib/components/Mamber.vue'
import Shopcar from './lib/components/Shopcar.vue'
import Sreach from './lib/components/Sreach.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Mamber},
    {path:'/shopcar',component:Shopcar},
    {path:'/sreach',component:Sreach},
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router