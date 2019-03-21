<template>
  <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
          <li v-for="item in recommend" :key="item.id" class="item border-bottom">
              <img :src="item.url" class="item-img" alt="">
              <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Recommend',
    data () {
        return {
            recommend: [
                {
                    id: '01',
                    title: '西溪国家湿地公园·周家村',
                    url: 'http://img1.qunarzz.com/sight/p0/1603/9a/9a44ea713b93140d90.water.jpg_200x200_dcf0f049.jpg',
                    desc: '浙江省杭州市西湖区天目山路518号'
                },
                {
                    id: '02',
                    title: '杭州乐园',
                    url: 'http://img1.qunarzz.com/sight/p0/201406/24/e2a5766e6e81793b2b518a7a08812a4a.jpg_200x200_66ce1370.jpg',
                    desc: '浙江省杭州市萧山区风情大道2555号'
                },
                {
                    id: '03',
                    title: '临安湍口众安氡温泉',
                    url: 'http://img1.qunarzz.com/sight/p0/201408/14/bc6bb9a732c8832cc302641c8527a040.jpg_200x200_c5a8cf6f.jpg',
                    desc: '浙江省杭州临安市湍口镇湍泉街188号'
                },
                {
                    id: '04',
                    title: '浙西大峡谷',
                    url: 'http://img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_200x200_75b6f391.jpg',
                    desc: '浙江省杭州市淳安县千岛湖镇淡竹王子山森林氧吧景区'
                },
                {
                    id: '05',
                    title: '杭州云曼温泉',
                    url: 'http://img1.qunarzz.com/sight/p0/1603/ef/ef59eec58fbf55d90.water.jpg_200x200_4733b471.jpg',
                    desc: '浙江省杭州市临安市西北部清凉峰国家级自然保护区内'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
@import '~styles/mixins';
.recommend-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}
.item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }
    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
        }
        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            .ellipsis()
        }
        .item-button {
            background: #ff9300;
            padding: 0 0.16rem;
            border-radius: 0.06rem;
            margin-top: 0.2rem;
            color: #fff;
            line-height: 0.44rem;
        }
    }
}
</style>
