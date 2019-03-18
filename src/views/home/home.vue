<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <div>dest</div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
export default {
    name: 'Home',
    components: {
        Header,
        HomeSwiper
    }
}
</script>

<style scoped lang="less">
</style>
