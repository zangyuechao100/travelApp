<template>
<div>
    <div class="city-search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input" />
    </div>
    <div v-show="this.keyword" class="search-content" ref="wrapper">
        <ul>
            <li @click="handleCityClick(item.name)" class="search-item border-bottom" v-for="(item,index) in list" :key="index">{{item.name}}</li>
            <li v-show="!list.length" class="search-item border-bottom">没有找到匹配数据</li>
        </ul>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'Search',
    components: {
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null,
            scroll: ''
        }
    },
    props: ['cities'],
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100);
        }
    },
    methods: {
        ...mapActions({
            'changeCity': 'changeCity'
        }),
        handleCityClick (name) {
            this.changeCity(name)
            this.$router.push('/')
        }
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
.search-content {
    top: 1.58rem;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    position: absolute;
    background: #eee;
    .search-item {
        line-height: 0.62rem;
        padding-left: 0.2rem;
        color: #666;
        background: #fff;
    }
}
</style>
