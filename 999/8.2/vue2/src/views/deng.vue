<template>
    <div class="deng-wrapper">
        <div class="kuang">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForms" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="deng()">登录</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {

    },
    methods: {
        deng() {
            this.$refs.ruleForms.validate(valid => {
                if (!valid) return
                this.$axios.post('http://vue.mengxuegu.com/pro-api/user/login',this.ruleForm).then(res => {
                    // console.log(res);
                    if(res.status === 200) {
                        this.$message.success(res.data.message);
                        this.$router.push('/home')
                    }else {
                        this.$message.error(res.data.message);
                        return false
                    }
                })
            });
        },
    },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.deng-wrapper {
    width: 1300px;
    height: 750px;
    background: linear-gradient(rgb(207, 157, 157),rgb(212, 126, 126));
    box-sizing: border-box;
    padding-top: 100px;
}
.kuang {
    width: 500px;
    height: 210px;
    background: white;
    margin: auto;
    box-sizing: border-box;
    padding-top: 30px;
    padding-right: 50px;
    border-radius: 20px;
}
</style>
