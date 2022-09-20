<template>
  <div class="home-wrapper">
    <el-container>
    <el-header>
      <span class="logo">梦学谷会员管理系统</span>


    <el-dropdown style="float:right;color:white;margin-right:20px">
        <span class="el-dropdown-link">
            小崔<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/">退出</router-link>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>


    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu unique-opened router>
            <el-menu-item :index="item.path" v-for="item in routes" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
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
      routes:[]
    };
  },

  mounted() {
    this.getlist()
  },

  methods: {
    getlist() {
        this.$axios.get('/aside').then(res => {
            // console.log(res);
            this.routes = res.data.data.data
        })
    }
  },
};
</script>

<style>
.logo {
    float: left;
    font-size: 30px;
    margin-left: 30px;
}
.el-menu-item {
  color: white !important;
}
.el-menu {
   background-color: #323840 !important;
}
  .el-header {
    background-color: #323840;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #323840;
    text-align: center;
    line-height: 200px;
    height: 700px;
  }
  
  .el-main {
    background-color: #5f6d7b;
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