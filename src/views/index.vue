<template>
  <div>
    <div id="box">
      <div class="boxSmall"></div>
    </div>
    <div class="btn">
      <a @click="move">移动动画</a>
      <a @click="rotation">旋转动画</a>
      <a @click="scale">缩放动画</a>
      <a @click="opacity">透明度动画</a>
      <a @click="skew">倾斜动画</a>
      <a @click="restart">重新开始</a>
      <a @click="kill">重置</a>
    </div>
  </div>
</template>

<script>
  import {TweenMax, TimelineMax} from "gsap";
  export default {
    name: 'index',
    data(){
      return {
        info:'',
        tl:new TimelineMax({repeat:-1, repeatDelay:1})
      }
    },
    mounted(){
      this.move();
    },
    methods:{
      move(){
        this.tl.add(TweenMax.to("#box", 2, {left: 0, x: 0}));
        this.tl.add(TweenMax.to("#box", 1, {left: 100}));
        this.tl.add(TweenMax.to("#box", 1, {left: "+=200"}));
        this.tl.add(TweenMax.to("#box", 1, {left: 300}));
        this.tl.add(TweenMax.to("#box", 1, {left: 400}));
        this.tl.add(TweenMax.to("#box", 1, {left: 500}));
      },
      restart(){
        this.tl.restart()
      },
      kill(){
        this.tl.clear()
      },
      rotation(){
        this.tl.add(TweenMax.to("#box", 1, {rotationZ:180}));
        this.tl.add(TweenMax.to("#box", 1, {rotationZ:0}));
      },
      scale(){
        this.tl.add(TweenMax.to("#box", 1, {scale:2}));
        this.tl.add(TweenMax.to("#box", 1, {scale:1}));
      },
      opacity(){
        this.tl.add(TweenMax.to("#box", 1, {opacity:0}));
        this.tl.add(TweenMax.to("#box", 1, {opacity:0.5}));
        this.tl.add(TweenMax.to("#box", 1, {opacity:1}));
        this.tl.add(TweenMax.to("#box", 1, {opacity:0.5}));
        this.tl.add(TweenMax.to("#box", 1, {opacity:1}));
      },
      skew(){
        this.tl.add(TweenMax.to("#box", 1, {skewX: 10, skewY: 8}));
        this.tl.add(TweenMax.to("#box", 1, {skewX: 0, skewY: 0}));
      },
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
  }
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
  .btn {
    margin: 40px 0;
  }
  .btn a{
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border:1px solid #0f88eb;
    cursor: pointer;
    border-radius: 4px;
  }

  .btn a:hover {
    background: #0f88eb;
    color: #fff;
  }

  .boxSmall {
  }
</style>
