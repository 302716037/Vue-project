<template>
  <div class="goodsinfo-page">
    <!-- 定义一个小球设置飞入动画 -->
    <!-- 因为是单向动画所以要使用动画的钩子函数 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <!-- 通过ref获取对象 -->
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 第一个卡片放置轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in image" :key="item.src">
              <img :src="item.src" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <!-- 第二个卡片放置选择数量 -->
    <div class="mui-card">
      <div class="mui-card-header">{{littleinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span class="now">销售价￥{{ littleinfo.sell_price }}</span>
            <span class="old">市场价￥{{ littleinfo.market_price }}</span>
          </div>
          <span>
            购买数量:
            <!-- 因为商品详情添加到购物车的数量选择器和购物车页面的数量选择器触发的事件并不一样需要单独封装 -->
            <num-box></num-box>
          </span>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="danger" size="small">立即购买</mt-button>
        <mt-button type="primary" size="small" @click="addToShopCar">加入购物车</mt-button>
      </div>
    </div>
    <!-- 第三个卡片放置基本信息 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          商品货号: {{ littleinfo.goods_no }}
          <br />
          库存情况: {{ littleinfo.stock_quantity }}
          <br />
          上架时间: {{ littleinfo.add_time | time }}
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDetailedInfo()">图文详情</mt-button>
        <mt-button type="danger" size="large" plain @click="goComments()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import numberbox from "../subcomponents/goodsinfo_nuberbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      image: [],
      littleinfo: {},
      detailedInfo: {},
      ballFlag: false
    };
  },
  created() {
    this.getLunBo();
    this.getLittleInfo();
  },
  methods: {
    //获取轮播图数据
    getLunBo() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.image = result.body.message;
        } else {
          Toast("获取轮播图失败");
        }
      });
    },
    //获取参数信息
    getLittleInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.littleinfo = result.body.message[0];
        } else {
          Toast("获取轮播图失败");
        }
      });
    },
    //去商品详情页面
    goDetailedInfo() {
      this.$router.push({ name: "goodsdetailedinfo", params: this.id });
    },
    //商品评论页面
    goComments() {
      this.$router.push({ name: "goodscomments", params: this.id });
    },
    //添加购物车按钮和事件
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      
      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.8s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    "num-box": numberbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-page {
  .ball {
    width: 16px;
    height: 16px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 375px;
    left: 140px;
    z-index: 100;
  }
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      text-align: center;
      img {
        height: 100%;
      }
    }
  }
  .price {
    .now {
      color: red;
      font-weight: bold;
    }
    .old {
      margin-left: 10px;
      text-decoration: line-through;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin-bottom: 10px;
    }
  }
}
</style>
