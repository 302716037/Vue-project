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

//导入vuex数据管理
import Vuex from 'vuex'
Vue.use(Vuex)

//把浏览器本地储存的数据拿出来
//如果有car数组就拿出来，没有就得到一个空数组
var car = JSON.parse(localStorage.getItem('car') || '[]')

//创建成功一定要在下面的vue实例中使用
var store = new Vuex.Store({
	//数据
	state: {
		car: car
		// car中存放数据类型
		// var goodsInfo = {
		// 		id:this.id,
		// 		counts:this.selectCounts,
		// 		price:this.littleinfo.sell_price,
		// 		selected:true
		//   }
	},
	//方法
	mutations: {
		// 第一个一定是state
		//添加商品信息
		addInfoToCar(state, goodsinfo) {
			//添加数据之前我们需要先判断car中是否已经存在相同相同商品

			//默认情况下是没有对应数据
			var flag = false

			//查找对比数据
			state.car.some( item => {
				if(item.id == goodsinfo.id){
					flag = !flag
					item.counts += parseInt(goodsinfo.counts)
					return true
				}
			})

			// console.log(goodsinfo)
			// 如果没有相同的数据则把新数据添加到car数组中即可
			if( !flag ){
				state.car.push(goodsinfo)
			}

			//最后把数据添加到浏览器本地数据中
			// console.log(state.car)
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		//修改商品信息
		updataInfoToCar(state,getInfo){
			// console.log(getInfo)
			state.car.forEach(element => {
				if(element.id == getInfo.id){
					element.counts = parseInt(getInfo.counts)
					return true
				}
			});

			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updataInfoSelected(state,getSelected){
			state.car.forEach( element => {
				if( element.id === getSelected.id){
					element.selected = getSelected.selected
					return true
				}
			})

			localStorage.setItem('car', JSON.stringify( state.car))
		},
		deleteInfoTocar(state,id){
			state.car.forEach((item,index) => {
				if(item.id === id){
					state.car.splice(index,1)
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify( state.car ))
		}
	},
	getters:{
		//得到对应商品的对应商品数量
		getGoodsCounts(state){
			var counts = {}
			state.car.forEach( element => {
				counts[element.id] = parseInt(element.counts)
			});
			// console.log(counts)
			return counts
		},
		//得到商品选择zhuangtai
		getSelected(state){
			var selected = {}
			state.car.forEach( element => {
				selected[element.id] = element.selected
			});
			// console.log(selected)
			return selected 
		},
		//得到价格和数量
		getPriceAndCounts(state){
		 var list = {
			 price:0,
			 counts:0
		 }
		 state.car.forEach(element => {
			 if(element.selected){
				 list.price += element.counts * element.price
				 list.counts += element.counts
			 }
		 })
		 console.log(list)
		 return list
		}
	}
})


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
	el: '#app',
	render: c => c(app),//将Vue.vue组件渲染到index.html
	router,//制定路哟
	store
})  