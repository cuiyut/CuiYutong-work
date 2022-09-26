var a = 1;
// 不能将类型“number”分配给类型“string”
// let b:string = 1
var b = "1";
var c = 0;
// 不能将类型“string”分配给类型“number”
// c = a + b
var foo = 1;
// 类型“number”上不存在属性“splic”
// foo.splic(' ')
var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
console.log(sum);
var num3 = 3;
var num4 = 4;
// 不能将类型“string”分配给类型“number”
// num3 = "3"
var num = num3 + num4;
console.log(num);
var Name = "李博";
var Age = 21;
var Juzi = "\u6211\u7684\u540D\u5B57\u662F".concat(Name, ",\u4ECA\u5E74").concat(Age, "\u5C81\u4E86");
console.log(Juzi);
var list = [1, 2, 3, 4, 5, 6];
var listString = ['1', '2', '3', '4', '5', '6'];
// 不能将类型“string”分配给类型“number”
// let list:number[] = [1,2,3,4,5,'6']
var arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
var arrString = ['1', '2', '3', '4', '5', '6'];
// 类型“string”的参数不能赋给类型“number”的参数
// arr.unshift('9')
arrString.unshift('9');
var arr2 = [1, 2, 3, 4, 5, 6];
var arr2String = ['1', '2', '3', '4', '5', '6'];
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
var tom = ['xiao', 13];
// 在赋值前使用了变量“tom1”
tom[0] = 'tom';
tom[1] = 25;
tom[0].slice(1);
tom[1].toFixed(2);
var val;
val = 123;
val = 'abc';
val = false;
var arr3 = [1, 'a', true];
/**
 * void
 */
function Name1() {
    console.log('my name is void');
}
function Name2() {
    console.log('my name is string');
    return 'my name is void';
}
function Name3() {
    console.log('my age is 12');
    return 12;
}
function Name4() {
    console.log('i am false');
    return false;
}
function Name5() {
    console.log('i can all');
    return 12 + 'my name' + false;
}
function Name6() {
    console.log('i am a array');
    return [1, 2, 3, 4, 5, 6];
}
function Name7() {
    console.log('i am a array2');
    return [1, 2, 3, 4, 5, 6];
}
/**
 * 元组
 */
var uplate = ['1', 2, true];
// 源具有 4 个元素，但目标仅允许 3 个
// let uplate: [string,number,boolean] = ['1',2,true,1]
/**
 * never
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型味nerver
function fail() {
    return error('Something failed');
}
var Color;
(function (Color) {
    /**红色 */
    Color[Color["Red"] = 1] = "Red";
    /**蓝色 */
    Color[Color["Blue"] = 2] = "Blue";
    /**绿色 */
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var c1 = Color.Green;
console.log(c1);
var persion = { name: 'hong', age: 12, sex: true };
/**
 * 联合类型
 */
var All1;
All1 = 1;
All1 = '1';
// 不能将类型“boolean”分配给类型“string | number”
// All1 = true
/**
 * 类型断言
 */
// <>
var Some;
Some = 123;
Some = '123';
var SomeValue = Some.length;
// as
var Some1;
Some1 = 123;
Some1 = '123';
var SomeValue1 = Some1.length;
var Status;
(function (Status) {
    Status[Status["Uploading"] = 0] = "Uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failed"] = 2] = "Failed";
})(Status || (Status = {}));
console.log(Status.Uploading, 'status');
console.log(Status['Success']);
console.log(Status.Failed);
