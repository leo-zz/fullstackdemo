const express = require('express')
const mongodb = require('./mogodb')
const router = express.Router()



const User = mongodb.User


router.post('/staff', (req, res) => {
    const admin = new User(req.body)
    console.log('接收POST数据：' + JSON.stringify(req.body))
    admin.save((err, ret) => {
        if (err) {
            res.send('保存失败' + JSON.stringify(err))

        } else {

            res.send('保存成功:' + JSON.stringify(ret))
        }
    })
})

router.get('/staff', (req, res) => {
    console.log('查询参数:' + JSON.stringify(req.query))
    User.find(req.query, (err, ret) => {
        if (err) {
            res.send('查询失败' + JSON.stringify(err))
        } else {

            res.send('查询成功:' + JSON.stringify(ret))
        }
    })
})



router.post('/staff/update', (req, res) => {
    console.log('更新参数:' + JSON.stringify(req.body))
    // 查找新增的第一个参数为_id值，第二个参数为修改的属性，第三个是回调函数
    User.findByIdAndUpdate(req.body._id, req.body, (err, ret) => {
        if (err) {
            res.send('更新失败' + JSON.stringify(err))
        } else {
            res.send('更新 ' + JSON.stringify(req.body) + ' 成功:' + JSON.stringify(ret))

        }
    })
})

router.get('/staff/delete', (req, res) => {
    User.deleteOne(req.query, (err, ret) => {
        if (err) {
            res.send('删除失败' + JSON.stringify(err))
        } else {
            res.send('删除 ' + JSON.stringify(req.query) + ' 成功:' + JSON.stringify(ret))

        }
    })
})

router.get('/content', (req, res) => {
    const admin = new User(req.body)
    console.log('接收POST数据：' + JSON.stringify(req.body))
    User.find(req.query, (err, ret) => {
        if (err) {
            res.send('保存失败' + JSON.stringify(err))
        } else {
            console.log(ret.length)
            res.render('index.html', {list:ret})
        }
    })
})

module.exports = router
