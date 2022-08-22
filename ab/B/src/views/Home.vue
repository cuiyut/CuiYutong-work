<template>
    <div>
        <Headerr />
        <el-container>
            <Asidee />
            <el-main>
                <main-top />
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Asidee from '../components/Aside.vue'
import Headerr from '../components/Header.vue';
import mainTop from '../views/mainTop.vue';

export default {
    name: 'CytbbHome',

    components:{
        Asidee,
        Headerr,
        mainTop
    },

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

  
  .el-main {
    background-color: #ffffff;
    color: #333;
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