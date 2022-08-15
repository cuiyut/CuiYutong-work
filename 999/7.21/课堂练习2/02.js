var role = {
    0: 'li',
    1: 'bo'
};
var roles = {
    0: 'cui',
    1: 'yu'
};
console.log(role);
console.log(roles);
/**
 * 数组模式
 */
var roleArr = ['li', 'bo'];
roleArr[0] = 'cui';
console.log(roleArr[0]);
var rolegai = {
    0: 'cui'
};
// 报错 不让改
// role1[0] = 'li'
var obj = {
    123: 'a'
};
var useve1 = {
    width: 12,
    color: 'red'
};
var useve2 = {
    height: 186,
    color: 'skyblue'
};
/**
 * 混合类型
 */
var counts = (function () {
    var count = 0;
    return function () {
        // ++mm 从1开始
        // mm++ 从0开始
        return count++;
    };
})();
console.log(counts()); //0
console.log(counts()); //1
var getcon = function () {
    var c = function () {
        c.cons++;
    };
    c.cons = 12;
    return c;
};
var conss = getcon();
getcon();
console.log(conss.cons);
