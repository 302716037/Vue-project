<template>
  <div class="shoping-centent">

    <div @click="goGoodsInfo(item.id)" class="list" v-for="item in list" :key="item.id">
      <img :src=" item.img_url " alt />
      <h1> {{ item.title }} </h1>
      <div class="info">
        <div class="price">
          <span class="new">￥{{ item.sell_price}}</span>
          <span class="old">￥{{ item.market_price}} </span>
        </div>
        <div class="sell">
          <span class="left">热卖中</span>
          <span class="right">剩余{{ item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <!-- 注意下面的button中的type属性里不能有空格要不然会报错 -->
    <mt-button type="primary" size="large" @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return{
            list:[],
            goodsPage:1
        }
    },
    created(){
        this.getInfo()
    },
    methods:{
        //获取商品列表
        getInfo(){
            this.$http.get('api/getgoods/?pageindex=' + this.goodsPage).then( result => {
                if( result.body.status === 0){
                  //因为要加载更多所以最好时拼接数组，将加载的页数拼接起来
                  this.list = this.list.concat(result.body.message) 
                }else{
                    Toast('获取失败')
                }
            })
        },
        //获取更多商品列表
        getMore(){
            this.goodsPage++
            this.getInfo()
        },
        //用js的形式进行路由导航 this.$router.push()
        goGoodsInfo(id){
            //使用命名的方式
            this.$router.push({name:"goodsinfo",params:{ id }})
        }
    }
};
</script>

<style lang="scss" scoped>
//这是排版时候用的边框
// * {
//   border: 1px solid black;
// }
.shoping-centent {
    padding: 0 5px;
    //设施整体的布局
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  .list {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;

    // 下面是解决每一个部件的排版问题
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 293px;
        padding: 3px;
    img {
      width: 100%;
      text-align: center;
    }
    h1 {
      color: #666;
      font-size: 16px;
    }
    .info {
      background-color: #eee;
      color: #8f8f94;
      .price {
        padding: 8px;
        .new {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          margin-left: 6px;
          font-size: 13px;
        }
      }
      .sell {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        font-weight: bold;
        .left {
        }
        .right {
        }
      }
    }
  }
}
</style>
