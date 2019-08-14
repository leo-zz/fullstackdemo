
const express = require('express')
const fs = require('fs')

const router=express.Router()

router.get('/', (req, res) => {
    res.send('欢迎进入首页')
})

router.get('/login', (req, res) => {
    // 拿到get参数,req.query是express自带的api
    res.send('欢迎进入登录页面，get参数为：'+JSON.stringify(req.query))
})

router.post('/login', (req, res) => {
    // 拿到post参数，req.body需要借助第三方依赖body-parser
    res.send('欢迎进入登录页面,post参数为：'+JSON.stringify(req.body))
})

router.get('/data', (req, res) => {
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

router.get('/content', (req, res) => {
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

module.exports =router