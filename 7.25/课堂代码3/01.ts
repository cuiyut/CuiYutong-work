/**
 * 泛型
 */
// 最初的封装
const getArray1 = <T>(value:T,times:number = 5):T[] => {
    return new Array(times).fill(value)
}
// 调用
getArray1<number[]>([1,2],3).forEach(item => {
    console.log(item.length);
})

/**
 * 类的定义
 */
class Rens {
    name:string
    age:number
    sex:boolean
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    sayhi():string {
        return this.name
    }
}
let rens = new Rens('li',20)
console.log(rens);


/**
 * 类的继承
 */
class dong2 {
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    dong():number {
        return this.age
    }
}
class tuzi extends dong2 {
    constructor(name:string,age:number) {
        super(name,age)
    }
}
let tu = new tuzi('tuzi',5)
console.log(tu.name);
console.log(tu.age);
console.log(tu.dong());
/**
 * 类的修饰符
 */
abstract class Animal3 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
abstract class Animal4 {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
class Dog1 extends Animal3 {
    constructor(name:string){
        super(name)
    }
}
abstract class Animal5 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}
abstract class Animal6 {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}
class Dog23 extends Animal3 {
    constructor(name:string){
        super(name)
    }
    eat(): string {
        return this.name
    }
}

/**
 * 类的接口类型
 */
interface Idong {
    name:string
    eat():string
}
class dong3 implements Idong{
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    eat():string {
        return ''
    }
}
let p33 = new dong3('libo',21)
console.log(p33);
/**
 * 接口继承
 */
class Cat extends Animal3{
    constructor(name:string){
        super(name)
    }
    eat():void{
        console.log(this.name);
        
    }
}