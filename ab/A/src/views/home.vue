<template>
    <div>
        <Headerr />
        <el-container>
            <Asidee />
            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Headerr from '../components/header.vue';
import Asidee from '../components/aside.vue';
export default {
    components: { 
        Headerr,
        Asidee
    },
    name: 'CytaaHome',
};
</script>

<style lang="scss" scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 100px;
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