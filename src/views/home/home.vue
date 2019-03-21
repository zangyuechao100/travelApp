<template>
  <div>
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
      <Recommend></Recommend>
      <Weekend></Weekend>
  </div>
</template>

<script>
import Header from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import Icons from './components/icons.vue'
import Recommend from './components/recommend.vue'
import Weekend from './components/weekend.vue'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        Header,
        HomeSwiper,
        Icons,
        Weekend,
        Recommend
    },
    mounted() {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json').then((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped lang="less">
</style>
