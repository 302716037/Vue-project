<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <!-- "-"按钮，点击可减小当前数值 -->
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" value="1"/>
    <!-- "+"按钮，点击可增大当前数值 -->
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
};
</script>

<style lang="scss" scoped>
</style>
