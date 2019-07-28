<template>
  <div class="goodsdetailedinfo-page">
    <h1>{{info.title}}</h1>
    <hr>
    <p v-html="info.content"></p>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
        id: this.$route.params.id,
        info:{}
    };
  },
  created(){
      this.getInfo()
  },
  methods: {
    getInfo() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        } else {
          Toast("获取轮播图失败");
        }
      });
    }
  }
};
</script>

<style lang="scss">
.goodsdetailedinfo-page{
    margin: 0px 5px;
    h1{
        text-align: center;
        padding: 10px 0px;
        font-size: 16px;
    }
    p{
        img{
            width: 100%;
        }
    }
}
</style>
