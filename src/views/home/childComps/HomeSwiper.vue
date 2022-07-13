<template>
  <Swiper>
      <SwiperItem v-for="(item,index) in bannersList" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
    props:['banners'],
    data(){
      return {
        isLoad:false
      }
    },
    components:{
        Swiper,
        SwiperItem
    },
    computed:{
        bannersList(){
            return this.banners.list;
        }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
}
</script>

<style>

</style>