<template>
    <div class="yuan-wrapper">
        <!-- 顶部 -->
        <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/shou' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/yuan">员工管理</a></el-breadcrumb-item>
        </el-breadcrumb> 

        <!--表单  -->
        <el-form class="biaodan1"> 
            <el-input class="inp" v-model="querys.input" placeholder="账号"></el-input>
            <el-input class="inp" v-model="querys.input1" placeholder="姓名"></el-input>
            <el-button type="primary" style="height:40px" @click="getlist()">查询</el-button>
            <el-button type="primary" style="height:40px" @click='dialogFormVisible = true'>新增</el-button>
            <el-button style="height:40px" @click="chong()">重置</el-button>   
        </el-form>

        <!-- 添加 -->
        <el-dialog title="员工编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="账号" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="薪酬" :label-width="formLabelWidth">
            <el-input v-model="form.salary" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="入职时间" :label-width="formLabelWidth">
            <el-date-picker type="date" v-model="form.entryDate" placeholder="入职时间"></el-date-picker>
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
            <el-table :data="tableData" height="500" border style="width: 100%;margin-top: 20px;border-radius: 10px;">
            <el-table-column type="index" label="序号">
            </el-table-column>
            <el-table-column prop="username" label="账号">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="mobile" label="电话">
            </el-table-column>
            <el-table-column prop="salary" label="薪酬">
            </el-table-column>
            <el-table-column prop="entryDate" label="入职时间">
            </el-table-column>
            <el-table-column prop="" label="操作" width="180">
                <template slot-scope="scope">
                <el-button @click='gai(scope.row)'>编辑</el-button>
                <el-button type="danger" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
        </template>


        <!-- 修改 -->
        <el-dialog title="员工编辑" :visible.sync="editDialogFormVisible">
        <el-form :model="editForm">
            <el-form-item label="账号" :label-width="formLabelWidth">
            <el-input v-model="editForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="editForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="editForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="薪酬" :label-width="formLabelWidth">
            <el-input v-model="editForm.salary" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="入职时间" :label-width="formLabelWidth">
            <el-date-picker type="date" v-model="editForm.entryDate" placeholder="入职时间"></el-date-picker>
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
          :current-page="querys.pagenum"
          :page-sizes="[1, 10, 20, 30]"
          :page-size="querys.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="margin-top:10px"
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
            age:'',
            username :'',
            name:'',
            mobile:'',
            salary:'',
            editForm:''
        },
        editForm:{},
        formLabelWidth:"100px",
        total: 0,
        tableData: [],
        id:'',
        querys: {
            input: "",
            input1: "",
            pagenum: 1,
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
            this.$axios.post("http://vue.mengxuegu.com/pro-api/staff/list/search/1/10",this.querys).then(res => {
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
            this.querys.pagenum = val;
            this.getlist()
        },
        //添加
        async add(){
            let data = await this.$axios.post('http://vue.mengxuegu.com/pro-api/staff', this.form)
            // console.log(data);
            if(data.status === 200){
                this.$message({
                    type : 'success',
                    message:'添加成功'
                })
                this.dialogFormVisible = false
            }
        },
        // 删除
        del(row) {
            // console.log(index, row);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.delete(`http://vue.mengxuegu.com/pro-api/staff/${row.id}`).then(res => {
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
        // 数据回显
        // 修改
        gai(row) {
            this.editDialogFormVisible = true
            this.editForm = row
            this.id = row.id
        },
        dogai() {
            this.$axios.put(`http://vue.mengxuegu.com/pro-api/staff/${this.id}`).then(res => {
                this.$message({
                    type: 'success',
                    message: '修改成功'
                });
            })
            this.editDialogFormVisible = false
        },
        // 重置
        chong(){
            this.querys.input = '',
            this.querys.input1 = ''
        }
    }
  }
</script>


<style>
.biaodan1 {
    display: flex;
    margin-top: 20px;
}
.inp {
    width: 200px;
    margin-right: 10px;
}
.el-breadcrumb__inner a {
    color: white !important;
}
</style>