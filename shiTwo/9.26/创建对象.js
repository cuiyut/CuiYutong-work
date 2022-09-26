/**
 * 工厂模式
 */
// 就是在函数内创建一个对象，给对象赋予属性及方法再将对象返回
 function gc(name,age) {
    let o = new Object()
    o.name = name
    o.age = age
    o.sayname = function() {
        console.log(this.name);
    }
    return o
} 
let gc1 = gc('ming',19)
console.log(gc1);



/**
 * 构造函数
 */
// 构造函数可以创建特定类型的对象
 function gz(name,age) {
    this.name = name
    this.age = age
    this.sayname = function() {
        console.log(this.name);
    }
}
let gz1 = new gz('hong',21)
console.log(gz1);