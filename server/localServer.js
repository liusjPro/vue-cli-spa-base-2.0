const express = require('express')
const bodyParser = require('body-parser')
const localConfig = require('./localConfig')
const userServerApi = require('./api/userServer')

const hostname = localConfig.devInfo.baseURL // IP地址
const port = localConfig.devInfo.port        // 端口号

var app = express()
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
/////////////////// V1 全本地环境  /////////////////
app.use(localConfig.devApi.user, userServerApi)

// 监听端口
app.use((req, res, next) => {
    console.log(req.path)
    var err = new Error('This page not found')
    err.status = 404
    next(err)
})
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
    console.log('Point server start Success')
})