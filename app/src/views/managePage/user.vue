<template>
  <div id="user">
    <div class="title">
      用户表
      <div class="add">
        <el-button type="primary" size="mini">添加</el-button>
      </div>
    </div>
    <el-table
      :data="users"
      style="width: 99%">
      <el-table-column
        prop="username"
        label="用户名"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册时间">
      </el-table-column>
      <el-table-column
        prop="last_login_time"
        label="最近登录时间">
      </el-table-column>
      <el-table-column
        prop="isAdmin"
        label="管理员"
        width="80px"
        :formatter="formatBoolean">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120px">
      </el-table-column>
      <el-table-column 
      label="操作"
      width="150px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size="8"
      :total="10">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'user',
  data() {
    return {
      users: []
    }
  },
  beforeMount(){
    // let _this = this
    // this.$axios.get('http://qxblx.site:3000/user/getAll')
    // .then(res => {
    //   console.log(res)
    //   _this.users = res.data.users
    // })
    // .catch(error => {
    //   console.log("获取失败");
    // });

  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    formatBoolean(row, column, cellValue){
      let ret = ''  
      if (cellValue) {
          ret = "是"  
      } else {
          ret = "否"
      }
      return ret;
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/managePage/user.scss";
</style>