/**
 * 数字枚举
 */
enum Shu {
    /**成功 */
    Succes = 200,
    /**报错 */
    Error = 404
}
console.log(Shu.Succes);
console.log(Shu['Error']);
// 反向映射
console.log(Shu[200]);

enum Zhi {
    Red1 = 1,
    // 索引值固定一个后，后面的如果没定义就依次递增
    Blue2,
    Blue3
}
console.log(Zhi.Red1);
console.log(Zhi['Blue2']);
console.log(Zhi.Blue3);






const getValue = () => {
    return 0
}
enum Shu1 {
    Cat = getValue(),
    // 枚举成员必须具有初始化表达式
    // dog,
    // gou
}




/**
 * 字符串枚举
 */
const names = 'hong'
enum mee {
    error = 'error mes',
    succes = 200,
    // 含字符串值成员的枚举中不允许使用计算值
    // uload = names
}

enum ziFu {
    /**猪 */
    Pig = 'zhu',
    /**狗 */
    Dog = 'gou'
}





/**
 * 枚举类型
 */
// 可以把符合条件的成员作为枚举值来使用
enum dong {
    dog = 1,
    mao = 2
}
interface dog {
    type:dong.dog
}
interface mao {
    type:dong.mao
}
// let mao1:mao = {
//     // 不能将类型“dong.dog”分配给类型“dong.mao”
//     type:dong.dog
// }
// let dog1:dog = {
//     type:dong.mao
// }





/**
 * 联合枚举
 */
// 当枚举值符合条件的时候，这个成员可以看做是包含所有成员的联合类型
enum keys {
    off,
    on
}
interface light {
    status:keys
}
let light1:light = {
    status:keys.off
}





/**
 * 运行时的枚举
 */
enum E{
    A,
    B
}
const getIndex = (enumObj : { A: number}): number => {
     return enumObj.A
}
console.log(getIndex(E));







/**
 * interface
 * 定义函数需要传的参数类型较多的时候，可以用到interface
 */
function getName({firstName,lastName}:{firstName:string,lastName:string}) {
    return `${lastName}${firstName}`
}
// 应有 1 个参数，但获得 0 个
// getName()
// 不能将类型“number”分配给类型“string”
// 对象文字可以只指定已知属性，并且“age”不在类型“{ firstName: string; lastName: string; }”中
// getName({firstName:12,age:13})
let jie = getName({firstName:'博',lastName:'李'})
console.log(jie);

interface rens {
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color?:string,   //可选属性 -->这个属性可传可不传
    [prop:string]:any //多余属性 -->可以添加任意属性
}
function getNames({firstName,lastName,age,sex}:rens) {
    return `${firstName}${lastName}${age}${sex}`
}
// 缺少类型“rens”中的以下属性: age, sex
// let jieguo = getNames({firstName:'libo',lastName:'bo'})
let jieguo = getNames({firstName:'libo',lastName:'bo',age:21,sex:true})
console.log(jieguo);








/**
 * 绕开多余属性，类型断言
 * 类型断言 as <>
 */
/**
 * 第一种方法
 */
interface party {
    color?:string,
    type:string,
}
const getparty = ({color,type}:party) : string => {
    return `${color ? color + "" : " "}${type}`
}
getparty({
    type:'libo',
    // 对象文字可以只指定已知属性，并且“size”不在类型“party”中
    size:12,
    price:300
} as party)  //加上这个类型断言就好了


/**
 * 第二种方法
 */
interface party1 {
    color?:string,
    type:string,
    [prop:string]:any //加上这个
}
const getparty1 = ({color,type}:party1) : string => {
    return `${color ? color + "" : " "}${type}`
}
getparty1({
    type:'libo',
    size:12,
    price:300
})






/**
  * 只读属性
  * readonly
  */
interface Role {
    readonly 0: string;
    readonly 1: string;
}
  const role1: Role = {
    0: 'super_admin',
    1: 'admin'
  }
// 无法分配到 "1" ，因为它是只读属性
//   role1[1] = 'libo';


 
/**
* const 和 readonly  对比
*/
const NAME: string = "libo";
// 无法分配到 "NAME" ，因为它是常数。
// NAME = "libo" 

 
 
 const obj = {
    name: 'cuiyut'
 }
 obj.name = "libo"
 
 interface Info {
    readonly name: string
 }
 
 const info: Info = {
    name: 'libo'
 }
 // 无法分配到 "name" ，因为它是只读属性
//  info['name'] = "cuiyut" 
 


/**
* 类型别名
*/
interface AddFunc {
    (num1: number, num2: number) : number
}
const add: AddFunc = (n1, n2) => n1 + n2;
// 不能将类型'string'分配给类型'number'
// const join: AddFunc = (n1, n2) => `${n1} ${n2}`; 
// 类型'string'的参数不能赋给类型'number'的参数
// add("a", 2); 