<template>
  <div>
      <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
      <DeatilHeader></DeatilHeader>
      <div class="content">
        <DeatilList :list="list"></DeatilList>
      </div>
  </div>
</template>

<script>
import Banner from './components/banner.vue'
import DeatilHeader from './components/header.vue'
import DeatilList from './components/list.vue'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        Banner,
        DeatilHeader,
        DeatilList
    },
    data () {
        return {
            list: [],
            sightName: '',
            bannerImg: '',
            gallaryImgs: []
        }
    },
    mounted() {
        this.getDetailInfo()
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then((res) => {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            })
        }
    },
    activated() {
        this.getDetailInfo()   
    }
}
</script>

<style scoped lang="less">
.content {
    height: 20rem;
}
</style>
