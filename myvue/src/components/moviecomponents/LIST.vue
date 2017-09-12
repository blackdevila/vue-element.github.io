<template>
                                                                                                        <!--v-on:load="click(a)"只能用于父子组件中-->
             <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;width:100%;text-align:left;"  >
               <button  style="width:50px;height:170px;font-size:30px;position:absolute;top:150px;right:30px;text-align:center;background-color:#06f"  @click="add(1)">加载更多</button>
<!-- <h1>这是list</h1> -->
            <li v-for="(t,i) in list" :key="i" style="list-style:none;display:block;margin-left:90px;"  id="t.id"  >
              <hr />
              <br />

                  <a href="t.alt" type="t.subtype" style="text-decoration:none;" >
<!--       左  -->
                    <img :src="t.images.large" alt="头像跑丢了" style="display:inline-block;vertical-align: top;margin-right:20px" >
<!--       右  -->
                    <div style="display:inline-block;">
                    <h3>{{"<< "+t.title+" >>" }} </h3><br />
                    类型:<span v-for="(a,b) in t.genres" :key="b">{{a}} </span> <span>   </span>上映日期:{{t.year}} <br />
                    评分: {{t.rating.average}} /{{t.rating.max}} <span>   </span>星级:{{t.rating.stars}}

                      <ul style="text-align:left;">
                         演员:<li v-for=" (j,k) in t.casts" :key="k">
                            <a :href="j.alt" :id="j.id"  style="display:block;margin-bottom:10px;text-decoration:none;"> {{j.name}}  </a>
                              <img :src="j.avatars?j.avatars.small:'https://img3.doubanio.com/img/celebrity/small/543.jpg'"  style="display:block" alt="图片丢了..">
                         </li>
                          </br>
                          导演:<li v-for=" (m,n) in t.directors" :key="n" style="margin-top:20px">
                            <a :href="m.alt" :id="m.id"  style="display:block;margin-bottom:10px;text-decoration:none;"> {{m.name}}  </a>
                                <img :src="m.avatars?m.avatars.small:'https://img3.doubanio.com/img/celebrity/small/543.jpg'" @error="pic" style="display:block" alt="图片丢了..">
                         </li>
                      </ul>
                      </div>
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
        chooseitem:1,
        loading:false,
        state:false
      }
    },
   created(){
       this.eventBus.$on("loading",(k)=>{
            this.list=k;

               })
   },

    methods:{
      pic(){
         console.log("图片没了")
      },
      add(){
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
}
</style>
