<template>
  <div class="shopingcar-page">
    <div class="mui-card" v-for="item in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner shangpin">
          <mt-switch
            v-model="$store.getters.getSelected[item.id]"
            @change="selectChanged(item.id,$store.getters.getSelected[item.id])"
          ></mt-switch>
          <img :src="item.thumb_path" alt />
          <div class="right">
            <h1>{{ item.title }}</h1>
            <div class="down">
              <span class="price">￥{{ item.sell_price }}</span>
              <num-box :counts="$store.getters.getGoodsCounts[item.id]" :id="item.id"></num-box>
              <span>删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card jiesuancar">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <span class="left">
            总计（不含运费）
            <br />已勾选商品
            <span class="number">{{ $store.getters.getPriceAndCounts.counts }}</span>件
            总价￥
            <span class="number">{{ $store.getters.getPriceAndCounts.price }}</span>
          </span>
          <mt-button type="danger" size="small">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "./subcomponents/shopingcar_numberbox.vue";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      flag: true,
      idlist: [], //商品id数组
      goodsList: [] //商品信息数组
    };
  },
  components: {
    "num-box": numberbox
  },
  created() {
    this.getshopcarlist();
  },
  methods: {
    getshopcarlist() {
      // 获取vuex中的id并拼接到本地得idlist中
      this.$store.state.car.forEach(element => {
        this.idlist.push(element.id);
        // console.log(this.idlist)
      });
      this.$http
        .get("api/goods/getshopcarlist/" + this.idlist.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodsList = result.body.message;
            // console.log(this.goodsList)
          } else {
            Toast("数据请求失败");
          }
        });
    },
    selectChanged(goodsid, gs) {
      this.$store.commit("updataInfoSelected", { id: goodsid, selected: gs });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopingcar-page {
  margin-bottom: 80px;
  .shangpin {
    align-items: center;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 14px;
    }
    img {
      width: 65px;
      height: 65px;
    }
    .down {
      .price {
        color: red;
        font-weight: bold;
      }
      .mui-numbox {
        margin: 5px;
        // width: 70px;
        height: 25px;
      }
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
  .jiesuancar {
    position: fixed;
    width: 100%;
    margin: 0;
    bottom: 50px;
    .jiesuan {
      display: flex;
      justify-content: space-between;

      .left {
        .number {
          font-size: 17px;
          color: red;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
