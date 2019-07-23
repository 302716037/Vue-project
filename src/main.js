import Vue from 'vue'

import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//导入mui的样式
import './lib/mui/css/mui.min.css'

import app from './App.vue'

var vm = new Vue({
	el:'#app',
	render: c => c(app)
})