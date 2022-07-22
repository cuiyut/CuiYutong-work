**1.什么是ts**

ts可以理解为JavaScript的超集，它是由微软公司开发的一种编程语言，可以运行在任何浏览器还有操作系统



**2.全局安装ts**

 npm i -g typescript



**3.ts的优点 **

   1）灵活：可以将代码自动转换为js代码 

   2）兼容性强： 可以在任何浏览器和操作系统运行，并不需要浏览器的支持，通过node.js运行即可

   3）方便维护： 在ts中的报错在编译时就能发现，不会直接显示到用户页面



**4.ts的缺点**

   1）不利于前端工程师上手，需要理解接口，枚举等类型的概念

   2）需要多写一些类型的定义

   3）工作量大，和一些库不能完美结合



**5.ts分为动态类型和静态类型**

   1）动态类型就是在运行时才会报错，javascript是解释型的语言，没有编译阶段，所以属于动态类型

   2）静态类型是在编译阶段就能确定每个变量的类型，如果类型不对就会直接报错，ts的话在编译阶段就会检查每个类型属于静态类型



**6.强类型和弱类型语言**

主要区别就是靠是否能隐式转换来分类的，ts和jacascript都属于弱类型



**7.ts的数据类型**
   1）数字类型（Number）

​    2）布尔类型（Boolean）

​    3）字符串类型（String）

​    4）数组类型（Array）

​          ① 语法： let 名字: 类型[] = [类型数据]    

​          ② 数组泛型的语法：  let 名字: Array<类型> = [1,2,3,4]  



   **5.null和unknown**

​	既是类型也是值

​        1）未定义语法： let a : undefined = undefined   

​        2）空类型： let b: null = null



​    6.  对象类型**

​		1）字面量

​		2）new Object()

​		3）构造函数



  **7.元组类型**

   	和数组差不多，但是这个是已知长度的



  **8.枚举**
   	和对象相似但是和对象写法不同，枚举是赋值



  **9.any**

​		任意类型，尽量不要用



 **10. void类型**

​	void 是表示没有任意类型

​	1）用return返回：

​			function noReturn(): void {
   			  console.log('My name is void');
​			}

​	2）要return返回：

​			function haveReturn(): string {
​    			  return '55'
​			}



​    **11.never类型**

​	never`类型表示的是那些永不存在的值的类型

​	never`类型是任何类型的子类型

​	1）返回never的函数：

​		 function error(message: string): never {
​    			   throw new Error(message);
​			}

​	2）推断：function fail() {
   			return error("Something failed");
​		}



**12.unknown**

​	和any差不多，但相对于any比较安全



**13.扩展**

​	1）交叉类型（&）

​	2）联合类型（|）

​	3）类型断言（as）