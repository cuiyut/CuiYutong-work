class Animal {
    name:string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}
let dog = new Dog('哈士奇')
console.log(dog.name);
console.log(dog.getName);




let value1:unknown
value1 = 'a'
value1 = 123


let value2:unknown
// 不能将类型“unknown”分配给类型“string”
// let value3:string = value2
let value3:unknown = value2
value1 = value2


let value4:unknown
let value5:any
// 对象的类型为 "unknown"
// value4 += 1
value5 += 1


type type1 = unknown 
