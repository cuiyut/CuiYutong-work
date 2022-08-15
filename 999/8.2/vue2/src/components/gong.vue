<template>
    <div class="gong-wrapper">
        <!-- 顶部 -->
        <el-card class="box-card">
            供应商管理
        </el-card>

        <!--表单  -->
        <el-form class="biaodan" ref="form" label-width="80px"> 
            <el-input style="width:200px;margin-top:-60px" v-model="querys.input" placeholder="供应商名称"></el-input>
            <el-input style="width:200px;margin-top:-60px" v-model="querys.input1" placeholder="联系人"></el-input>
            <el-input style="width:200px;margin-top:-60px" v-model="querys.input2" placeholder="联系电话"></el-input>
            <el-button type="primary" style="height:40px" @click="getlist()">查询</el-button>
            <el-button type="primary" style="height:40px" @click='dialogFormVisible = true'>新增</el-button>
            <el-button style="height:40px" @click="chong()">重置</el-button>   
        </el-form>

        <!-- 添加 -->
        <el-dialog title="供应商编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="供应商名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系人" :label-width="formLabelWidth">
            <el-input v-model="form.linkman" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remark"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" 
            @click='add()'>确 定</el-button
            >
        </div>
        </el-dialog>
        


        <!-- 表格 -->
        <template>
            <el-table :data="tableData" height="500" border style="width: 100%;margin-top:-45px">
            <el-table-column type="index" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="供应商名称">
            </el-table-column>
            <el-table-column prop="linkman" label="联系人">
            </el-table-column>
            <el-table-column prop="mobile" label="联系电话">
            </el-table-column>
            <el-table-column prop="remark" label="备注">
            </el-table-column>
            <el-table-column prop="" label="操作" width="180">
                <template slot-scope="scope">
                <el-button @click='gai(scope.row)'>编辑</el-button>
                <el-button type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
        </template>


        <!-- 修改 -->
        <el-dialog title="会员编辑" :visible.sync="editDialogFormVisible">
        <el-form :model="editForm">
            <el-form-item label="供应商名称" :label-width="formLabelWidth">
            <el-input v-model="editForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系人" :label-width="formLabelWidth">
            <el-input v-model="editForm.linkman" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="editForm.remark"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" 
            @click='dogai()'>确 定</el-button
            >
        </div>
        </el-dialog>


        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="querys.currentPage"
          :page-sizes="[1, 10, 20, 30]"
          :page-size="querys.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="margin-top:5px"
        >
        </el-pagination>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible : false,
        editDialogFormVisible :false,
        form: {
            linkman:'',
            mobile :'',
            name:'',
            remark:''
        },
        editForm:{},
        formLabelWidth:"100px",
        total: 0,
        tableData: [],
        querys: {
            input: "",
            input1: "",
            input2:"",
            currentPage: 1,
            pagesize: 10
        }
      }
    },
    mounted() {
        this.getlist()
    },
    methods: {
        // 渲染
        async getlist() {
            this.$axios.post("http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10",this.querys).then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.tableData = res.data.data.rows;
                    this.total = res.data.data.total;
                }
            })
        },
        // 分页
        handleSizeChange(val) {
            this.querys.pagesize = val;
            this.getlist()
        },
        handleCurrentChange(val) {
            this.querys.currentPage = val;
            this.getlist()
        },
        //添加
        async add(){
            let data = await this.$axios.post('http://vue.mengxuegu.com/pro-api/supplier', this.form)
            // console.log(data);
            if(data.status === 200){
                this.$message({
                    type : 'success',
                    message:'添加成功'
                })
                this.dialogFormVisible=false
            }
        },
        // 删除
        del(index, row) {
            // console.log(index, row);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.delete(`http://vue.mengxuegu.com/pro-api/supplier/${row.id}`).then(res => {
                    if (res.status == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    this.getlist()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
                this.getlist()
            });
        },
        // 编辑
        async dogai(){
            let data = await this.$http.put('http://vue.mengxuegu.com/pro-api/supplier/10')
            // console.log(data);
            if(data.status === 200){
                this.$message({
                    type : 'success',
                    message:'更新成功'
                })
            }
            this.editDialogFormVisible = false
        },
        // 数据回显
        gai(val){
            this.editDialogFormVisible = true
            this.editForm = val
        },
        // 重置
        chong(){
            this.querys.input = '',
            this.querys.input1 = '',
            this.querys.input2 = ''
        }
    }
  }
</script>


<style>
* {
    margin: 0;
    padding: 0;
}
.biaodan {
    display: flex;
    justify-content: space-around;
}


  .box-card {
    width: 100%;
    height: 40px;
    line-height: 0px;
    text-align: left;
    margin-bottom: 10px;
  }
</style>