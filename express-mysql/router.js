const express = require('express')
const router = express.Router()

const mysql = require('mysql')
let connect;

try {
    connect = mysql.createConnection({
        host: '192.168.14.156',
        user: 'root',
        password: '*%$7s5',
        database: 'users'
    })
    connect.connect()
} catch (e) {
    console.e('创建失败', e)
}



router.post('/staff', (req, res) => {

    console.log('接收POST数据：' + JSON.stringify(req.body))
    connect.query('insert into users values (null,"'+req.body.username+'","'+req.body.password+'",'+req.body.age+',"'+req.body.city+'")', (err, ret) => {
        if (err) {
            res.send('保存失败' + JSON.stringify(err))
        } else {
            res.send('保存成功:' + JSON.stringify(ret))
        }
    })
})

router.get('/staff', (req, res) => {
    console.log('查询参数:' + JSON.stringify(req.query))
    connect.query('select * from users', (err, ret) => {
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
    connect.query('update users set username="'+req.body.username+'" ,password="'+req.body.password+'",age='+req.body.age+',city="'+req.body.city+'"where id = '+req.body.id, (err, ret) => {
        if (err) {
            res.send('更新失败' + JSON.stringify(err))
        } else {
            res.send('更新 ' + JSON.stringify(req.body) + ' 成功:' + JSON.stringify(ret))

        }
    })
})

router.get('/staff/delete', (req, res) => {
    connect.query('delete from users where id=' + req.query.id, (err, ret) => {
        if (err) {
            res.send('删除失败' + JSON.stringify(err))
        } else {
            res.send('删除 ' + JSON.stringify(req.query) + ' 成功:' + JSON.stringify(ret))

        }
    })
})

router.get('/content', (req, res) => {
    connect.query('select * from users', (err, ret) => {
        if (err) {
            res.send('保存失败' + JSON.stringify(err))
        } else {
            res.render('index.html', { list: ret })
        }
    })
})

module.exports = router
