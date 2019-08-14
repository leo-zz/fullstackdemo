const express=require('express');
const router=require('./router')
const bodyParser=require('body-parser');

const app=express();

app.engine('html', require('express-art-template'))
app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', './static')

app.use(router)

app.listen(3000, () => {
    console.log('服务启动成功')

})