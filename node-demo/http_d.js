const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {

    if (req.url == "/employee") {
        fs.readFile("./static/employee.json", (err, data) => {
            if (err) {
                console.log('文件读取失败', err)
                res.end('文件读取失败' + err)
            } else {
                res.setHeader('Content-Type', 'application/json;charset=utf-8')
                console.log('文件读取成功', data.toString())
                res.end(data.toString())
            }
        })
    } else if (req.url.startsWith('/url')) { 
        const url_r=url.parse(req.url);
        console.log("url_r",url_r)
        //JSON.stringify(url_r)
        res.end(url_r.query.name)

    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        console.log("收到请求", req.url)
        res.end("收到请求" + req.url)
    }

})

server.listen(3333, () => {
    console.log("服务启动成功")
})