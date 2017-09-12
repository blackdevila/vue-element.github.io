<template>
      <el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
          <el-tab-pane label="列表" name="first">
             <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;width:100%;" v-loading.body="loading" text="信息搬运中,请稍后" >
               <hr />
            <li v-for="(t,i) in list" :key="i" style="list-style:none;display:inline-block;text-align:left;width:180px;margin-top:5px;" @click="changeitem(name)" >



                 <!-- 发布时间:{{ t.pic_big | picId }} -->
               <!-- <h3>{{t.pic_big}}</h3> -->
               <!-- <audio src="t.lrclink"></audio> -->
                 <!-- {{}} -->
                 <a href="##"  :id="t.artist_id">
                  <img :src="t.pic_small | picId" alt="图片丢了" style="display:block;height:150px;width:150px;margin-left:50px;" @mouseover="show=true" @mouseout="show=false">
                  <div v-show="show"  style="display:relative;margin-left:49px;margin-top:-151px;width:150px;height:150px;overflow:hidden;padding:0;border:1px solid black;background-color: white;" @mouseover="show=true" @mouseout="show=false" >
                  <p> {{t.title}}  </p>
                  <p> {{t.author}} </p>
                  <p> {{t.album_title}}</p>
                   <p>{{t.publishtime}}</p>
                   <p>{{t.ting_uid}}</p>
                  </div>
                 </a>

              </li>
          </ul>
          </el-tab-pane>
          <el-tab-pane label="查询" name="second">
                 <ul class="content-ul" style="cursor:pointer;overflow:auto;height:500px;" @click="changeitem(name)">
                     <!-- <div v-html="show" style="text-align:left;text-indent:32px;"> -->
                       <li>
                            搜索: <el-input
                                placeholder="请输入内容"
                                icon="search"
                                v-model="input1"
                                :on-icon-click="handleIconClick1">
                              </el-input>
                           <!-- 歌曲: <el-input
                                placeholder="请输入歌曲名"
                                icon="search"
                                v-model="input2"
                                :on-icon-click="handleIconClick2">
                              </el-input> -->
                       </li>

                      <router-view ></router-view>
                  </ul>

          </el-tab-pane>

        </el-tabs>

</template>

<script>
export default {
  data () {
    return {
      activeName1: 'first',
        list:[],
        songlist:[],
        loading:this.state,
        show:false,
        loading:true,
        input1:"",
        input2:"",
        name:'',
        num1:1,
        state:''
    }
  },
   created(){
    //  也可以不创建总线  使用this.$root.$emit和this.$root.$on   watch computed 都是对象(针对属性)
       this.eventBus.$on("add",(k)=>{
            if(k){
               this.num1+=1;
            }
          this.musicsinger(this.state,this.num1)

               })
   },
    filters: {

    picId: function (value) {
      //  var cc=value.indexOf("@")
      return  value.split("@")[0]

    }
  },
  watch:{
     songlist:function(){
        this.$root.$emit("singer",this.songlist)
        // this.$root.$emit
     },
     state:function(){
          this.num1=1;
     }
  },
 mounted(){
       this.music()
    },
  methods:{
    handleIconClick1(ev){
       console.log(ev.target.nextSibling._value);
       var d=ev.target.nextSibling._value;
       this.state=ev.target.nextSibling._value
       if(d){
       this.musicsinger(this.state,1)
       this.$router.push("/music")
       this.$router.push("/singerlist")
       }

    },
    handleIconClick2(ev){
       console.log(ev.target.nextSibling._value);
       this.state=ev.target.nextSibling._value
       this.song(this.state)
    },
     changeitem(a){
        this.activeName2=a;
      },
      handleClick(tab,event){
          // if(tab.name=="second"){
          //   this.musicsinger(this.state)
          // }
      },
     music(){
        this.loading=true;
        this.$http.get('http://localhost:4399/music',{params:{method:"baidu.ting.billboard.billList",type:1,size:20,offset:0}})
        .then(res=>{
          console.log(res.data.song_list[0].ting_uid)
          this.list=res.data.song_list
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
        })
   },
   musicsinger(a,b){
         this.loading=true;
         this.$http.get('http://localhost:4399/music',{params:{method:"baidu.ting.search.common",query:a,page_size:30,page_no:b,format:"json"}})
         .then(res=>{
          console.log("这是singer",res.data.song_list[15].title)
          this.songlist=res.data
          this.loading=false;
        })
        .catch(error=>{
          console.log(error)
        })
   },
   song(b){
         this.$http.get('http://localhost:4399/song',{params:{songIds:b}})
         .then(res=>{
          console.log("这是song",res.data)
          // this.list=res.data
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
h1, h2,h4, {
  padding: 0;
  margin: 0;
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
  color: #f60;
  text-decoration: none;
}
P{
  margin-top: 5px;
  width: 150px;
  line-height:20px;
  height: 20px;
  text-align: center;
  overflow: hidden;
  background-color: white;
}
</style>
