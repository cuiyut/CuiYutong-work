/**
 * 数组（人员
 */
let aa = ['张三','李四','王五','狗蛋','铁柱','刘二','崔六','一一','高九','朝九','晚五','陈讯','小黑']


var ming = document.querySelector('.ming')

/**
 * 随机两名
 */
function two() {
    var kong = []
    for(var i = 0;i < 2;i++) {
        var sj = Math.floor(Math.random()*aa.length)
        if(kong.indexOf(aa[sj]) == -1) {
            kong.push(aa[sj])
        }else {
            i--
        }
    }
    // console.log(kong);
    ming.innerHTML = `${kong[0]}、${kong[1]}`
}


/**
 * 随机一名
 */
function one() {
    var sj = Math.floor(Math.random()*aa.length)
    ming.innerHTML = aa[sj]
}