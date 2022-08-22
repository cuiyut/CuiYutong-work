<template>
    <div class="students-wrapper">
        <el-breadcrumb>
        <el-breadcrumb-item><b>学员管理</b></el-breadcrumb-item>
        </el-breadcrumb>

        <div class="sou-wrapper">
                <el-select class="ff" v-model="status" placeholder="请输入学生状态">
                    <el-option label="启用" value="1"></el-option>
                    <el-option label="禁用" value="0"></el-option>
                </el-select>
                <el-input class="ff" v-model="nickname" placeholder="请输入学生名称"></el-input>
                <el-input class="ff" v-model="mobile" placeholder="请输入学生电话"></el-input>
                <el-button icon="el-icon-edit" class="btn" @click="souall()">搜索</el-button>
                <el-button icon="el-icon-refresh" class="btn" @click="chong()">重置</el-button>
        </div>

        <div class="btn-wrapper">
            <el-button type="primary">新增学员</el-button>
            <el-button type="primary">批量导入</el-button>
            <el-button type="primary">批量导入</el-button>
            <el-button type="primary">查看报表</el-button>
        </div>

        <div>
            <el-table :data="tableData" border style="width: 100%;margin-top: 10px;">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column label="学生名称">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" alt="" class="imggs">
                    <span>{{scope.row.nickname}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="mobile" label="手机号" align="center">
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.status === 1">启用</span>
                    <span v-else>禁用</span>
                </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间" align="center">
                <template slot-scope="{row:{created_at}}">
                    {{new Date(Number(created_at)*1000).toLocaleString()}}
                </template>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="280" align="center">
            <template slot-scope="scope">
                <el-button type="text" size="small">详情</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" v-if="scope.row.status === 1">禁用</el-button>
                <el-button type="text" size="small" v-else>启用</el-button>
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">重置密码</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>

        <el-pagination
        style="margin-top:10px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[1, 2, 5, 7]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>

    </div>
</template>

<script>

export default {
    name: 'CytaaStudents',

    data() {
        return {
            tableData:[],
            tableData1:[],
            nickname: '',
            status: '',
            mobile:'',
            total:0,
            pagenum:1,
            pagesize:6
        };
    },

    mounted() {
        this.getlist()
    },

    methods: {
        getlist() {
            this.$axios.get('/params/table').then(res => {
                // console.log(res);
                this.tableData1 = res.data.data.data
                this.total = res.data.data.data.length
                let frist = (this.pagenum - 1) * this.pagesize
                let last = this.pagenum * this.pagesize
                this.tableData = this.tableData1.slice(frist,last)
            }) 
        },
        souall() {
            let status = this.status
            let nickname = this.nickname
            let mobile = this.mobile
            switch(status,nickname,mobile) {
                case (status || status === 0) && nickname && mobile:
                    this.zms()
                    break;
                case (status || status === 0) && nickname:
                    this.zm()
                    break;
                case (status || status === 0) && mobile:
                    this.zs()
                    break;
                case nickname && mobile:
                    this.ms()
                    break;
                case nickname:
                    this.m()
                    break;
                case mobile:
                    this.s()
                    break;
                case (status || status === 0):
                    this.z()
                    break;
            }
        },
        // 状态
        z() {
            this.tableData = this.tableData1.filter(item => {
                return item.status == this.status
            })
        },
        // 名字
        m() {
            this.tableData = this.tableData1.filter(item => {
                return item.nickname.includes(this.nickname)
            })
        },
        // 手机号
        s() {
            this.tableData = this.tableData1.filter(item => {
                return item.mobile.includes(this.mobile)
            })
        },
        // 状态+名字
        zm() {
            var tableData2 = this.tableData1.filter(item => {
                return item.status == this.status
            })
            this.tableData = tableData2.filter(item => {
                return item.nickname.includes(this.nickname)
            })
        },
        // 状态+手机号
        zs() {
            var tableData2 = this.tableData1.filter(item => {
                return item.status == this.status
            })
            this.tableData = tableData2.filter(item => {
                return item.mobile.includes(this.mobile)
            })
        },
        // 名字+手机号
        ms() {
            var tableData2 = this.tableData1.filter(item => {
                return item.nickname.includes(this.nickname)
            })
            this.tableData = tableData2.filter(item => {
                return item.mobile.includes(this.mobile)
            })
        },
        // 状态+名字+手机号
        zms() {
            var tableData3 = this.tableData1.filter(item => {
                return item.status == this.status
            })
            var tableData2 = tableData3.filter(item => {
                return item.nickname.includes(this.nickname)
            })
            this.tableData = tableData2.filter(item => {
                return item.mobile.includes(this.mobile)
            })
        },
        handleSizeChange(val) {
            this.pagesize = val
            this.getlist()
        },
        handleCurrentChange(val) {
            this.pagenum = val
            this.getlist()
        },
        chong() {
            this.getlist()
            this.mobile = ''
            this.nickname = ''
            this.status = ''
        },
    },
};
</script>

<style lang="scss" scoped>
.sou-wrapper {
    display: flex;
    width: 100%;
}
.ff {
    width: 200px;
    margin-right: 10px;
    margin-top: 20px;
}
.btn {
    width: 90px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    text-align: center;
}
.btn-wrapper {
    display: flex;
    width: 100%;
    margin-top:20px;
}
.imggs {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
}
</style>