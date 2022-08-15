<template>
    <div class="my-wrapper">
        <div class="shang">
            登录
        </div>
        用户：<input type="text" v-model="user"><br />
        手机号：<input type="text" v-model="shou"><br />
        <button class="deng" @click="deng()">登录</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            user:'',
            shou:''
        };
    },

    mounted() {
        
    },

    methods: {
        deng() {
            if(this.user == '' || this.shou == '') {
                alert('内容不能为空')
                return false
            }else {
                this.$router.push('/home')
            }
        }
    },
};
</script>

<style>
.my-wrapper {
    width: 500px;
    margin: auto;
}
.shang {
    width: 100%;
    background: red;
    height: 50px;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
}
input {
    margin-top: 20px;
}
.deng {
    width: 200px;
    margin-top: 20px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
}
</style>