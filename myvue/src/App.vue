<template>
  <div id="app">
    <header>我的世界</header>
    <el-row >
      <el-col :span="6" >
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="light"  @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>娱乐天地</template>
          <el-menu-item index="1-1"  @click="getpage('book')">知乎</el-menu-item>
          <el-menu-item index="1-2"  @click="getpage('movie')">电影</el-menu-item>
          <el-menu-item index="1-3"  @click="getpage('music')">音乐</el-menu-item>
          <el-menu-item index="1-4"  @click="getpage('event')">图片</el-menu-item>
        </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>学习空间</template>
          <el-menu-item index="2-1" @click="getpage('translate')">翻译</el-menu-item>
          <el-menu-item index="2-2" @click="getpage('kindeditor')">日记</el-menu-item>
          <el-menu-item index="2-3" @click="getpage('album')">相册</el-menu-item>
          <el-menu-item index="2-3" @click="getpage('test')">测试</el-menu-item>
        </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>互动社区</template>
          <el-menu-item index="3-1" @click="getpage('player')">播放</el-menu-item>
          <el-menu-item index="3-2" @click="getpage('discussion')">论坛</el-menu-item>
          <el-menu-item index="3-3" @click="getpage('target')">回复</el-menu-item>
          <el-menu-item index="3-4" @click="getpage('travel')">我去</el-menu-item>
        </el-submenu>
    </el-menu>
      </el-col>
      <el-col :span="18">


          <router-view  ></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
// import "axios" from "axios"

export default {
     data() {
      return {
        activeName2: 'first',
        goods:[],
        show:"",
        chooseitem:""
        // loading:false
      };
    },
   created(){
      this.$router.push("/")

   },

    methods: {
      load(a){
       console.log(a.split(0,1))
       console.log(a.split(2))
      },
       handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleOpen(key, keyPath) {
        // console.log("开")
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log("关")
        // console.log(key, keyPath);
      },
      getpage(a){
        this.$router.push("/"+a)
      }
    }
}
</script>

<style>
header{
width: 100%;
height: 60px;
line-height: 60px;
font-size: 30px;
color: white;
text-align: center;
background-color: #06f;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
 .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* border-radius: 4px; */
    min-height: 36px;
  }
/* .el-menu-item{
  padding-left: 20px;
} */
.content-ui{
  text-align: left;
  text-indent: 2;

  height: 300px;
  overflow: scroll;
  padding-right: 10px;
}
.content-ui li{
  list-style: none;
}
</style>
