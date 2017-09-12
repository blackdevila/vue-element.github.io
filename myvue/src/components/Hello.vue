<template>
  <div class="hello">
        <template>
         <h1>欢迎来到我的世界</h1>
         <h2>Welcome to my world!</h2>
          <dl>
            <dt>娱乐空间</dt>
            <dd>知乎 -- 完成</dd>
            <dd>电影 -- 完成</dd>
            <dd>音乐 -- 完成</dd>
            <dd>图片 -- 未完成</dd>
            <dt>学习天地</dt>
            <dd>翻译 -- 完成</dd>
            <dd>日记 -- 完成</dd>
            <dd>相册 -- 未完成</dd>
            <dd>测试 -- 未完成</dd>
            <dt>互动社区</dt>
            <dd>播放 -- 完成</dd>
            <dd>论坛 -- 未完成</dd>
            <dd>回复 -- 未完成</dd>
            <dd>我去 -- 未完成</dd>
          </dl>
         </template>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
dl{
  width: 200px;
  margin: 10px auto;
}
dd,dt{
  text-align: left;
}
</style>
