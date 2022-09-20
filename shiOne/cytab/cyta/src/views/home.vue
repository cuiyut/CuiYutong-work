<template>
    <div>
        <el-container>
        <el-header>
            <img class="logo" src="../assets/logo.png" alt="">
            <ul class="uul">
                <li class="el-icon-user-solid">用户</li>
                <li class="el-icon-s-custom">教学</li>
                <li class="el-icon-s-opportunity">题库</li>
                <li class="el-icon-s-marketing">运营</li>
                <li class="el-icon-menu">营销</li>
                <li class="el-icon-s-management">商品</li>
                <li class="el-icon-s-data">财务</li>
                <li class="el-icon-s-help">统计</li>
                <li class="el-icon-s-tools">系统</li>
            </ul>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu router>
                    <el-menu-item index="/xue">
                        <span slot="title">学员管理</span>
                    </el-menu-item>
                    <el-menu-item index="/jiang">
                        <span slot="title">讲师管理</span>
                    </el-menu-item>
                    <el-menu-item index="/zhu">
                        <span slot="title">助教管理</span>
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
    name: 'CytaHome',

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

<style>
.uul>li {
    margin-left: 30px;
    padding-bottom: 20px;
}
.uul>li:hover {
    color: lightgreen;
    border-bottom: 2px solid white;
}
.logo {
    width: 50px;
    height: 30px;
    margin-right: 100px;
}
.el-menu-demo {
    background-color: #4480ce;
}
.el-menu-demo .el-menu-item {
    color: rgb(255, 255, 255);
}
.el-header, .el-footer {
    background-color: #4480ce;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    display: flex;
    align-items: center;
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