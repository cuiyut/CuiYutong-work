const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 根目录
  publicPath:'/',
  // 输出文件
  outputDir:'dist',
  // 静态资源
  assetsDir:'static',
  devServer:{
    //端口号
    port: 8089, 	
    //是否启用线上			
    https: false, 		
    //localhost的一种写法		
    host: '0.0.0.0', 	
    //启动的时候是否直接打开浏览器		
    open: false, 				
    proxy: {
      '/api': {
        //配置代理默认开启target方式
        changeOrigin: true,			
        //代理地址	
        target: 'http: //www.baidu.com',  
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
})
