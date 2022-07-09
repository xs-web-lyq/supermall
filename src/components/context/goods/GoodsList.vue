<template>
  <div class="goods-list">
    <GoodsListItem v-for="(item,index) in goodsList" :key="index" :item="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    name: "GoodsList",
    props: {
        goodsList: {
            type: Array,
            default: {}
        }
    },
    components: { GoodsListItem }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px 1%;
}
</style>