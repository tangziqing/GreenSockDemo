<template>
  <div class="header">
    <img src="../assets/greensock-logo.svg" width="400px">
    <div class="btn">
      <router-link to="move">移动动画</router-link>
      <router-link to="rotation">旋转动画</router-link>
      <router-link to="scale">缩放动画</router-link>
      <router-link to="opacity">透明度动画</router-link>
      <router-link to="skew">倾斜动画</router-link>
      <router-link to="time">时间轴动画</router-link>
      <router-link to="bezier">贝塞尔曲线</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data(){
      return {
        address: ''
      }
    },
    created(){
      this.axios.get('/api/location/ip?ak=EvNgLnICARv2ZIfrVnN6G9GR').then((res) => {
        //console.log(res.data)
        this.address = res.data.content.address
      })
    },
    methods: {}
  }
</script>
<style>
  .router-link-active {
    background: #0f88eb;
    color: #fff;
  }
  .header {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #0f88eb;
  }

  .btn {
    margin: 40px 0;
  }

  .btn a {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #0f88eb;
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
