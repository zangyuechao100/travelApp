<template>
  <div>
      <Header></Header>
      <Search></Search>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Search from './components/search.vue'
export default {
    name: 'City',
    components: {
        Header,
        Search
    },
    data () {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped lang="less">
</style>
