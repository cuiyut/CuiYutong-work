<template>
  <div class="home-wrapper">
    <el-container>
    <el-header>
      <span class="logo">梦学谷会员管理系统</span>
        <el-button type="danger" @click="$router.push('/')" style="float:right;margin-top:10px">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu unique-opened router>
        <el-menu-item index="/shou">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/vip">
          <i class="el-icon-user-solid"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
        <el-menu-item index="/gong">
          <i class="el-icon-shopping-bag-1"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <i class="el-icon-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/yuan">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
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
* {
  margin: 0;
  padding: 0;
}
.logo {
    float: left;
    font-size: 30px;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
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