<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot>

        </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
        prType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.prType,
            pullUpLoad:this.pullUpLoad,
        })
        if(this.prType == 2 || this.prType == 3){
            this.scroll.on('scroll',(position)=>{
                // console.log(position);
                this.$emit('scroll',position)
            })
        }
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullUpLoad')
            }) 
        }

    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time);
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }    
    }   
}
</script>

<style>

</style>