<template>
  <div>
    <h1>新闻列表页</h1>
    <!-- <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h5>{{ item.title }}</h5>
                    <p class='mui-ellipsis'>
                    <span>发表时间：{{ item.add_time}}</span>
                    <span>点击：{{item.click}}次</span>
                    </p>
                </div>
                </router-link>
            </li>
    </ul>-->
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
          <img style />
          <div class="mui-media-body">
            小M
            <p>发表于 2016-06-30 15:30</p>
          </div>
        </div>
        <div class="mui-card-content">
          这是放图片的地方
          <img src alt width="100%" />
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Comment</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </div>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
          <img style />
          <div class="mui-media-body">
            小M
            <p>发表于 2016-06-30 15:30</p>
          </div>
        </div>
        <div class="mui-card-content">
          这是放图片的地方
          <img src alt width="100%" />
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Comment</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </div>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
          <img style />
          <div class="mui-media-body">
            小M
            <p>发表于 2016-06-30 15:30</p>
          </div>
        </div>
        <div class="mui-card-content">
          这是放图片的地方
          <img src alt width="100%" />
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Comment</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: [
        {
          title: "第1新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 1,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 2,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 2,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 3,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 4,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 5,
          click: 2
        },
        {
          title: "第2新闻",
          message: "这是新闻内容",
          date: "2019-7-46",
          id: 6,
          click: 2
        }
      ]
    };
  },
  methods: {}
};
</script>

 <style lang="scss" scoped>
.mui-content {
  background-color: #fff;
}
.mui-card-content {
  width: 100%;
  height: 100px;
}
img {
  background-color: pink;
}
</style>
 