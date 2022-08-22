<template>
    <div>
        <el-container>
            <Asidee />
            <el-main>
                <MainTop />
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>



<script>
import Asidee from '@/components/Aside.vue';
import MainTop from '@/components/mainTop.vue';

export default {
    name: "MukeHome",

    data() {
        return {

        };
    },

    components: {
        Asidee,
        MainTop
    },

    mounted() {

    },

    methods: {

    },
};
</script>



<style lang="scss" scoped>
  
  
  .el-main {
    background-color: white;
    color: #333;
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