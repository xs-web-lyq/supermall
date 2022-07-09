<template>
  <div id="home">
    <NavBar class="navbar"><div slot="center">购物车</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Suggest :recommends="recommends"></Suggest>
    <FeatureView></FeatureView>
    <TabControl :tabList="['流行','精选','新款']" @tabClick="tabClick"></TabControl>
    <GoodsList :goodsList="showList"></GoodsList>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
         <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
         <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
         <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
         <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/context/tabControl/TabControl.vue'


import HomeSwiper from './childComps/HomeSwiper'
import Suggest from './childComps/Suggest.vue'
import FeatureView from './childComps/FeatureView.vue'
import GoodsList from '@/components/context/goods/GoodsList'


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
        currentType:'pop'
      }
    },
    components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Suggest,
    FeatureView,
    TabControl,
    GoodsList
    },
    created(){
      this.getHomeMultidata()
      this.getHomeData('pop')
      this.getHomeData('sell')
      this.getHomeData('new')
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
      })
      }
    }
}
</script>

<style>
  #home { 
    padding-top:44px;
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
 
</style>
