const express = require('express')
const urlib = require('url')
const router = express.Router()
const pointConfig = require('../localConfig')

router.get('/login', (req, res, next) => {
  var reqParam = urlib.parse(req.url, true)
  var pathname = reqParam.pathname
  console.log('request name: ', pathname)
  var responseObj = {}
  responseObj.loginStatus = pointConfig.devType.loginStatus
  responseObj.code = 200
  res.header("Access-Control-Allow-Origin", "*");
  console.log('response data: ', responseObj)
  res.send(responseObj)
})
module.exports = router