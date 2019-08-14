const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')


const app = express()

app.engine('html', require('express-art-template'))
app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', './static')

app.get('/', (req, res) => {
    res.send('欢迎进入首页')
})

app.get('/login', (req, res) => {
    // 拿到get参数,req.query是express自带的api
    res.send('欢迎进入登录页面，get参数为：'+JSON.stringify(req.query))
})

app.post('/login', (req, res) => {
    // 拿到post参数，req.body需要借助第三方依赖body-parser
    res.send('欢迎进入登录页面,post参数为：'+JSON.stringify(req.body))
})

app.get('/data', (req, res) => {
    // 注意读取文件的路径，是相对于在命令行中执行node的路径
    fs.readFile('./static/data.json', function (error, data) {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
            res.send('数据获取失败：' + error.toString())
        } else {
            res.send(data.toString())
        }
    })
})

app.get('/content', (req, res) => {
    fs.readFile('./static/data.json', function (error, data1) {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
            res.send('数据获取失败：' + error.toString())
        } else {
            data1 = JSON.parse(data1.toString())
            data1.title = 'content_page'
            console.log('data1: ', data1)

            // 'Content-Type':'text/html' 否则浏览器不会渲染html标签
            // express 会自动设置头部，res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.render('tpl.html', data1)

        }
    })
})

app.listen(3000, () => {
    console.log('服务启动成功')

})