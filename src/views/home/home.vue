<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
  </div>
</template>

<script>
import Header from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import Icons from './components/icons.vue'
export default {
    name: 'Home',
    components: {
        Header,
        HomeSwiper,
        Icons
    }
}
</script>

<style scoped lang="less">
</style>
