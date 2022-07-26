/**
 * 原型和继承
 * 面向对象的特点：继承、多态、封装
 */
/**
 * es5继承
 * @param {*} name 
 */
function Dong(name) {
    this.name = name
    this.Sayhi = function() {
        console.log('woshi');
    }
}
Dong.prototype.height = 12
Dong.prototype.zu = function() {
    console.log('jiao');
}
let cat = new Dong('cat')
console.log(cat.name);
console.log(cat.Sayhi);
console.log(cat.height);
console.log(cat.zu);






/**
 * es6的类的声明
 */
class Ren {
    constructor(name,age) {
        this.name = name,
        this.age = age
    }
    SayHi() {
        // console.log('fangfa');
        return `my name ${this.name}`
    }
}
let ren = new Ren('libo',21)
console.log(ren.name);
console.log(ren.age);
console.log(ren.SayHi());




/**
 * es6的继承
 */
class Dong2 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    Run() {
        console.log('pao');
    }
}
class gou extends Dong2 {
    constructor(props) {
        super(props)
    }
}
let gou1 = new gou('jinmao')
console.log(gou1.name);
gou1.Run()




// 构造函数原型链上添加方法
Animal.prototype.chang = function(){
    console.log(`${this.name}会唱歌`);
}

function Dog(name){
    Animal.call(this,name)
 }
 
 let d = new Dog('哈士奇')
 
 console.log(d.name);
 console.log(d.chang()); 

 function Dog(name){
    Animal.call(this,name)
 }
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);
d.run()
d.chang()