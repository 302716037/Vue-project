<template>
    <!-- 这是新闻详情页的头部 -->
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
             <span>发表时间：{{ newsinfo.add_time | time}}</span>
             <span>点击：{{ newsinfo.click }}次</span>
         </p>
    <hr>

    <!-- 这是新闻详情页的内容 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 这是新闻详情页的留言 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id: this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+ this.id).then( result => {
                if( result.body.status === 0){
                    this.newsinfo = result.body.message[0]
                }else{
                    Toast('请求失败')
                }
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 5px 8px;
    .title{
        font-size: 17px;
        font-weight: 200;
        text-align: center;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
    // .content{

    // }
}

</style>
