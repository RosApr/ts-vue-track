<template>
    <el-container direction="vertical">
        <el-header>
            <img src="../assets/images/logo.png" alt="">
            <a href="http://www.eyangmedia.com" target="_blank"><i aria-hidden="true" class="fa fa-globe"></i> 易扬技术官网</a>
        </el-header>
        <el-main>
            <div class="login-box">
                <i aria-hidden="true" class="fa fa-user-circle-o"></i>
                <p>易扬监测平台</p>
                <el-form ref="form" :model="form" label-width="40px">
                    <div class="item">
                        <el-input v-model="form.username" placeholder="请输入用户名">
                            <template slot="prepend"><i aria-hidden="true" class="fa fa-user prepend"></i></template>
                        </el-input>
                    </div>
                    <div class="item">
                        <el-input v-model="form.password" type="password" placeholder="请输入密码" @keyup.enter.native="handleLogin">
                            <template slot="prepend"><i aria-hidden="true" class="fa fa-key prepend"></i></template>
                        </el-input>
                    </div>
                </el-form>
                <el-button type="warning" @click="handleLogin">登录</el-button>
                <p class="errmsg">{{errMsg}}</p>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator';
    import { login } from "@/service/user.ts"

    export default class Login extends Vue {
        form = {
            username: "",
            password: ""
        }
        errMsg = ""
        async handleLogin(){
            console.log(this.form)
            // const loginRes = await login(this.form)
            // console.log(loginRes)
            // sessionStorage.setItem("username", this.form.username)
            // this.setIsBLROLEToCookie()
            // this.$router.push({path: '/advAdmin'});
        }

    }
</script>

<style scoped lang="less">
    .el-header{
        line-height: 60px;
        background: #d3dce6;
        padding: 0 40px;
        .s {

        }
    }
    .el-header > img {
        height: 60px;
        padding: 10px 0;
    }
    .el-header > a{
        float: right;
        font-weight: 500;
        font-size: 1.2rem;
        color: #2c3e50;
    }
    .el-container{
        height: 100%;
    }
    .el-main{
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-box{
        border: 1px solid #ddd;
        padding: 30px;
        min-width: 450px;
        text-align: center;
    }
    .login-box > i{
        font-size: 4rem;
    }
    .login-box > p{
        font-size: 24px;
        font-weight: 500;
        margin-top: 20px;
    }
    .login-box .el-form{
        margin: 30px auto 0;
    }
    .login-box .el-form .item{
        margin-bottom: 22px;
    }
    .login-box .el-button{
        width: 100%;
    }
    .login-box .errmsg{
        font-size: 14px;
        color: #F56C6C;
    }
    .prepend{
        width: 14px;
    }
</style>

