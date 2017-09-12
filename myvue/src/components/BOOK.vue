<template>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="标题" name="first">
             <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;width:100%;" v-loading.body="loading" text="信息搬运中,请稍后" >
            <li v-for="(t,i) in list" :key="i" style="list-style:none;display:block;" @click="changeshow(i)"  >
              <hr />
              <br />

                发布时间:{{t.publishedTime}}
               <h3>{{t.title}}</h3>

              </li>
          </ul>
          </el-tab-pane>
          <el-tab-pane label="内容" name="second">
                <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;" @click="rechange">
                     <div v-html="show" style="text-align:left;text-indent:32px;"></div>
                  </ul>
          </el-tab-pane>
        </el-tabs>
</template>

<script>
export default {
    props:["item","state"],
    data(){
      return {
        activeName2: 'first',
        list:[],
        loading:this.state,
        show:"",
        loading:true
      }
    },
    mounted(){
      this.getbook();
    },
    methods:{
        changeshow(i){
         this.show=this.list[i].content
         this.activeName2="second"
      },
      rechange(){
         this.activeName2="first"
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
       getbook(){
        // this.$router.push("/"+a)

        this.$http.get('http://localhost:4399/book',{params:{limit:60,offset:0}})
        // this.$http.get('http://localhost:4399/music',{params:{method:"baidu.ting.billboard.billList",type:1,size:10,offset:0}})
        .then(res=>{
          console.log("获取到",res)
          this.list=res.data
          this.loading=false;
          // this.eventBus.$emit('loadDatEnd',res.data)
          this.show=this.list[0].content
        })
        .catch(error=>{
          console.log("o(╥﹏╥)o信息跑丢了....")
        })
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
</style>
