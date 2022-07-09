<template>
  <Swiper>
      <SwiperItem v-for="(item,index) in bannersList" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
    props:['banners'],
    components:{
        Swiper,
        SwiperItem
    },
    computed:{
        bannersList(){
            return this.banners.list;
        }
    },
    created(){
        // console.log(this.banners.list);
    }
}
</script>

<style>

</style>