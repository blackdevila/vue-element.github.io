<template v-loading.body="loading" >
<el-tabs v-model="activeName1" type="card" >
         <el-tab-pane label="查询" name="first">
                 <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;" >

                       <li>
                            英文翻译: <el-input
                                placeholder="请输入英文单词"
                                icon="search"
                                v-model="input1"
                                :on-icon-click="handleIconClick1">
                              </el-input>
                       </li>   <br/>
                       <li  style="padding-left:20px;text-align:left;width:100%;" >
                         <ul v-show="state" v-loading.body="loading" style="text-align:left;">
                           <h3>  英文释义:</h3>
                            <li v-for="(v,k,i) in list.en_definitions" :key="i" style="display:block;" >
                              {{i+1}}.{{k}} <br/><span v-for="(m,n) in v" :key="n">
                                   {{i+1}}.{{n+1}}&nbsp;&nbsp;{{m}};<br/>
                              </span>
                          </li>
                          <h3> 中文释义:</h3>
                           <li> {{search.defn}}</li>
                         </ul>
                       </li>



                  </ul>

          </el-tab-pane>
          </el-tabs>
</template>

<script>
export default {
    data(){
      return {
        activeName1: 'first',
        list:[],
        input1:'',
        state:false,
        search:'',
        loading:false
      }
    },
    // computed: {   过滤器  自动补全
    // stationsListCom: function() {
    //   return this.stationsList.filter(item => { return item.sta_ename.indexOf(this.xxx) > -1 })
    // }
    //   ,
    methods:{
      handleIconClick1(ev){

        var  d=ev.target.nextSibling._value;
        if(d&&d.indexOf(" ")<0){

           this.state=true;
           this.translate(d);
        }

      },
      translate(k){
        this.loading=true;

      this.$http.get('http://localhost:4399/translate',{params:{word:k}})
         .then(res=>{
          // console.log("这是song",res.data.data.en_definitions.n)
          this.search=res.data.data.cn_definition;
          this.list=res.data.data;
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
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
  text-decoration: none;
}
em{
  font-style: inherit;
}

</style>
