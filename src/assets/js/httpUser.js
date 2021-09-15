// global app
window.APIHTTP = (function(){
    const APIHTTP = {};
    ///////////////////// NetWoking  //////////////////
    // https://developer.paypay.ne.jp/miniapp/docs/apireference/network
    // api: '/user/autosweep'
    // methodType: 0: GET 1: POST
    // paramData :  { x: 'abc', y: '123' }
    // callback: callback
    APIHTTP.request = function (api, paramData, methodType, callback) {
        var reqestURL = process.env.VUE_APP_URL +  process.env.VUE_APP_API + '/' + api
        console.log('reqestURL:' + reqestURL)
        var methoed = methodType == 0 ? 'GET' : 'POST'
        var paramCount = 0
        var xhr = new XMLHttpRequest();
        // GET
        if (methodType == 0) {
            if (paramData !== null) {
                reqestURL += '?'
                for (let key in paramData) {
                    if (paramCount == 0) {
                        reqestURL += key + '=' + paramData[key]
                        paramCount += 1
                    } else {
                        reqestURL +=  '&' + key + '=' + paramData[key]
                    }              
                }
            }
            xhr.open(methoed, reqestURL, true);
            xhr.send();
        } else {
            xhr.open(methoed, reqestURL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(paramData));
        }
        xhr.onreadystatechange = function() {
            // readyState 0: 请求未初始化 1: 服务器连接已建立  2: 请求已接收 3: 请求处理中 4: 请求已完成，且响应已就绪
            // status: 200: "OK"  404: 未找到页面
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 404) {
                    var res = {
                        statusCode: xhr.status,
                        data: xhr.responseText
                    }
                    callback(res)
                }
            }
        };
    }
    return APIHTTP;
})();