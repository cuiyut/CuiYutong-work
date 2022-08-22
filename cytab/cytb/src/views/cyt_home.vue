<template>
    <div>
        <el-container>
        <el-header>
            <i class="el-icon-s-fold">   后台管理系统</i>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu router>
                    <el-menu-item index="/tu">
                        <i class="el-icon-c-scale-to-original"></i>
                        <span slot="title">图书管理</span>
                    </el-menu-item>
                    <el-menu-item index="/hou">
                        <i class="el-icon-goods"></i>
                        <span slot="title">后台管理</span>
                    </el-menu-item>
                    <el-menu-item index="/guo">
                        <i class="el-icon-help"></i>
                        <span slot="title">国际化</span>
                    </el-menu-item>
                    <el-menu-item index="/table">
                        <i class="el-icon-menu"></i>
                        <span slot="title">基础表格</span>
                    </el-menu-item>
                    <el-menu-item index="/tab">
                        <i class="el-icon-position"></i>
                        <span slot="title">tab选项卡</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'CytCytHome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
.el-header, .el-footer {
    background-color: #424d5b;
    color: white;
    text-align: start;
    font-size: 30px;
    box-sizing: border-box;
    padding-left: 50px;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 700px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 700px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>