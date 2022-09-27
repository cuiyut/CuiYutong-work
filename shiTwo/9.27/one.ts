interface Add {
    (x:number,y:number):number
}
// 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
//   参数“arg1”和“x” 的类型不兼容。
//     不能将类型“number”分配给类型“string”
// let add: Add = (arg1:string,arg2:string):string => arg1 + arg2
let add: Add = (arg1:number,arg2:number):number => arg1 + arg2



/**
 * 类型别名
 */
type Add1 = (x:number,y:number) => number
let add1:Add1 = (arg1:number,arg2:number) => arg1 + arg2



interface Add2 {
    name:string
}
interface Add2 {
    color:string
}
// 类型“{}”缺少类型“Add2”中的以下属性: name, color
// let addAll:Add2 = {}



type user = string
function Input(str:string):user {
    return str.slice(0,2)
}
let userInput = 'neww'


interface Point {
    x:number,
    y:number
}
function pri(pt:Point){

}
pri({
    x:100,
    y:100
})
