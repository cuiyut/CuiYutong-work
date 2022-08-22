<template>
    <div>
        <div class="shang">
            <el-button type="primary" icon="el-icon-delete">删除选中</el-button>

            <el-input style="width:300px;margin-top:-50px;margin-left:20px" v-model="sou" @blur="ss()" placeholder="用户名"></el-input>
        </div>


        <el-table :data="tableData" height="550" border style="width: 100%;margin-top: 10px;">
    <el-table-column
      prop="id"
      label="ID">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="money"
      label="账户余额">
    </el-table-column>
    <el-table-column
      label="头像">
      <template slot-scope="scope">
        <img class="imgs" :src="scope.row.thumb" alt="">
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      label="状态">
      <template slot-scope="scope">
        <el-tag type="success" v-if="scope.row.state === '成功'">成功</el-tag>
        <el-tag type="danger" v-else>失败</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="注册时间">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="text" icon="el-icon-delete">删除</el-button>
        <el-button @click="gai(scope.row)" type="text" size="small" icon="el-icon-edit">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>


  <el-dialog title="编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dogai()">确 定</el-button>
  </div>
</el-dialog>


    <el-pagination
    style="margin-top:10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-size="pagesize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
</template>

<script>
import list from '../assets/table.json'

  export default {
    data() {
      return {
        pagesize:5,
        pagenum:1,
        total:0,
        dialogFormVisible:false,
        form:{},
        tableData:[],
        sou:'',
        id:'',
        formLabelWidth: '120px'
      }
    },
    mounted() {
        this.getlist()
    },
    methods: {
        getlist() {
            this.tableData = list.list
            // console.log(this.tableData);
            this.total = this.tableData.length
            let first = (this.pagenum - 1) * this.pagesize
            let last = this.pagenum * this.pagesize
            this.tableData = this.tableData.slice(first,last)
        },
        gai(val) {
            this.dialogFormVisible = true
            this.id = val.id
            this.form = val
        },
        ss() {
          this.tableData = list.list.filter(item => {
            return item.name.includes(this.sou)
          })
          if(this.sou == '') {
            this.tableData = list.list
          }
        },
        dogai() {
            this.dialogFormVisible = false
        },
        handleSizeChange(val) {
            this.pagesize = val
            this.getlist()
        },
        handleCurrentChange(val) {
            this.pagenum = val
            this.getlist()
        }
    }
  }
</script>

<style>
.imgs {
  width: 30px;
  height: 30px;
}
.shang {
    display: flex;
    width: 100%;
    height: 50px;
}
</style>