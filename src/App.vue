<template>
  <div id="app">
    <headbar></headbar>
    <router-view/>
  </div>
</template>

<script>
  import headbar from "./components/header.vue";
  import {TweenMax, TimelineMax} from "gsap";
  export default {
    name: 'app',
    data(){
      return {
        info: '',
        tl: new TimelineMax({repeat: 0}),
        address: ''
      }
    },
    components:{
      headbar
    },
    created(){
      this.getData();
      this.axios.get('/api/location/ip?ak=EvNgLnICARv2ZIfrVnN6G9GR').then((res) => {
        //console.log(res.data)
        this.address = res.data.content.address
      })
    },
    watch: {
      '$route' () {
        this.getData();
      }
    },
    methods: {
      getData(){
        let uri = location.pathname
        let a = uri.split('/')[2]
        if (a == 'name') {
          this.info = 'this is name'
        } else if (a == 'good') {
          this.info = 'this is good'
        } else if (a == 'help') {
          this.info = 'this is help'
        }
      },
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
        this.tl.add(TweenMax.to("#box", 1, {rotationZ: 180}));
        this.tl.add(TweenMax.to("#box", 1, {rotationZ: 0}));
      },
      scale(){
        this.tl.add(TweenMax.to("#box", 1, {scale: 2,repeat: -1}));
      },
      opacity(){
        this.tl.add(TweenMax.to("#box", 1, {opacity: 0},1));
        this.tl.add(TweenMax.to("#box", 1, {opacity: 1},2));
      },
      skew(){
        this.tl.add(TweenMax.to("#box", 1, {skewX: 10, skewY: 8}));
        this.tl.add(TweenMax.to("#box", 1, {skewX: 0, skewY: 0}));
      },
      test(){
        TweenMax.to('.dv', 10, {
          autoAlpha: 0.8,//到达指定位置时的透明度
          x: 200,//横向位移（单位px）
          y: 100,
          scale: 0.8,//缩放 scaleX、scaleY
          rotation: 180,//旋转rotationX、rotationY、rotationZ
          skewX: 1.2,//横向倾斜
          skewY: 0.5,
          ease: Elastic.easeOut,//缓动
          delay: 2,//动画延迟（2s后开始动画）
          yoyo: true,//像YOYO球一样往返运动，必须和repeat一起使用
          repeat: -1,//重复，-1表示无限循环
          repeatDelay: 1,//每次动画重复间隔1s
          onStart: function(){console.log('start');},//动画开始前
          onUpdate: function(){console.log('update');},//动画过程中
          onComplete: function(){console.log('complete');},//动画完成时
          onRepeat: function(){console.log('repeat');},//动画重复时
        });
      }
    }
  }
</script>
<style>
  html, body {
    height: 100%;
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
</style>
