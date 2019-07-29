<template>

  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" @change="countChanged" value="1" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

</template>

<script>
import mui from "../../mui/js/mui.min.js";

export default {
  //用钩子函数初始化数字选择框组件
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    //通过方法向父组件传值
    countChanged() {
      // console.log(this.$refs.numbox.value);
      // 通过ref绑定元素，拿到元素中的属性值
    // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      this.$emit("getCounts",this.$refs.numbox.value)
    }
  },
  props: ["max"],
  watch: {
    // 属性监听
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>