<template>
  <div id="hello" style="background-color:black;width:100%;">
    <!-- <h1>富文本编辑器</h1> -->
    <editor id="editor_id" height="620px" width="100%"  :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>

  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      editorText: '今天星期六,不好意思,打扰老师了',
      themeType:"simple"
    }
  },
  created () {
  },
  methods: {
    onContentChange (val) {
      this.editorText = val
    },
    onContentChange2 (val) {
      this.editorText2 = val
    },
    afterChange () {
    }
  }
}
</script>

<style>
#hello {
  float: left;
}
</style>
