<template>
        <el-header>
            <img class="logo" src="../assets/logo.png" alt="">
            <ul class="uul" v-for="item in headerr" :key="item.id">
                <li :class="item.icon">{{item.title}}</li>
            </ul>
        </el-header>
</template>

<script>
export default {
    name: 'CytaaHeader',

    data() {
        return {
            headerr:[],
        };
    },
    mounted() {
        this.getlist()
    },
    methods: {
        getlist() {
            this.$axios.get('/params/top').then(res => {
                // console.log(res);
                this.headerr = res.data.data.data
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.uul>li {
    margin-left: 30px;
    padding-bottom: 20px;
}
.uul>li:hover {
    color: lightgreen;
    border-bottom: 2px solid white;
}
.logo {
    width: 50px;
    height: 30px;
    margin-right: 100px;
}
.el-header {
    background-color: #4480ce;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    display: flex;
    align-items: center;
  }
</style>