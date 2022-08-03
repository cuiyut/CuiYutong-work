<template>
    <div class="vip-wrapper">
        <!-- 顶部 -->
        <el-card class="box-card">
            会员管理
        </el-card>

        <!--表单  -->
        <el-form class="biaodan" ref="form" label-width="80px"> 
            <el-input style="width:200px;margin-top:-60px" v-model="querys.input" placeholder="会员卡号"></el-input>
            <el-input style="width:200px;margin-top:-60px" v-model="querys.input1" placeholder="会员名字"></el-input>
            <el-select style="width:200px;margin-top:-60px" placeholder="支付类型">
                    <el-option label="现金" value="xianjin"></el-option>
                    <el-option label="微信" value="weixin"></el-option>
                    <el-option label="支付宝" value="zhifubao"></el-option>
                    <el-option label="银行卡" value="yinhangka"></el-option>
            </el-select>
            <el-date-picker type="date" style="width:200px;margin-top:-60px" placeholder="出生日期"></el-date-picker>
            <el-button type="primary" style="height:40px" @click="getlist()">查询</el-button>
            <el-button type="primary" style="height:40px" @click='dialogFormVisible = true'>新增</el-button>
            <el-button style="height:40px" @click="chong()">重置</el-button>   
        </el-form>

        <!-- 新增 -->
        <el-dialog title="会员添加" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="会员卡号" :label-width="formLabelWidth">
            <el-input v-model="form.cardNum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员生日" :label-width="formLabelWidth">
            <el-input v-model="form.birthday" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="开卡金额" :label-width="formLabelWidth">
            <el-input v-model="form.money" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="可用积分" :label-width="formLabelWidth">
            <el-input v-model="form.integral" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="支付类型" :label-width="formLabelWidth">
            <el-input v-model="form.payType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
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
            <el-table :data="tableData" height="500" border style="width: 100%;margin-top:-45px;font-size:12px;">
            <el-table-column type="index" label="序号">
            </el-table-column>
            <el-table-column prop="cardNum" label="会员卡号">
            </el-table-column>
            <el-table-column prop="name" label="会员姓名">
            </el-table-column>
            <el-table-column prop="birthday" label="会员生日">
            </el-table-column>
            <el-table-column prop="phone" label="手机号码">
            </el-table-column>
            <el-table-column prop="integral" label="可用积分">
            </el-table-column>
            <el-table-column prop="money" label="开卡金额">
            </el-table-column>
            <el-table-column prop="payType" label="支付类型">
            </el-table-column>
            <el-table-column prop="address" label="会员地址">
            </el-table-column>
            <el-table-column prop="" label="操作" width="150">
                <template slot-scope="scope">
                <el-button @click='gai(scope.row)' size="mini">编辑</el-button>
                <el-button type="danger" @click="del(scope.$index, scope.row)" size="mini">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
        </template>


        <!-- 修改 -->
        <el-dialog title="会员编辑" :visible.sync="editDialogFormVisible">
        <el-form :model="editForm">
            <el-form-item label="会员卡号" :label-width="formLabelWidth">
            <el-input v-model="editForm.cardNum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名" :label-width="formLabelWidth">
            <el-input v-model="editForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员生日" :label-width="formLabelWidth">
            <el-input v-model="editForm.birthday" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="editForm.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="开卡金额" :label-width="formLabelWidth">
            <el-input v-model="editForm.money" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="可用积分" :label-width="formLabelWidth">
            <el-input v-model="editForm.integral" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="支付类型" :label-width="formLabelWidth">
            <el-input v-model="editForm.payType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员地址" :label-width="formLabelWidth">
            <el-input v-model="editForm.address" autocomplete="off"></el-input>
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
            cardNum:'',
            name :'',
            birthday:'',
            phone:'',
            money :'',
            integral:'',
            payType:'',
            address:''
        },
        editForm:{},
        formLabelWidth:"100px",
        total: 0,
        tableData: [],
        querys: {
            input: "",
            input1: "",
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
            this.$axios.post("http://vue.mengxuegu.com/pro-api/member/list/search/1/20",this.querys).then(res => {
                // console.log(res);
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
            let data = await this.$axios.post('http://vue.mengxuegu.com/pro-api/member', this.form)
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
        // 编辑
        async dogai(){
            let data = await this.$http.put('http://vue.mengxuegu.com/pro-api/member/10')
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
            this.querys.input1 = ''
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