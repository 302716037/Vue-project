<template>
  <div class="photosInfo-container">
    <!-- 标题 -->
    <h1>{{ infoList.title }}</h1>

    <!-- 时间点击次数 -->
    <div class="info">
      <span class="time">发布时间{{ infoList.add_time | time }}</span>
      <span class="click">点击次数:{{ infoList.click }}</span>
    </div>

    <hr />

    <div class="thumbs">
      <vue-preview :slides="photoList" @close="getPhotos"></vue-preview>
    </div>

    <!-- 详细描述 -->
    <p class="content" v-html="infoList.content"></p>

    <!-- 这是评论组件 -->

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//引入评论组件
import comment from "../subcomponents/comment.vue";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      id: this.$route.params.id,
      infoList: {},
      photoList: []
    };
  },
  created() {
    this.getInfo();
    this.getPhotos();
  },
  methods: {
    getInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          //一定要注意下面 result.body.message[0] 中的0
          //因为不需要循环所以要把里面的对象直接取出来
          this.infoList = result.body.message[0];
        } else {
          Toast("请求失败");
        }
      });
    },
    getPhotos() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src; //小图
          });

          this.photoList = result.body.message;
        } else {
          Toast("图片请求失败");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

 <style lang="scss">
.photosInfo-container {
  margin: 5px;

  h1 {
    margin: 10px auto;
    text-align: center;
    font-size: 16px;
  }
  .thumbs {
    display: grid;
    img {
      float: left;
      width: 70px;
      height: 70px;
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
}
</style>
 
