<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
      <Recommend></Recommend>
  </div>
</template>

<script>
import Header from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import Icons from './components/icons.vue'
import Recommend from './components/recommend.vue'
export default {
    name: 'Home',
    components: {
        Header,
        HomeSwiper,
        Icons,
        Recommend
    }
}
</script>

<style scoped lang="less">
</style>
