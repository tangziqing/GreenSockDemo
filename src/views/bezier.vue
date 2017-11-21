<template>
  <div class="demo">
    <div id="frcurv">
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
      <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"><circle cx=50 cy=50 r="14"/></svg>
    </div>
  </div>
</template>
<script>
  import {TweenMax, TimelineMax,Power1} from "gsap";
  export default {
    name: 'bezier',
    data(){
      return {}
    },
    mounted(){
      var fctl = new TimelineMax({
        repeat: -1,
        yoyo: true
      });

      var fcbezier_path = [{ x: 0, y: 0 }, { x: 0, y: 32 }, { x: 32, y: 32 }, { x: 32, y: 0 }, { x: 0, y: 0 }];

      fctl.staggerTo("#frcurv > svg", 0.9222, { bezier: {
        type: 'thru',
        values: fcbezier_path,
        curviness: 12
      }, ease: Power1.easeInOut }, 0.0222);
    },
  }
</script>
<style>
  svg {
    max-width: 100%;
  }
  .demo {
    display:flex;align-items:center;justify-content:center;height: 200px;
  }

  #frcurv {
    width: 30px;
    height: 30px;
  }

  #frcurv svg {
    height: 30px;
    position: absolute;
    width: 30px;
  }

  #frcurv svg circle {
    fill: #86CC01;
  }
</style>
