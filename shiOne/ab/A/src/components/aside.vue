<template>
    <div>
        <el-aside width="200px">
                <el-menu unique-opened router>
                    <el-menu-item :index="item.path" v-for="item in routes" :key="item.id">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
    </div>
</template>

<script>
export default {
    name: 'CytaaAside',

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
            this.$axios.get('/params/aside').then(res => {
                // console.log(res);
                this.routes = res.data.data.data
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 700px;
  }
</style>