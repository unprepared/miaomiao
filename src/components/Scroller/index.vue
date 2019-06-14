<template>
    <div class = "wrapper" ref = "wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name : "Scroller",
    props : {
        handleToScroll:{
            type: Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type: Function,
            default:function(){}
        }
        
    },
    mounted(){
        var bScroll = new BScroll(this.$refs.wrapper,{
            tap : true,
            probeType : 1
        });
        this.bScroll = bScroll;
        bScroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        })
        bScroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        })
    },
    methods:{
        toScrollTop(y){
            this.bScroll.scrollTo(0,y);
        }
    }
}
</script>

<style scoped>
    .wrapper{height: 100%;}
</style>
