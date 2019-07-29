<template>
  <el-form
    :model="loginForm"
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="demo-loginForm"
  >
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="name">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click.prevent="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loginForm: {
        name: 'admin',
        password: '123456'
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    startLogin () {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          console.log('登录失败')
          return false
        }
        axios
          .post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            if (res.data.meta.status === 200) {
              this.$message({
                message: '登录成功',
                type: 'success',
                duration: 1000
              })
              this.$router.push('/home')
            } else {
              this.$message({
                message: '登录失败',
                type: 'error',
                duration: 1000
              })
            }
          })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.el-col {
  border-radius: 20px;
  background: #fff;
  padding: 30px 20px;
}

.el-form {
  height: 100%;
  background: #545c64;
  .el-row {
    height: 100%;
  }
}
</style>
