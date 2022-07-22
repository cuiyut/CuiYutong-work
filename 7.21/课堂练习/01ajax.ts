/**
 * 原生ajax
 */
let ajax = new XMLHttpRequest()
ajax.open('get','dizhi')
ajax.send()
ajax.onreadystatechange = function() {
    if(ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.response);
    }
}

/**
 * 用接口封装一个ajax请求，限制传参保证数据安全，去掉魔法数字
 * methds、url、data（可选） ---- interface
 * 状态码管理 200、4 ---- eunm
 */
/**
 * 封装
 */
enum Status {
    /**成功 */
    Succes = 200,
    /**准备完成 */
    Ready = 4
}

interface Params {
    methods:string,
    data?:any,
    url:string
}

function getAjax(params:Params) {
    let ajax = new XMLHttpRequest()
    ajax.open(params.methods,params.url)
    ajax.send(params.data)
    ajax.onreadystatechange = function() {
        if(ajax.status === Status.Succes && ajax.readyState === Status.Ready) {
            console.log('成功');
            
        }
    }
}
const param = {methods:'get',url:'dizhi'}
getAjax(param)