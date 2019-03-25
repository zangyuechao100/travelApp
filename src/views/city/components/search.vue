<template>
  <div class="city-search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" />
  </div>
</template>

<script>
export default {
    name: 'Search',
    components: {
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
@import '~styles/varibles.less';
.city-search {
    height: 0.72rem;
    background: @bgColor;
    padding: 0 0.1rem;
    .search-input {
        height: 0.62rem;
        line-height: 0.62rem;
        width: 100%;
        text-align: center;
        color: #666;
        box-sizing: border-box;
        padding: 0 0.1rem;
        border-radius: 0.06rem;
    }
}
</style>
