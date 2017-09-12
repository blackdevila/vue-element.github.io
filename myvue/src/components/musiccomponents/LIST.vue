<template v-loading.body="loading" >
                                                                                                        <!--v-on:load="click(a)"只能用于父子组件中-->
             <ul class="content-ul" style="cursor:pointer;overflow:hidden;height:auto;width:100%;text-align:left;z-index:-200"  >
               <button  style="width:50px;height:170px;font-size:30px;position:absolute;top:150px;right:30px;text-align:center;background-color:#42b983"  @click="add()">加载更多</button>
<!-- <h1>这是list</h1> -->
                <h2  v-show="show" style="margin-left:100px;">搜索内容: {{ "【"+list.query+"】"}}  总条目数: 30</h2>
            <li v-for="(t,i) in list.song_list" :key="i" style="list-style:none;display:block;margin-left:90px;width:100%;"  id="t.id"  >
              <hr />
              <a href="###">
                   <p >&lt;&lt;<span v-html="t.title"></span>&gt;&gt; </p>
                   <!--里面有em 标签 i 标签  通过此方法进行隐藏  -->
                      <!-- <p>{{'<<'+ t.title+'>>'}}  <br /></p>
                      <span>{{'<<'+ t.title+'>>'}}</span>  <br /> -->
                     出自专辑: <span v-html="t.album_title"></span>

              </a>

              </li>
          </ul>

</template>

<script>
export default {
    data(){
      return {
        activeName2: 'first',
        list:[],
        num:false,
        show:"",
        state:false,
        search:false,
        loading:false
      }
    },
    filters:{
        delt(value){
          // return  value.replace
        }
    },
   created(){
     this.loading=false;
       this.show=true;
       this.$root.$on("singer",(k)=>{
            this.list=k;
              console.log("收到数据",this.list)
               })
   },

    methods:{
      pic(){
         console.log("图片没了")
      },
      add(){
            this.loading=true;
            this.num=!this.num;
            this.eventBus.$emit("add",this.num);

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
