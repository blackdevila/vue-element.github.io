<template>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" >
          <el-tab-pane label="正在热映" name="first" @click="changeitem(name)">
            <!-- <router-view ></router-view> -->
          </el-tab-pane>
          <el-tab-pane label="即将上映" name="second" @click="changeitem(name)">
               <!-- <router-view  ></router-view> -->
          </el-tab-pane>
          <el-tab-pane label="Top250" name="third" @click="changeitem(name)">
          <!-- <router-view  ></router-view> -->
          </el-tab-pane>
          <el-tab-pane label="口碑榜" name="forth" @click="changeitem(name)">
          <!-- <router-view  ></router-view> -->
          </el-tab-pane>
          <el-tab-pane label="北美票房榜" name="fifth" @click="changeitem(name)">
          <!-- <router-view  ></router-view> -->
          </el-tab-pane>
          <el-tab-pane label="新片榜" name="sixth" @click="changeitem(name)">
          <!-- <router-view></router-view> -->
          </el-tab-pane>
          <router-view v-loading.body="loading" text="信息搬运中,请稍后" ></router-view>
        </el-tabs>

</template>

<script>
export default {
    props:[],
    data(){
      return {
        activeName2: 'first',
        list:[],
        num:0,
        num1:0,
        // changepage:"",
        chooseitem:1,
        loading:true,
        state:0
      }
    },
   created(){
    //  也可以不创建总线  使用this.$root.$emit和this.$root.$on   watch computed 都是对象(针对属性)
       this.eventBus.$on("add",(k)=>{
            if(k){
               this.num1+=20;
            }

           switch(this.state){
          case  1 : this.movie1(this.num1);
          break;
           case 2 :this.movie2(this.num1);
          break;
           case  3 :this.movie3(this.num1);
          break;

          default :
          break
        }

               })
   },
    mounted(){
        this.movie1(this.num);
        this.$router.push("/list");
    },
    watch:{
       list:function(){
        console.log(123)
        this.eventBus.$emit("loading",this.list)
       }

    },
    methods:{
      changeitem(a){
        this.activeName2=a;

      },
      handleClick(tab,event){
        this.num1=0;
        switch(tab.name){
          case  "first" : this.movie1(this.num);
          break
           case "second" :this.movie2(this.num);
          break
           case  "third" :this.movie3(this.num);
          break;
           case  "forth" :this.movie4(this.num);
          break;
           case  "fitth" :this.movie5(this.num);
          break;
           case  "sixth" :this.movie6(this.num);
          break;
          default :
          break
        }
      },
      movie1(num){
        this.loading= true;
        this.$http.get('https://api.douban.com/v2/movie/in_theaters',{params:{count:20,start:num}})
        .then(res=>{


          this.list=res.data.subjects


          this.loading=false;
          this.state=1;
        })
        .catch(error=>{
          console.log(error)
        })

      },
       movie2(num){
      this.loading= true;
        this.$http.get('https://api.douban.com/v2/movie/coming_soon',{params:{count:20,start:num}})
        .then(res=>{
          this.list=res.data.subjects


          this.loading=false;
          this.state=2;
        })
        .catch(error=>{
          console.log(error)
        })

      },
       movie3(num){
       this.loading= true;
        this.$http.get('https://api.douban.com/v2/movie/top250',{params:{count:20,start:num}})
        .then(res=>{
          this.list=res.data.subjects


          this.loading=false;
          this.state=3;
        })
        .catch(error=>{
          console.log(error)
        })

      },
       movie4(){
         this.loading=true;
        this.$http.get('https://api.douban.com/v2/movie/weekly')
        .then(res=>{
          this.list=res.data.subjects
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
        })

      },
       movie5(){
         this.loading=true;
        this.$http.get('https://api.douban.com/v2/movie/us_box')
        .then(res=>{
          this.list=res.data.subjects
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
        })

      },
      movie6(){
        this.loading=true;
        this.$http.get('https://api.douban.com/v2/movie/new_movies')
        .then(res=>{
          this.list=res.data.subjects
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
        })

      },
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
