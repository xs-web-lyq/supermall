<template>
  <div class="base-info"  v-if="Object.keys(goodsInfo).length !== 0" >
    <div class="info-title">
        {{goodsInfo.title}}
    </div>
    <div class="info-price">
        <span class="n-price">{{goodsInfo.newPrice}}</span>
        <span class="o-price">{{goodsInfo.oldPrice}}</span>
        <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
        <span>{{goodsInfo.columns[0]}}</span>
        <span>{{goodsInfo.columns[1]}}</span>
        <span>{{goodsInfo.services[servicesLength-1].name}}</span>
    </div>

    <div class="info-service-item">
        <span v-for="index in servicesLength-1" :key="index">
            <img :src="goodsInfo.services[index-1].icon" alt="">
            <span>{{goodsInfo.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>

export default {
    name:'DetailBaseInfo',
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        servicesLength(){
            return this.goodsInfo.services.length
        }
    }
}
</script>

<style scoped>
    .base-info {
        margin-top:15px;
        padding:0 8px;
        color:#999;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-title {
        color:#222;
    }
    .info-price {
        margin-top:15px;
    }
    .info-price .n-price {
        font-size:24px;
        color:red
    }
    .info-price .o-price {
        font-size: 13px;
        margin-left:5px;
        text-decoration: line-through;
    }
    .info-price .discount {
        font-size: 12px;
        padding:2px 5px;
        color:#fff;
        background: red;
        border-radius: 8px;
        margin-left: 5px;
         /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
    }
    .info-other {
        margin-top:15px;
        line-height:30px;
        display: flex;
        font-size:13px;
        border-bottom:1px solid rgba(100,100,100,.1);
        justify-content:space-between
    }
    .info-service-item {
        display: flex;
        justify-content: space-between;
    }
    .info-service-item img {
        width:14px;
        height:14px;
        position:relative;
        top:2px;
    }
    .info-service-item span {
        font-size:13px;
        color:#333
    }
</style>