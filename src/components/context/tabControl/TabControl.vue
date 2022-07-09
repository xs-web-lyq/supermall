<template>
  <div class="tabControl">
        <div 
            v-for="(item,index) in tabList" 
            :key="index"
            @click="itemClick(index)"
        >
            <span :class="{active: current == index}">{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:["tabList"],
    data(){
        return {
            current:0,
        }
    },
    methods:{
        itemClick(index){
            this.current = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tabControl {
        display: flex;
        height:44px;
        line-height:44px;
        text-align: center;
        background: #fff;
        z-index: 9;
        position:sticky;
        top:44px;
        
    }
    .tabControl div {
        flex: 1;
    }
    .tabControl div span {
        padding: 5px 3px;
        
    }
    .active {
        border-bottom: 3px solid pink;
        color:pink;
    }   
</style>