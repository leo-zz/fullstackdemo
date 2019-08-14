const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')



const app = express()

app.set('views', './static')
app.engine('html', require('express-art-template'))
app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)


app.listen(3000, () => {
    console.log('服务启动成功')

})