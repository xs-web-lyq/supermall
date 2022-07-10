<template>
  <div id="home">
    <NavBar class="navbar"><div slot="center">购物车</div></NavBar>
    <Scroll class="wrapper" 
            ref="scroll" 
            @scroll="scrollWrapper" 
            :pr-type="3" 
            :pull-up-load="true" @pullUpLoad="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <Suggest :recommends="recommends"></Suggest>
      <FeatureView></FeatureView>
      <TabControl :tabList="['流行','精选','新款']" @tabClick="tabClick"></TabControl>
      <GoodsList :goodsList="showList"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/context/tabControl/TabControl.vue'


import HomeSwiper from './childComps/HomeSwiper'
import Suggest from './childComps/Suggest.vue'
import FeatureView from './childComps/FeatureView.vue'
import GoodsList from '@/components/context/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from '@/components/context/backTop/BackTop'


import {getHomeMultidata,getHomeData} from 'network/home.js'


export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShow:false,
      }
    },
    components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Suggest,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    },
    created(){
      this.getHomeMultidata()
      this.getHomeData('pop')
      this.getHomeData('sell')
      this.getHomeData('new')

     
    },
    mounted(){
      // 监听图片加载
      this.$bus.$on('imgLoad',()=>{
        this.$refs.scroll.refresh()
      })
    },
    computed:{
      showList(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /**
       * 业务相关
       */
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0 :
            this.currentType = 'pop'
            break
          case 1 :
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = 'sell'
            break
        }
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      scrollWrapper(position){
        this.isShow = (-position.y) > 1000
      },
      loadMore(){
        this.getHomeData(this.currentType)
      },

      /**
       * 网络请求相关
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommends = res.data.recommend
      })
      },
      getHomeData(type){
        const page = this.goods[type].page + 1;
        getHomeData(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
      }
    }
}
</script>

<style scoped>
  #home { 
    /* padding-top:44px; */
    height:100vh;
    position: relative;
   }
  .navbar {
    background: pink;
    color:white;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 9;
  }
 .wrapper {
  position:absolute;
  top:44px;
  bottom: 49px;
  left:0;
  right:0;
  overflow: hidden;
 }
</style>
