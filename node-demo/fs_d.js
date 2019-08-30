// console.log("aaa")

const fs = require('fs');

fs.readFile('./static/employee.json',(err,data)=>{
    if(err){
        console.log('文件读取失败',err)
    }else{
        console.log('文件读取成功',data.toString())
    }
})

