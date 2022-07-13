<template>
  <GoodsList :goods="recommends"></GoodsList>
</template>

<script>
import GoodsList from 'components/context/goods/GoodsList';
export default {
    name:'DetailRecommend',
    components:{
        GoodsList
    },
    props:{
        recommends:Array,
        default(){
            return []
        }
    }
}
</script>

<style>

</style>