const http = require('http');
const fs=require('fs');
const template=require('art-template');

const server= http.createServer()

// 'request' 事件,每次有请求时都会触发。
server.on('request',(req,res)=>{
    try{
    const url=req.url;
    console.log('收到用户请求：'+url)
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    if(url==='/'){
        res.end('欢迎进入首页') 
    }
    else if(url==='/login'){
        res.end('欢迎进入登录页面')
    }
    else if(url==='/data'){
        // 注意读取文件的路径，是相对于在命令行中执行node的路径
        fs.readFile('./static/data.json',function(error,data){
            if(error){
                res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                res.end('数据获取失败：'+error.toString())
            }else{
                res.end(data.toString())
            }
        })
        
    }else if(url==='/content'){
        fs.readFile('./static/data.json',function(error,data1){
            if(error){
                res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                res.end('数据获取失败：'+error.toString())
            }else{
                data1=JSON.parse(data1.toString())
                data1.title='content_page'
                console.log('data1: ',data1)
                fs.readFile('./static/tpl.html',function(error,data2){
                    if(error){
                        res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                        res.end('数据获取失败：'+error.toString())
                    }else{
                        // 'Content-Type':'text/html' 否则浏览器不会渲染html标签
                        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                       const result= template.render(data2.toString(),data1)
                        res.end(result)
                    }
                })
               
            }
        })
    }if(url==='/content2'){
        fs.readFile('./static/data.json',function(error,data1){
            if(error){
                res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                res.end('数据获取失败：'+error.toString())
            }else{
                data1=JSON.parse(data1.toString())
                data1.title='content_page'
                console.log('data1: ',data1)
                fs.readFile('./static/tpl.html',function(error,data2){
                    if(error){
                        res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                        res.end('数据获取失败：'+error.toString())
                    }else{
                        // 'Content-Type':'text/html' 否则浏览器不会渲染html标签
                        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                       const result= template.render(data2.toString(),data1)
                        res.end(result)
                    }
                })
               
            }
        })
    }else {
    res.end('{ hello : world,你好 : 世界}')
    }
}catch(e){
    console.log('服务器抛出异常',e)
    res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
    res.end(e.toString())
}
    });
    

server.listen(3000,function(){
    console.log('服务启动成功')
})
