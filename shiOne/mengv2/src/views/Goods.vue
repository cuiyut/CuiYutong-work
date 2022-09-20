<template>
    <div class="goods-wrapper">
        <!-- 顶部 -->
        <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/shou' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/goods">商品管理</a></el-breadcrumb-item>
        </el-breadcrumb> 

        <!-- 表单 -->
        <el-form class="biaodan1" ref="form" label-width="80px"> 
            <el-input class="inp" v-model="input1" placeholder="商品名称"></el-input>
            <el-input class="inp" v-model="input2" placeholder="商品编号"></el-input>
            <el-input class="inp" v-model="input3" placeholder="请选择供应商" @focus="dialogFormVisible3 = true"></el-input>
            <el-button type="primary" style="height:40px" @click="load()">查询</el-button>
            <el-button type="primary" style="height:40px" @click="dialogFormVisible2 = true">新增</el-button>
            <el-button style="height:40px" @click="chong()">重置</el-button>   
        </el-form>



                <!-- 表格 -->
                <el-table :data="tableData" height="500" border style="width: 100%;margin-top: 20px;border-radius: 10px;">
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
                            <el-button size="mini" @click="gai(scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除
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
                style="margin-top:10px"
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
                    <el-button type="primary" @click="add()">确 定</el-button>
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
                    <el-button type="primary" @click="dogai()">确 定</el-button>
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
                                <el-button size="mini" type="success" @click="gongxz(scope.row)">选择
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
            dialogFormVisible: false,
            dialogFormVisible2: false,
            dialogFormVisible3: false,
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
    created() {
        this.load()
        this.load2()
    },
    methods: {
        // 渲染主页表格
        load() {
            this.$axios.post('http://vue.mengxuegu.com/pro-api/goods/list/search/1/10').then(res => {
                // console.log(res);
                this.tableData = res.data.data.rows
                this.total = res.data.data.total
            })
        },
        // 渲染供应商表格
        load2() {
            this.$axios.post('http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10').then(res => {
                // console.log(res);
                this.tableData2 = res.data.data.rows
                this.total2 = res.data.data.total
            })
        },
        // 重置
        chong() {
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
        },
        // 选择供应商
        gongxz(row) {
            this.input3 = row.name
            this.dialogFormVisible3 = false
        },
        // 添加
        async add() {
            let data = await this.$axios.post('http://vue.mengxuegu.com/pro-api/goods', this.form)
            // console.log(data);
            if(data.status === 200){
                this.$message({
                    type : 'success',
                    message:'添加成功'
                })
                this.dialogFormVisible2 = false
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
            }
        },
        // 主页表格分页
        handleSizeChange(val) {
            this.querys.pagesize = val
            this.load(this.querys.pagesize)
        },
        handleCurrentChange(val) {
            this.querys.pagenum = val
            this.load(this.querys.pagenum)
        },
        // 供应商表格渲染
        handleSizeChange2(val) {
            this.queryss.pagesize2 = val
            this.load2(this.queryss.pagesize2)
        },
        handleCurrentChange2(val) {
            this.queryss.pagenum2 = val
            this.load2(this.queryss.pagenum2)
        },
        // 修改
        gai(row) {
            this.dialogFormVisible = true
            this.form = row
            this.id = row.id
        },
        dogai() {
            this.$axios.put(`http://vue.mengxuegu.com/pro-api/goods/${this.id}`).then(res => {
                this.$message({
                    type: 'success',
                    message: '修改成功'
                });
            })
            this.dialogFormVisible = false
        },
        // 删除
        del(index, row) {
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
                    this.load()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
                this.load()
            });
        }
    },
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