<template>
  <div id="article">
    <div class="title">文章表</div>
    <el-table
      :data="tableData"
      style="width: 99%">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="80px">
      </el-table-column>
      <el-table-column
        prop="body"
        label="主体"
        width="400px">
      </el-table-column>
      <el-table-column
        prop="images"
        label="图片数"
        width="80px">
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
        prop="views"
        label="浏览量"
        width="65px">
      </el-table-column>
      <el-table-column
        prop="likes"
        label="点赞数"
        width="65px">
      </el-table-column>
      <el-table-column
        prop="comments"
        label="评论数"
        width="65px">
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
  name: 'article',
  data() {
    return {
      tableData: [{
        title: 'mpvue开发微信小程序',
        type: '技术分享',
        body: '美团点评团队出品的小程序开发框架：mpvue。为什么说WePY是一个“类Vue”的框架，而这个mpvue是“基于Vue”的框架呢？因为WePY是在代码开发风格上借鉴了Vue，本身和Vue没有什么关系；而这个mpvue是从整个Vue的核心代码上经过二次开发而形成的一个框架，相当于是给Vue本身赋能，增加了开发微信小程序的能力。美团点评团队出品的小程序开发框架：mpvue。为什么说WePY是一个“类Vue”的框架，而这个mpvue是“基于Vue”的框架呢？因为WePY是在代码开发风格上借鉴了Vue，本身和Vue没有什么关系；而这个mpvue是从整个Vue的核心代码上经过二次开发而形成的一个框架，相当于是给Vue本身赋能，增加了开发微信小程序的能力。',
        images: '5',
        create_time: '2019-07-29 9:35:15',
        update_time: '2019-07-29 12:55:24',
        views: '245',
        likes: '37',
        comments: '45'
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
  @import "../../assets/scss/managePage/article.scss";
</style>