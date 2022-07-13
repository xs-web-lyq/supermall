<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoaded">
    <div class="goods-info">
        <div>{{item.title}}</div>
        <span class="price">￥{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
    </div>
   
  </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    methods:{
      imgLoaded(){
        this.$bus.$emit('imgLoad')
      },
      itemClick(){
        this.$router.push('/detail/' + this.item.iid)
      }
    },
    computed:{
      showImage(){
        return this.item.show.img ||this.item.image
      }
    }
}
</script>

<style>
.goods-item {
    position: relative;
    padding-bottom:40px;
    width:47%;

}
.goods-item img {
    width:100%;
    height:100%;
    border-radius:5px;
}
.goods-info {
    font-size: 12px;
    position:absolute;
    bottom:5px;
    left:0;
    right:0;
    overflow: hidden;
    text-align: center;
}
.goods-info div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>