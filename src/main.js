//导入vue
import Vue from 'vue'


//导入vue-router组件吗
import VueRouter from 'vue-router'
//使用组件
Vue.use(VueRouter)

//导入组件模块
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入mui的样式 
import './lib/mui/css/mui.min.css'

//导入router.js文件
import router from './router.js'


import app from './App.vue'


var vm = new Vue({
	el:'#app',
	render: c => c(app),//将Vue.vue组件渲染到index.html
	router//制定路哟
})  