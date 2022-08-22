<template>
    <div class="login-wrapper">
        <div class="login">
            <p class="p">用户登录</p>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
                <el-input prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="deng()">立即创建</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MukeLogin',

    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        };
    },

    mounted() {
        
    },

    methods: {
        deng() {
            if(this.form.username == '' || this.form.password == '') {
                this.$message({
                    message: '不能为空',
                    type: 'warning'
                });
            }else {
                // this.$axios.post('/sys/login',this.form).then(res => {
                //     console.log(res);
                // })
                this.$router.push('/home')
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
    width: 100%;
    height: 775px;
    background: rgb(53, 66, 97);
    box-sizing: border-box;
    padding-top: 200px;
}
.login {
    width: 490px;
    height: 400px;
    margin: 0 380px;
}
.el-button {
    width: 100%;
}
.p {
    color: white;
    margin-bottom: 20px;
    font-size: 25px;
    margin-left: 35px;
}
</style>