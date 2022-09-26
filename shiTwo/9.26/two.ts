let a:number = 1
// 不能将类型“number”分配给类型“string”
// let b:string = 1
let b:string = "1"
let c:number = 0
// 不能将类型“string”分配给类型“number”
// c = a + b


let foo = 1
// 类型“number”上不存在属性“splic”
// foo.splic(' ')


let num1 = 1
let num2 = 2
let sum = num1 + num2
console.log(sum);


let num3 = 3
let num4 = 4
// 不能将类型“string”分配给类型“number”
// num3 = "3"
let num = num3 + num4
console.log(num);




let Name:string = "李博"
let Age:number = 21
let Juzi = `我的名字是${Name},今年${Age}岁了`
console.log(Juzi);




let list:number[] = [1,2,3,4,5,6]
let listString:string[] = ['1','2','3','4','5','6']
// 不能将类型“string”分配给类型“number”
// let list:number[] = [1,2,3,4,5,'6']


let arr:number[] = [1,2,3,4,5,6]
arr.push(7)
let arrString:string[] = ['1','2','3','4','5','6']
// 类型“string”的参数不能赋给类型“number”的参数
// arr.unshift('9')
arrString.unshift('7')
let arr2:Array<number> = [1,2,3,4,5,6]
let arr2String:Array<string> = ['1','2','3','4','5','6']
// 不能将类型“string”分配给类型“number”
// let arr2:Array<number> = [1,2,3,4,5,'6']



// declare function create1(o:object | null) : void
// create1({props:0})
// create1(null)
// // 类型“number”的参数不能赋给类型“object”的参数
// // create(3222)
// // 类型“string”的参数不能赋给类型“object”的参数
// // create("dddd")
// let obj: {name:string}
// // 不能将类型“{ name: string; age: number; }”分配给类型“{ name: string; }”
// // obj = {name: 'xiao',age:13}
// obj = {name: 'xiao'}



// 不能将类型“[string, number, string]”分配给类型“[string, number]
// let tom:[string,number] = ['xiao',13,'hong']
let tom:[string,number] = ['xiao',13]
// 在赋值前使用了变量“tom1”
tom[0] = 'tom'
tom[1] = 25
tom[0].slice(1)
tom[1].toFixed(2)



/**
 * any
 */
let val:any
val = 123
val = 'abc'
val = false
const arr3:any[] = [1,'a',true]



/**
 * void
 */
function Name1():void {
    console.log('my name is void');
}
function Name2():string {
    console.log('my name is string');
    return 'my name is void'
}
function Name3():Array<number> {
    console.log('i am a array');
    return [1,2,3,4,5,6]
}
function Name5():number[] {
    console.log('i am a array2');
    return [1,2,3,4,5,6]
}




/**
 * 元组
 */
let uplate: [string,number,boolean] = ['1',2,true]
// 源具有 4 个元素，但目标仅允许 3 个
// let uplate: [string,number,boolean] = ['1',2,true,1]




/**
 * never
 */
// 返回never的函数必须存在无法达到的终点
function error(message:string):never {
    throw new Error(message)
}
// 推断的返回值类型味nerver
function fail() {
    return error('Something failed')
}




enum Color {
    /**红色 */
    Red = 1,
    /**蓝色 */
    Blue = 2,
    /**绿色 */
    Green = 3
}
let c1: Color = Color.Green
console.log(c1);




/**
 * 交叉类型
 */
interface Use {
    name: string,
    age:number
}
interface Per {
    sex: boolean
}
type All = Use & Per
let persion:All = {name:'hong',age:12,sex:true}




/**
 * 联合类型
 */
let All1:number | string
All1 = 1
All1 = '1'
// 不能将类型“boolean”分配给类型“string | number”
// All1 = true




/**
 * 类型断言
 */
// <>
let Some: any
Some = 123
Some = '123'
let SomeValue = (<string>Some).length
// as
let Some1:any
Some1 = 123
Some1 = '123'
let SomeValue1 = (Some1 as string).length




enum Status {
    Uploading,
    Success,
    Failed
}
console.log(Status.Uploading,'status');
console.log(Status['Success']);
console.log(Status.Failed);




const getValue = () => {
    return 0
}
const names = 'xiaoming'
enum Message {
    /**错误信息 */
    Error = 'error',
    /**成功的错误信息 */
    SuccessError = 200,
    // 含字符串值成员的枚举中不允许使用计算值
    // ClientError = names
}



/**
 * 枚举成员类型
 */
enum Animal {
    Dog = 1,
    Cat = 2
}
interface Dog {
    type:Animal.Dog
}
interface Cat {
    type:Animal.Cat
}
// 含字符串值成员的枚举中不允许使用计算值
// let cat1:Cat = {
//     type:Animal.Dog
// }
let dog:Dog = {
    type:Animal.Dog
}




/**
 * 联合枚举类型
 */
enum Keys {
    Off,
    On
}
interface Light {
    status:Keys
}
let Light1:Light = {
    status:Keys.Off
}





const FullName = ({first,last}:{first:string,last:string}) => {
    return `${last}${first}`
}
// 不能将类型“number”分配给类型“string”
// const result = FullName({first:1,last:'wang'})
const result = FullName({first:'fei',last:'wang'})
interface Info {
    firstName: string;
    lastName:string
}
const Full = ({firstName,lastName}:Info) => `${firstName} ${lastName}`





interface Veget {
    color?: string;
    type:string
}
const getVeget = ({color,type}:Veget) => {
    return `a${color ? color + " " : " "}${type}`
}
getVeget({
    type:'tomato',
    size:12,
    price:1.2
} as Veget)
