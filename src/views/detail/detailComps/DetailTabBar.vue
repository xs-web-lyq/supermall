<template>
  <div>
    <NavBar>
        <div slot="left" class="left" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index" class="titleItem" @click="itemClick(index)" :class="{active:currentIndex == index}">
                    {{item}}
                </div>
        </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:'Detail',
    data(){
        return {
            iid:null,
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },

    methods: {
        itemClick(index){
            this.currentIndex = index
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title {
        display: flex;
    }
    .titleItem {
        flex:1;
    }
    .left {
        margin-top:8px
    }
    .active {
        color:pink
    }
</style>