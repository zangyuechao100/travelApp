<template>
  <div>
      <Banner></Banner>
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
export default {
    name: 'Detail',
    components: {
        Banner,
        DeatilHeader,
        DeatilList
    },
    data () {
        return {
            list: [
                {
                    title: '成人票',
                    children: [{
                        title: '成人三馆联票',
                        children: [{
                            title: '成人三馆联票-连锁店'
                        }]
                    }]
                },
                {
                    title: '学生票'
                },
                {
                    title: '儿童票'
                },
                {
                    title: '特惠票'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.content {
    height: 20rem;
}
</style>
