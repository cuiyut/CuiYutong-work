<h1>A卷知识点</h1>
### 时间戳

- moment
  - 安装：npm install moment
  
  - 需要使用的组件引入：import moment from ‘moment’
  
    ```html
    <script>
      import moment from 'moment'
      filters: {
         dateFormat: (value) => {
           return moment(value * 1000).format("YYYY-MM-DD、HH:mm:ss");
         }
       }
     </script>
    ```
  
  - 全局引入： 在main.js中用 import 引入
  
  - moment挂载到继承上使用
  
    ```html
    <template slot-scope="{ row: { created_at } }">
        {{ $moment(created_at) }}
    </template>
    
    //main.js
    Vue.prototype.$moment = moment原生
    ```

- 通过new Date转换为本地时间 toLocaleString()

- 原生js

  ```
  var a = new Date(时间戳);
  年：var year = a.getYear();
  月：var month = "0" + (a.getMonth() + 1);
  日：var date = "0" + a.getDate();
  时：var hour = "0" + a.getHours();
  分：var minute = "0" + a.getMinutes();
  秒：var second = "0" + a.getSeconds();
  最后使用拼接
  ```

  

### 搜索

一共有三个input框（状态、名称、手机号）用来搜索，所以要分情况

- 状态
- 名称
- 手机号
- 状态+名称
- 状态+手机号
- 名称+手机号
- 状态+名称+手机号

可以使用if else if

也可以使用swich来写（注意数据类型）



### mockjs

- 安装：npm install mockjs

- 根目录创建mock文件，里面创建index.js进行配置

  ```js
  // 首先引入Mock
  const Mock = require('mockjs');
  
  // 设置拦截ajax请求的相应时间
  Mock.setup({
      timeout: '200-600'
  });
  
  let configArray = [];
  
  // 使用webpack的require.context()遍历所有mock文件
  const files = require.context('.', true, /\.js$/);
  files.keys().forEach((key) => {
      if (key === './index.js') return;
      configArray = configArray.concat(files(key).default);
  });
  
  // 注册所有的mock服务
  configArray.forEach((item) => {
      for (let [path, target] of Object.entries(item)) {
          let protocol = path.split('|');
          Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
      }
  });
  ```

- 再创建需要的js文件

  ```js
  const name1 = {
      status: 200,
      type: 'success',
      data: [
          {
              things
          }
      ]
  }
  export default{
      '获取方法|定义路径': (options) =>{
          return {
              status: 200,
              message: 'success',
              data: name1
          }
      },
  }
  ```

- 最后在main.js中引入

  ```js
  require('../mock/index.js')
  ```



### 组件拆分

尽可能的把组件拆分开，可以让组件看起来更简洁，逻辑更清晰

将可复用组件进行封装

coponents文件夹中一般用来存放公共组件及样式

views里存放私有组件

```html
<div>
    <headerr />
</div>

<script>
import Headerr form '组件路径'
 export default {
  components: {
    Headerr
  },
};
</script>
```





### js中的0

​	对0取反值为true,在项目中判断条件遇到0需要考虑这个特性



### keep-alive

- 用来缓存不活动的组件

  ```html
  <keep-alive>
        <router-view></router-view>
  </keep-alive>
  ```
  - includes-字符串或正则表达式，当名称一样时组件会被缓存
  - excludes-字符串或正则表达式，名称不一样时组件不会缓存
  - max-数字，最多可以缓存多少组件



##### 用this.$route可以拿到当前路由的完整信息