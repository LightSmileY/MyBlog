<template>
  <div id="message">
    <div class="title">留言表</div>
    <el-table
      :data="tableData"
      style="width: 99%">
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="message"
        label="留言内容"
        width="500px">
      </el-table-column>
      <el-table-column
        prop="time"
        label="留言时间">
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
  name: 'message',
  data() {
    return {
      tableData: [{
        username: 'qxblx',
        nickname: '浅笑半离兮',
        message: '希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~希望你幸福~',
        time: '2019-07-29 9:35:15'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      alert(returnCitySN['cip'] + returnCitySN['cname']);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/managePage/message.scss";
</style>