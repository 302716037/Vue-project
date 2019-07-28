<template>
    <div>
        <com-box :id="this.id"></com-box>
    </div>
</template>

<script>
import comments from '../subcomponents/comment.vue';
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    components:{
        'com-box':comments
    }
}
</script>

<style lang="scss" scoped>
    div{
        padding: 0 3px;
    }
</style>
