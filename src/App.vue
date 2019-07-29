<template>
  <div class="app-container">
    <mt-header fixed title="银永鑫的VUE项目">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- //设置页面切换动画 -->
    <div class="yemian">
      <transition>
        <router-view></router-view>
      </transition>

    </div>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shoping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
        <span class="mui-tab-label">商店</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <!-- 这是购物车按钮的小角标 -->
          <span class="mui-badge" id="badge">{{ $store.getters.getPriceAndCounts.counts }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/aboutme">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">关于我</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    // this.flag = this.$route.path === "/home" ? false : true
    //下面时改版之后首页的四个界面都没有返回按键
    switch (this.$route.path) {
      case "/home":
        this.flag = false;
        break;
      case "/shoping":
        this.flag = false;
        break;
      case "/shopcar":
        this.flag = false;
        break;
      case "/sreach":
        this.flag = false;
        break;
      default:
        this.flag = true;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      //只监听首页
      // if (newVal === "/home") {
      // 	this.flag = false;
      // } else {
      // 	this.flag = true;
      // }

      // 监听多页
      switch (newVal) {
        case "/home":
          this.flag = false;
          break;
        case "/shoping":
          this.flag = false;
          break;
        case "/shopcar":
          this.flag = false;
          break;
        case "/sreach":
          this.flag = false;
          break;
        default:
          this.flag = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-header {
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;

}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

// 该类名，解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
} 
</style>
