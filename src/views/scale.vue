<template>
  <div class="demo">
    <div id="box">
      <div class="boxSmall"></div>
    </div>
  </div>
</template>
<script>
  import {TweenMax, TimelineMax} from "gsap";
  export default {
    name: 'bezier',
    data(){
      return {
        tl:new TimelineMax({repeat:-1, repeatDelay:1})
      }
    },
    mounted(){
      this.tl.add(TweenMax.to("#box", 1, {scale:2}));
      this.tl.add(TweenMax.to("#box", 1, {scale:1}));
    },
  }
</script>
<style>
  #box {
    background-color: #88ce02;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
</style>
