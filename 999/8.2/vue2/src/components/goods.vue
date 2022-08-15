<template>
    <div class="goods-wrapper">
        <!-- 顶部 -->
        <el-card class="box-card">
            供应商管理
        </el-card>

        <!-- 表单 -->
        <el-form class="biaodan" ref="form" label-width="80px"> 
            <el-input style="width:200px;margin-top:-60px" v-model="input1" placeholder="商品名称"></el-input>
            <el-input style="width:200px;margin-top:-60px" v-model="input2" placeholder="商品编号"></el-input>
            <el-input style="width:200px;margin-top:-60px" v-model="input3" placeholder="请选择供应商" @focus="dialogFormVisible3 = true"></el-input>
            <el-button type="primary" style="height:40px" @click="xr">查询</el-button>
            <el-button type="primary" style="height:40px" @click="add">新增</el-button>
            <el-button style="height:40px" @click="chong()">重置</el-button>   
        </el-form>



                <!-- 表格 -->
                <el-table :data="tableData" height="500" border style="width: 100%;margin-top:-45px">
                    <el-table-column label="序号" type="index" width="50">
                    </el-table-column>
                    <el-table-column prop="name" label="商品名称">
                    </el-table-column>
                    <el-table-column prop="code" label="商品编码">
                    </el-table-column>
                    <el-table-column prop="spec" label="商品规格">
                    </el-table-column>
                    <el-table-column prop="retailPrice" label="零售价">
                    </el-table-column>
                    <el-table-column prop="purchasePrice" label="进货价">
                    </el-table-column>
                    <el-table-column prop="storageNum" label="库存数量">
                    </el-table-column>
                    <el-table-column prop="supplierName" label="供应商">
                    </el-table-column>
                    <el-table-column prop="" label="操作" width="180">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>


                <!-- 分页 -->
                <el-pagination 
                @size-change="handleSizeChange" 
                @current-change="handleCurrentChange"
                :current-page="querys.pagenum" 
                :page-sizes="[10, 20, 30, 40]" 
                :page-size="querys.pagesize"
                layout="total, sizes, prev, pager, next, jumper" 
                :total="total"
                style="margin-top:5px"
                >
                </el-pagination>



            <!-- 添加 -->
            <el-dialog title="新增商品" :visible.sync="dialogFormVisible2">
                <el-form :model="form">
                    <el-form-item label="商品名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品编码" :label-width="formLabelWidth">
                        <el-input v-model="form.code" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品规格" :label-width="formLabelWidth">
                        <el-input v-model="form.spec" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="零售价" :label-width="formLabelWidth">
                        <el-input v-model="form.retailPrice" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="进货价" :label-width="formLabelWidth">
                        <el-input v-model="form.purchasePrice" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="库存数量" :label-width="formLabelWidth">
                        <el-input v-model="form.storageNum" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商" :label-width="formLabelWidth">
                        <el-input v-model="form.supplierName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="adds">确 定</el-button>
                </div>
            </el-dialog>



            <!-- 修改 -->
            <el-dialog title="商品编辑" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="商品名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品编码" :label-width="formLabelWidth">
                        <el-input v-model="form.code" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品规格" :label-width="formLabelWidth">
                        <el-input v-model="form.spec" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="零售价" :label-width="formLabelWidth">
                        <el-input v-model="form.retailPrice" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="进货价" :label-width="formLabelWidth">
                        <el-input v-model="form.purchasePrice" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="库存数量" :label-width="formLabelWidth">
                        <el-input v-model="form.storageNum" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="供应商" :label-width="formLabelWidth">
                        <el-input v-model="form.supplierName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                </div>
            </el-dialog>




            <!-- 选择供应商 -->
            <el-dialog title="选择供应商" :visible.sync="dialogFormVisible3">
                <template>
                    <el-table :data="tableData2" height="320" border style="width: 100%">
                        <el-table-column label="序号" type="index" width="50">
                        </el-table-column>
                        <el-table-column prop="name" label="供应商名称">
                        </el-table-column>
                        <el-table-column prop="linkman" label="联系人">
                        </el-table-column>
                        <el-table-column prop="" label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini" type="success" @click="xzzz(scope.$index, scope.row)">选择
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>


                <el-pagination 
                @size-change="handleSizeChange2" 
                @current-change="handleCurrentChange2"
                :current-page="queryss.pagenum2" 
                :page-sizes="[10, 20, 30, 40]" 
                :page-size="queryss.pagesize2"
                layout="total, sizes, prev, pager, next, jumper" 
                :total="total2"
                style="margin-top:5px"
                >
                </el-pagination>

            </el-dialog>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
            tableData2: [],
            querys: {
                pagenum: 1,
                pagesize: 10,
            },
            queryss:{
                pagenum2: 1,
                pagesize2: 10,
            },
            total: 0,
            total2: 0,
            dialogFormVisible: false,
            dialogFormVisible2: false,
            dialogFormVisible3: false,
            form: {
                cardNum: '',
                name: '',
                birthday: '',
                phone: '',
                money: '0',
                integral: '0',
                payType: '',
                address: ''
            },
            formLabelWidth: '120px',
            id: '',
            input1: '',
            input2: '',
            input3: '',
        }
    },
    mounted() {
        this.xr()
        this.xr2()
    },
    methods: {
        xr() {
            this.$axios.post(`http://vue.mengxuegu.com/pro-api/goods/list/search/${querys.pagenum}/${querys.pagesize}`).then(res => {
                // console.log(res);
                this.tableData = res.data.data.rows
                this.total = res.data.data.total
            })
        },
        xr2() {
            this.$axios.post(`http://vue.mengxuegu.com/pro-api/supplier/list/search/${querys.pagenum}/${querys.pagesize}`).then(res => {
                // console.log(res);
                this.tableData2 = res.data.data.rows
                this.total2 = res.data.data.total
            })
        },
        chong() {
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
        },
        xzzz(index, row) {
            this.input3 = row.name
            this.dialogFormVisible3 = false
        },
        add() {
            this.dialogFormVisible2 = true
            this.form = {
                cardNum: '',
                name: '',
                birthday: '',
                phone: '',
                money: '0',
                integral: '0',
                payType: '',
                address: ''
            }
        },
        adds() {
            this.$axios.post('http://vue.mengxuegu.com/pro-api/goods').then(res => {
                console.log(res);
            })
            this.dialogFormVisible2 = false
        },
        handleSizeChange(val) {
            this.querys.pagesize = val
            this.xr(this.querys.pagesize)
        },
        handleCurrentChange(val) {
            this.querys.pagenum = val
            this.xr(this.querys.pagenum)
        },
        handleSizeChange2(val) {
            this.queryss.pagesize2 = val
            this.xr2(this.queryss.pagesize2)
        },
        handleCurrentChange2(val) {
            this.queryss.pagenum2 = val
            this.xr2(this.queryss.pagenum2)
        },
        handleEdit(index, row) {
            this.dialogFormVisible = true
            this.form = row
            this.id = row.id
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.delete(`http://vue.mengxuegu.com/pro-api/goods/${row.id}`).then(res => {
                    if (res.status == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    this.xr()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
                this.xr()
            });
        },
        onSubmit() {
            this.$axios.put(`http://vue.mengxuegu.com/pro-api/goods/${this.id}`).then(res => {
            })
            this.dialogFormVisible = false
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
    },
}
</script>


</style>
.box-card {
    width: 100%;
    height: 40px;
    line-height: 0px;
    text-align: left;
    margin-bottom: 10px;
  }
</style>