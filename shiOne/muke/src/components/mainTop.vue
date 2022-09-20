<template>
    <div class="maintop-wrapper">
        <div class="shous">
            <i class="el-icon-s-fold"></i>
            <i class="el-icon-s-unfold"></i>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">{{}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MukeMainTop',

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
.maintop-wrapper {
    margin-bottom: 20px;
}
.shous {
    display: flex;
    align-items: center;
    i {
        font-size: 35px;
        margin-right: 20px;
    }
}
</style>