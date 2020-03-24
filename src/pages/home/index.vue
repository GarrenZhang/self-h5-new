<template>
  <div class="home">
    <p class="text">中间为AppMain区域</p>
    <p class="text">新增的组件都在AppMain中</p>
    <p class="text">不影响顶部和底部</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      show: true
    }
  },
  methods: {
    onConfirm () {

    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: $color-theme;
  font-size: 20px;
  line-height: 2;
  margin-top: 36px;
}
</style>
