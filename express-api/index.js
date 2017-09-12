var express = require('express')
var app = express()
var axios = require('axios')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/book',(req,res)=>{
    axios.get('http://zhuanlan.zhihu.com/api/columns/zhihuadmin/posts',{params:req.query})
        .then(output=>{
            res.json(output.data)
        })
})
app.get('/music',(req,res)=>{

    axios.get('http://tingapi.ting.baidu.com/v1/restserver/ting',{params:req.query})
        .then(output=>{
            res.json(output.data)
        })
})
app.get('/movie',(req,res)=>{
    axios.get('https://api.douban.com/v2/movie/in_theaters',{params:req.query})
        .then(output=>{
            res.json(output.data)
        })
        .catch(err=>{
            console.log(err)
        })
})
app.get('/song',(req,res)=>{
    axios.get('https://api.shanbay.com/bdc/search/',{params:req.query})
        .then(output=>{
            res.json(output.data)
        })
        .catch(err=>{
            console.log(err)
        })
})
app.get('/translate',(req,res)=>{
    axios.get('https://api.shanbay.com/bdc/search/',{params:req.query})
        .then(output=>{
            res.json(output.data)
        })
        .catch(err=>{
            console.log(err)
        })
})

app.listen(4399)