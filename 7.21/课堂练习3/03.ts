/**
 * 索引签名
 */
interface role {
    [id:number]:string
}
let role:role = {
    0:'li',
    1:'bo'
}
let roles:role = {
    0:'cui',
    1:'yu'
}
console.log(role);
console.log(roles);





/**
 * 数组模式
 */
let roleArr:role = ['li','bo']
roleArr[0] = 'cui'
console.log(roleArr[0]);
/**
 * 只读不修改---readonly
 */
interface role1 {
    readonly [id:number]:string
}
const rolegai:role1 = {
    0:'cui'
}
// 报错 不让改
// role1[0] = 'li'
const obj = {
    123:'a',
    // '123':'a'-----错的
}





/**
 * 接口继承
 */
interface ve {
    color:string
}
interface ve1 extends ve {
    width:number
}
interface ve2 extends ve {
    height:number
}
let useve1:ve1 = {
    width:12,
    color:'red'
}
let useve2:ve2 = {
    height:186,
    color:'skyblue'
}





/**
 * 混合类型
 */
const counts = (() => {
    let count = 0
    return () => {
        // ++mm 从1开始
        // mm++ 从0开始
        return count++
    }
})()
console.log(counts()); //0
console.log(counts()); //1

// 闭包的写法1
// const bibao1 = (() => {
//     return () => {

//     }
// })()

// 闭包写法2
// const bibao2 = (() => {
//     function aa() {

//     }
//     return aa()
// })()






/**
 * 混合接口
 */
interface con {
    ():void  //viod是没有返回值的函数
    cons:number
}
const getcon = ():con => {
    const c = () => {
        c.cons++
    }
    c.cons = 12
    return c
}
const conss:con = getcon()
conss()
console.log(conss.cons);