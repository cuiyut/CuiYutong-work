# TS

### 安装：npm i -g typesctipt



### 优点

- ts增加了代码的可读性和可维护性
- 非常包容
- 拥有活跃的社区
- 兼容性很强
- ts的编译步骤可以输出运行之前的错误



### 缺点

- 不利于前端工程师上手，需要理解接口，枚举等类型的概念
- 需要多写一些类型的定义
- 工作量大，和一些库不能完美结合



### 动态类型和静态类型

- 动态类型就是在运行时才会报错，javascript是解释型的语言，没有编译阶段，所以属于动态类型
- 静态类型是在编译阶段就能确定每个变量的类型，如果类型不对就会直接报错，ts的话在编译阶段就会检查每个类型属于静态类型



### 数据类型

- 数字类型（Number）
- 布尔类型（Boolean）
- 字符串类型（String）
- 数组类型（Array）
  -  语法： let 名字: 类型[] = [类型数据]    
  -  数组泛型的语法：  let 名字: Array<类型> = [1,2,3,4]  



### null和unknown

​	既是类型也是值

```ts
let u: undefined = undefined;
let n: null = null;
```



### 对象类型

- 字面量
- {}
- new Object()
- 构造函数
- 工厂模式创建对象



### 元组类型

   	和数组差不多，但是这个是已知长度的

```ts
let uplate: [string,number,boolean] = ['1',2,true]
```



### any

​		任意类型，尽量不要用



### void类型

​	void 是表示没有任意类型

```ts
function Name1():void {
    console.log('my name is void');
}

function Name2():string {
    console.log('my name is string');
    return 'my name is void'
}

function Name7():number[] {
    console.log('i am a array2');
    return [1,2,3,4,5,6]
}
```



### never类型

​	never类型表示的是那些永不存在的值的类型

​	never类型是任何类型的子类型

```ts
// 返回never的函数必须存在无法达到的终点
function error(message:string):never {
    throw new Error(message)
}
// 推断的返回值类型味nerver
function fail() {
    return error('Something failed')
}
```



### unknown

​	和any差不多，但相对于any比较安全



### 交叉类型（&）

```ts
interface Use {
    name: string,
    age:number
}
interface Per {
    sex: boolean
}
type All = Use & Per
let persion:All = {name:'hong',age:12,sex:true}
```



### 联合类型（|）

```ts
let All1:number | string
All1 = 1
All1 = '1'
```



### 类型断言（as）

```ts
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
```



# 枚举

和对象相似但是和对象写法不同，枚举是赋值

```ts
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
```



# interface

定义函数需要传的参数较多的时候，可以用到interface

### 可选属性

-  格式：属性名 ?：类型
- 那么这个参数就可传可不传



### 多余属性

​	格式：[prop：string]：any



### 绕开多余属性检查

- 使用类型断言 as <>
- 使用多余属性 [prop：string]：any
- 利用类型兼容性



### 只读属性（readonly）

- 使用const修改常量里的属性会报错
- 使用const定义一个对象，修改对象里面属性不会报错，如果需要对象里的属性不可以修改，就使用readonly

