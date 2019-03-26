<template>
  <div>
      <Header></Header>
      <Search></Search>
      <List :cities="cities" :hotCities="hotCities"></List>
      <Letters :cities="cities"></Letters>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header.vue'
import Search from './components/search.vue'
import List from './components/list.vue'
import Letters from './components/letters.vue'
export default {
    name: 'City',
    components: {
        Header,
        Search,
        List,
        Letters
    },
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    mounted() {
        this.getCityInfo()
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then((res) => {
                const data = res.data
                if (data.ret && data.data) {
                    this.cities = data.data.cities
                    this.hotCities = data.data.hotCities
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
</style>
