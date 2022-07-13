<template>
    <div id="detail">
        <DetailTabBar class="detail-tab-bar"></DetailTabBar>
        <Scroll class="scroll" ref="scroll">
            <DetailSwiper :topImages="topImages"></DetailSwiper>
            <DetailBaseInfo :goodsInfo="goodsInfo"></DetailBaseInfo>
            <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
            <DetailGoodInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodInfo>
            <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
            <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
            <DetailRecommend :recommends="recommends"></DetailRecommend>
        </Scroll>
    </div>
</template>

<script>
import DetailTabBar from './detailComps/DetailTabBar.vue'
import DetailSwiper from './detailComps/DetailSwiper.vue'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo.vue'
import DetailGoodInfo from './detailComps/DetailGoodInfo'
import DetailParamInfo from './detailComps/DetailParamInfo'
import DetailCommentInfo from './detailComps/DetailCommentInfo'
import DetailRecommend from './detailComps/DetailRecommend.vue'


import Scroll from 'components/common/scroll/Scroll.vue'



import { getDetails,getRecommend, GoodsInfo, ShopInfo, GoodsParam } from 'network/detail.js'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goodsInfo: {},
            shopInfo: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends:[]
        }
    },
    components: {
        DetailTabBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailRecommend,
        DetailGoodInfo,
        DetailParamInfo,
        DetailCommentInfo,
        Scroll,
    },
    created() {
        this.iid = this.$route.params.iid
        getDetails(this.iid).then(res => {
            const data = res.result;
            console.log(data);
            // 轮播图数据
            this.topImages = data.itemInfo.topImages
            // 描述数据
            this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
            // 商家详情信息
            this.shopInfo = new ShopInfo(data.shopInfo);
            // 获取商品详情
            this.detailInfo = data.detailInfo;
            // 产品介绍
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
              // 7.获取评论信息
            if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0];
            }
        })
        getRecommend().then(res => {
            this.recommends = res.data.list;
        })

    },
    methods:{
        imageLoad(){
            
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
#detail {
    position: relative;
    z-index:9;
    background:#f2f5f8;
    height:100vh;
}
.detail-tab-bar {
    position:relative;
      background:#f2f5f8;
        z-index: 9;
}
.scroll{
    height:calc(100% - 44px)
}
</style>