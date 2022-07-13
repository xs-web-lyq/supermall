<template>
  <div id="home">
    <NavBar class="navbar"><div slot="center">购物车</div></NavBar>
     <TabControl :tabList="['流行','精选','新款']" 
                  @tabClick="tabClick" 
                  ref="tabControl1"
                  :class="{isFixed:isTabFixed}"
                  v-show="isTabFixed"
                  >
      </TabControl>
    <Scroll class="wrapper" 
            ref="scroll" 
            @scroll="scrollWrapper" 
            :pr-type="3" 
            :pull-up-load="true" @pullUpLoad="loadMore">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <Suggest :recommends="recommends"></Suggest>
      <FeatureView></FeatureView>
      <TabControl :tabList="['流行','精选','新款']" 
                  @tabClick="tabClick" 
                  ref="tabControl2"
                  >
      </TabControl>
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
import { debounce } from 'common/utils.js'


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
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
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
      const refresh = debounce(this.$refs.scroll.refresh,30)
      this.$bus.$on('imgLoad',()=>{
        refresh()
      })
     
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;

        // console.log(this.$refs.tabControl1);
        // console.log(this.$refs.tabControl2);

      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      scrollWrapper(position){
        this.isShow = (-position.y) > 1000;

        // 首页分类吸顶效果
        this.isTabFixed = (-position.y) >= this.tabOffsetTop;
      },
      loadMore(){
        this.getHomeData(this.currentType)
      },
      // 检测轮播图图片加载是否完成，如果完成再获取tabControl组件的到顶的高度
      swiperImageLoad(){
         // 获取offsetTop
         
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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

        // 加载完成之后，调用上拉加载更多已完成，可以进行下一次上拉加载
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

  }
 .wrapper {
  position:absolute;
  top:44px;
  bottom: 49px;
  left:0;
  right:0;
  overflow: hidden;
 }
 .isFixed {
  position:fixed;
  top:43px;
  left:0;
  right:0
 }
</style>
