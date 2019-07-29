<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" :value="counts" @change="changedCounts" ref="afterCounts" readonly/>
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../mui/js/mui.min.js'

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    changedCounts(){
      this.$store.commit('updataInfoToCar',
      {id:this.id,counts:this.$refs.afterCounts.value}
      )
    }
  },
  props: ["counts","id"]
};
</script>

<style lang="scss" scoped>
</style>
