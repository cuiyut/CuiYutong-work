<template>
    <div class="tag-wrapper">
        <el-tag
        :key="item"
        v-for="item in routes"
        closable
        :disable-transitions="false"
        @close="del(item)">
        {{item}}
        </el-tag>
        <el-button type="primary" @click="qing()" v-if="routes.length">关闭所有</el-button>
    </div>
</template>

<script>

export default {
    name: 'CytbbMainTop',

    data() {
        return {

        };
    },
    computed: {
        routes:{
            get:function() {
                return this.$store.state.maintop.routes
            }
        }
    },

    mounted() {
        // console.log(this.$store.state.maintop.routes);
    },

    methods: {
        del(item) {
            this.$store.commit('maintop/del',item)
        },
        qing() {
            this.$store.commit('maintop/qing')
        }
    },
};
</script>

<style lang="scss" scoped>
.tag-wrapper {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    position: relative;
    margin-top: 20px;
}
.el-button {
    position: absolute;
    right: 20px;
}
.el-tag + .el-tag {
    margin-left: 10px;
  }
</style>