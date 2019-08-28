<template>
  <div id="timeAxis">
    <div class="title">时光轴表</div>
    <el-table
      :data="tableData"
      style="width: 99%">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="info"
        label="内容"
        width="500px">
      </el-table-column>
      <el-table-column
        prop="images"
        label="图片数">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="更新时间">
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
  name: 'timeAxis',
  data() {
    return {
      tableData: [{
        title: 'qxblx',
        info: '浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮浅笑半离兮',
        images: '5',
        create_time: '2019-07-29 9:35:15',
        update_time: '2019-07-29 12:55:24'
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
  @import "../../assets/scss/managePage/timeAxis.scss";
</style>