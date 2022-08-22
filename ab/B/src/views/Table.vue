<template>
    <div class="table-wrapper">
        <div class="sou">
            <el-button type="primary" icon="el-icon-delete">删除选中</el-button>
            <el-select v-model="adds" placeholder="地址" class="adds">
                <el-option label="广东省" value="广东省"></el-option>
                <el-option label="湖南省" value="湖南省"></el-option>
                <el-option label="福建省" value="福建省"></el-option>
            </el-select>
            <el-input v-model="namee" class="name" placeholder="用户名" @blur="sou()"></el-input>
        </div>


        <el-table :data="tableData" style="width: 100%;margin-top: 20px;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="ID">
            </el-table-column>
            <el-table-column prop="name" label="用户名">
            </el-table-column>
            <el-table-column prop="money" label="账户余额">
            <template slot-scope="scope">
                ￥{{scope.row.money}}
            </template>
            </el-table-column>
            <el-table-column prop="thumb" label="头像(查看大图)">
            <template slot-scope="scope">
                <el-image
                    class="imgg"
                    :src="scope.row.thumb"
                    :preview-src-list="[scope.row.thumb]"
                >
                </el-image>
            </template>
            </el-table-column>
            <el-table-column prop="address" label="地址" width="160">
            </el-table-column>
            <el-table-column prop="state" label="状态">
            <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.state === '成功'">成功</el-tag>
                <el-tag type="danger" v-else>失败</el-tag>
            </template>
            </el-table-column>
            <el-table-column prop="date" label="注册时间">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="130">
            <template slot-scope="scope">
                <el-button @click="gai(scope.row)" type="text" icon="el-icon-edit" size="small">编辑</el-button>
                <el-button type="text" style="color:red" icon="el-icon-delete" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>


        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
            <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dogai()">确 定</el-button>
        </div>
        </el-dialog>


        <el-pagination
        class="fen"
        background
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-size="pagesize"
        layout="prev, pager, next"
        :total="total">
        </el-pagination>

    </div>
</template>

<script>
export default {
    name: 'CytbbTable',

    data() {
        return {
            dialogFormVisible:false,
            namee:'',
            tableData:[],
            tableData1:[],
            pagenum:1,
            pagesize:5,
            total:0,
            adds:'',
            form: {
                name:'',
                address:''
            }
        };
    },

    mounted() {
        this.getlist()
    },

    methods: {
        getlist() {
            this.$axios.get('/params/biao').then(res => {
                // console.log(res);
                this.tableData1 = res.data.data.data
                this.total = res.data.data.data.length
                let kai = (this.pagenum - 1) * this.pagesize
                let jie = this.pagenum * this.pagesize
                this.tableData = this.tableData1.slice(kai,jie)
            })
        },
        sou() {
            this.tableData = this.tableData1.filter(item => {
                return item.name.includes(this.namee)
            })
            if(this.namee == '') {
                this.getlist()
            }
        },
        gai(row) {
            this.dialogFormVisible = true
            this.form = row
        },
        dogai() {
            this.dialogFormVisible = false
        },
        handleCurrentChange(val) {
            this.pagenum = val
            this.getlist()
        }
    },
};
</script>

<style lang="scss" scoped>
.sou {
    display: flex;
}
.name {
    width: 250px;
    margin-left: 15px;
}
.adds {
    width: 150px;
    margin-left: 15px;
}
.fen {
    margin-top: 20px;
    float: left;
}
.imgg {
    width: 40px;
    height: 40px;
}
</style>