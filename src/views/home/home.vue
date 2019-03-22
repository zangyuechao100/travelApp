<template>
  <div>
      <Header :city="city"></Header>
      <HomeSwiper v-if="swiperList.length" :swiperList="swiperList"></HomeSwiper>
      <Icons :iconList="iconList" v-if="iconList.length"></Icons>
      <Recommend :recommendList="recommendList"></Recommend>
      <Weekend :weekendList="weekendList"></Weekend>
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
    data () {
        return {
            city: '杭州',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    mounted() {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json').then((res) => {
                console.log(res.data)
                res = res.data
                if (res.ret && res.data) {
                    this.city = res.data.city
                    this.swiperList = res.data.swiperList
                    this.iconList = res.data.iconList
                    this.recommendList = res.data.recommendList
                    this.weekendList = res.data.weekendList
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
</style>
