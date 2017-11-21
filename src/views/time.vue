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
        tl: new TimelineMax({repeat: -1, repeatDelay: 1})
      }
    },
    mounted(){
      this.tl.to("#box", 1, {opacity:0}, 0)
             .to("#box", 1, {opacity:0.5}, 1)
             .to("#box", 1, {opacity:1}, 2)
             .to("#box", 1, {scale:2}, 2)
             .to("#box", 1, {rotationZ:180}, 2)
             .to("#box", 1, {scale:1}, 3)
             .to("#box", 1, {rotationZ:0}, 3)
             .to("#box", 1, {scale:2}, 4)
             .to("#box", 1, {rotationZ:180}, 4)
             .to("#box", 1, {scale:1}, 5)
             .to("#box", 1, {rotationZ:0}, 5)


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
