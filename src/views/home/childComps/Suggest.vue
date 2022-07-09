<template>
  <div class="suggest">
    <div class="suggest-item" v-for="(item,index) in recommends.list" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'Suggest',
    props: ['recommends']
}
</script>

<style>
.suggest {
    display: flex;
    text-align: center;
    font-size:12px;
    padding:10px 0 20px;
    border-bottom: 10px solid rgba(100,100,100,.2);
}
.suggest-item {
    flex:1
}
.suggest-item img {
    width:65px;
    /* display: inline-block; */
    padding-bottom: 10px;
}
</style>