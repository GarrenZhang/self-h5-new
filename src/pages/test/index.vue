<template>
  <van-circle
    v-model="currentRate"
    :rate="30"
    :speed="100"
    :text="text"
  />
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      currentRate: 0
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>
