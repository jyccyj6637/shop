<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <h1>后台管理系统</h1>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple hehe">
            HAKUNA MATATA
            <a class="logout" @click.prevent="logout" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('是否确认退出并注销', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出登录!',
            duration: 1000
          })
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '未退出'
          })
        })
    }
  }
}
</script>

<style lang='less' scoped>
html,
body,
#app {
  height: 100%;
}

.el-container {
  height: 100%;

  .el-header {
    background: #b3c1cd;
  }
  .el-aside {
    background: #545c64;
    height: 100%;
  }
  .el-main {
    background: #eaeef1;
    height: 100%;
  }
}
.el-header {
  padding: 0 10px 0 0;

  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .hehe {
    color: #fff;
    text-align: right;
    line-height: 60px;
  }

  .logout {
    color: #f78514;
  }
}
</style>
