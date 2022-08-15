/**
 * 数字类型(number)
 */
let num1:number = 19
let num2:number = 21
let sum = num1 + num2
console.log(sum); // 40



/**
 * 布尔值(boolean)
 */
let isflag:boolean = false
console.log(isflag);



/**
 * 字符串(string)
 */
let user:string = 'libo'
let nian:number = 21
let ju2 = `My name is ${user},I am ${nian}`
console.log(ju2);
document.write(ju2)



/**
 * 数组
 */
let arr1:number[] = [1,2,3,4,5,6]
let arr2:string[] = ['1','2','3','4','5']
let arr3:boolean[] = [true,false,true,true]
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 第二种--数组泛型 Array<类型>
let arr4: Array<number> = [1,2,3,4,5,6]
let arr5: Array<string> = ['1','2','3','4','5']
let arr6: Array<boolean> = [false,true,true,false]
console.log(arr4);
console.log(arr5);
console.log(arr6);
arr1.push(6)
console.log(arr1);



/**
 * undefined和null
 */
// undefined 和 null 是两个基本数据类型，既是类型又是值
let u: undefined = undefined;
let n: null = null;
console.log(u,n);




/**
 * 对象
 */
let obj2:{name:string, age:number}
obj2 = {name:'李博', age:21}
let arr = `my name is  ${obj2.name} age is ${obj2.age}`
console.log(arr);
document.write(arr)



/**
 * 元组
 */
let yuanzu: [name:string, age:number, sex:boolean, height:number] = ['崔宇彤',19,true,170]
console.log(yuanzu[0]);
console.log(yuanzu[1]);
console.log(yuanzu[2]);
console.log(yuanzu[3]);
let ju1 = `my name is ${yuanzu[0]} age is ${yuanzu[1]} sex is ${yuanzu[2]} i am ${yuanzu[3]} cm`
console.log(ju1);
document.write(ju1)


/**
 * 枚举
 */
enum Color {
    /**
     * 红色
     */
    Red = 1,
    /**
     * 蓝色
     */
    Blue = 2,
    /**
     * 灰色
     */
    Grey = 3
}
let c:Color = Color.Blue
console.log(c);  // 2


/**
 * any
 */
let value:any
value = 12
value = '123'
value = true
const a:any[] = [12,'123',true]
console.log(a);



/**
 * void类型
 */
function name1(): void  {
    console.log('没返回值');  
}
 function name2(): string{  
    return 'My Name is string'
}


/**
 * never 就是用来表示报错的
 */
function error(message:string):never {
    throw new Error(message)
}
function fail() {
    return error('fail')
}


/**
 * unknown
 */
// 和any用法差不多，但是比any安全


/**
 * 交叉类型(&)
 */
interface type1 {
    name2:string,
    age2:number
}
interface type2 {
    sex:boolean
}
type allin = type1 & type2
let zijie:allin = {name2:'cuiyutong',age2:21,sex:true}



/**
 * 联合类型(|)
 */
let alltype:number | string
alltype = 1
alltype = 'ddd'







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
console.log(Shu[200]);

enum Zhi {
    Red1 = 1,
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
 */
function getName({firstName,lastName}:{firstName:string,lastName:string}) {
    return `${lastName}${firstName}`
}
let jie = getName({firstName:'博',lastName:'李'})
console.log(jie);

interface rens {
    firstName:string,
    lastName:string,
    age:number,
    sex:boolean,
    color?:string,   //可选属性
    [prop:string]:any //多余属性
}
function getNames({firstName,lastName,age,sex}:rens) {
    return `${firstName}${lastName}${age}${sex}`
}
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
    size:12,
    price:300
} as party) //加上这个


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