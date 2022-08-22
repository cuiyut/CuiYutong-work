<template>
    <div>
        <el-aside width="250px">
            <div class="img-wrapper">
                <img class="imgg" src="../assets/logo.png" alt="">
                imooc-admin
            </div>
            <el-menu 
            background-color="rgb(53, 66, 97)"
            text-color="white"
            unique-opened 
            router>
            <el-menu-item :index="item.path" v-for="item in dan" :key="item.id">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-submenu :index="item.id" v-for="item in routes" :key="item.id">
                <template slot="title">
                <i :class="item.icon"></i>
                <span>
                    {{item.title}}
                </span>
                </template>
                <el-menu-item-group>
                <el-menu-item :index="item1.path" v-for="item1 in item.children" :key="item1.id">
                <i :class="item1.icon"></i>
                    {{item1.title}}
                </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    name: 'MukeAside',

    data() {
        return {
            routes:[],
            dan:[]
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
                this.dan = res.data.data.dan
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.el-aside {
    background-color: rgb(53, 66, 97);
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 770px;
  }
.el-menu {
    background-color:rgb(53, 66, 97);
    color:white;
}
.imgg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.img-wrapper {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>