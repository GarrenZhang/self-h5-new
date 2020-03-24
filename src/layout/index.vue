<template>
  <div class="app-wrapper">
    <div class="app-top">这是预留的顶部区域</div>
    <app-main />
    <div class="app-footer">这是预留的footer区域</div>
  </div>
</template>

<script>
import AppMain from './component/AppMain.vue'
export default {
  name: 'LayOut',
  components: {
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 60px;
  border: 1px solid $color-theme;
}
.app-top, .app-footer {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px dashed $color-theme;
}
.app-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
