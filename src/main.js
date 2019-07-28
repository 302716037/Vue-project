//导入vue
import Vue from 'vue'


//导入vue-router组件吗
import VueRouter from 'vue-router'
//使用组件
Vue.use(VueRouter)

//导入组件模块分模块导入
// import { Header, Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

//整体导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入mui的样式 
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('time', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})

//导入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入router.js文件
import router from './router.js'

//导入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)



//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局定义post请求
Vue.http.options.emulateJSON = true  


import app from './App.vue'


var vm = new Vue({
	el:'#app',
	render: c => c(app),//将Vue.vue组件渲染到index.html
	router//制定路哟
})  