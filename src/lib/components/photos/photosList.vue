<template>
  <div class="photosList-continar">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in Category"
            :key="item.id "
            class="mui-control-item"
            @click="getPhotoByCatesId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photolist">
      <router-link :to="'/home/photosinfo/' + item.id" v-for="item in photoList" :key="item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title}}</h1>
          <p class="info-body">{{ item.zhaiyao}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import mui from "../../../lib/mui/js/mui.min.js";
import { log } from "util";

export default {
  data() {
    return {
      photoList: [],
      Category: []
    };
  },
  //一定不要忘记在钩子函数中调用方法进行初始化
  created() {
    this.getAllCategory();
    this.getPhotoByCatesId(0);
  },
  mounted() {
    //初始化滑块组件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //请求图片分类方法
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // console.log(result.body)
          //将全部分类加入message中
          result.body.message.unshift({ title: "全部", id: 0 });
          this.Category = result.body.message;
        } else {
          Toast("图片分类请求失败");
        }
      });
    },
    //请求图片
    getPhotoByCatesId(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          // console.log(result.body.message)
          this.photoList = result.body.message;
        } else {
          Toast("接收失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// 解决警告的问题
* {
  touch-action: pan-y;
}

#slider {
  z-index: -1000;
}

.photolist {
  list-style: none;
  margin: 0px;
  padding: 10px;
  padding-bottom: 0;
  li {
    box-shadow: 0 0 5px black;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #999;
    position: relative;
    img {
      vertical-align: middle;//解决下面留有空白的问题
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      // padding: 5px;
      text-align: left;
      color: white;
      max-height: 85px;
      position: absolute;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.3);
      .info-title {
        font-size: 15px;
      }
      .info-body {
        color: white;
        font-size: 13px;
      }
    }
  }
}
</style>
