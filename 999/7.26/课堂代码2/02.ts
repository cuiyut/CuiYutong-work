/**
 * 基础
 */
let value1:unknown
value1 = '0',
value1 = 123

let value2:any
value2 = 1
value2 = '123'

let value3:unknown
// 不能将类型“unknown”分配给类型“str"
// let value4:string = value3
value1 = value3
let value5:any
let value6:string = value2

let value7:unknown
// 运算符“+=”不能应用于类型“unknown”和“1"
// value7 += 1
let value8:any
value8 += 1
/**
 * 交叉类型
 */
type type1 = unknown & string  //string
type type2 = number & unknown   //number
type type3 = unknown & unknown   //unknown
type type4 = unknown & boolean   //boolean
type type5 = unknown & string[]   //string[]

type type11 = any & string   //string
type type22 = number & any   //number
type type33 = any & any    //unknown
type type44 = any & string[]  //string[]
/**
 * never是unknown的子类
 */
type type6 = never extends unknown ? true :false  //true
/**
 * unknown不能运算
 */
let val1:unknown
let val2:unknown
val1 === val2
val1 !== val2
// 运算符“+=”不能应用于类型“unknown”和“unknown”。
// val1 += val2
/**
 * 不能访问其属性、不能作为函数调用、不能作为类创建实例
 */
// let val3:unknown
// val3.age
// val3()
// new val3()
/**
 * 映射
 */
type tp<T> = { [P in keyof T]:number }
type tp1 = tp<any> 