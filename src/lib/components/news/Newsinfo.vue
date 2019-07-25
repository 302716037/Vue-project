<template>
    <div class="newsinfo-container">

    <h3 class="title">{{ newsinfo.title }}</h3>

    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time}}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>


    <div class="content" v-html="newsinfo.content"></div>



  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return{
            id: 13,
            newsinfo:{
                title:'小米手机',
                add_time:'2017-7-26',
                click:'10',
                contnent:'<h1>这是内容</h1>'
            }
        }
    }
    // ,
    // created(){
    //     this.getNewsInfo()
    // },
    // methods:{
    //     getNewsInfo(){
    //         this.$http.get('api/getnew/13').then( result => {
    //             if( result.body.status === 0){
    //                 this.newsinfo = result.body.message
    //             }else{
    //                 Toast('请求失败')
    //             }
    //         })
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.title{
    text-align: center;
}
.subtitle{
    display: flex;
    justify-content: space-between;
}
</style>
