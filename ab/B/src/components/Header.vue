<template>
    <div>
        <el-header>
            <p class="left">
                <i class="el-icon-s-fold"></i>
                <span>后台管理系统</span>
            </p>
            <p class="right">
                <i class="el-icon-rank"></i>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        崔宇彤<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>退出</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </p>
        </el-header>
    </div>
</template>

<script>
export default {
    name: 'CytbbHeader',

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

<style lang="scss" scoped>
.el-header {
    background-color: #3c597d;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-dropdown {
    color: white;
  }
  .left {
    font-size: 25px;
    width: 190px;
    display: flex;
    margin-left: 30px;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    font-size: 15px;
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
  }
</style>