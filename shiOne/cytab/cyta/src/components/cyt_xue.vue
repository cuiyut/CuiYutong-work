<template>
    <div>
        <el-breadcrumb>
        <el-breadcrumb-item><b>学员管理</b></el-breadcrumb-item>
        </el-breadcrumb>

        <div class="sou-wrapper">
            <el-select class="xial"  v-model="status" placeholder="请选择">
                <el-option label="启用" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
            </el-select>
            <el-input class="xial" v-model="nickname" placeholder="请输入学生关键字"></el-input>
            <el-input class="xial" v-model="mobile" placeholder="请输入手机号"></el-input>
            <el-button class="btn" icon="el-icon-search" @click="sou()">搜索</el-button>
            <el-button class="btn" icon="el-icon-refresh" @click="chong()">重置</el-button>
        </div>

        <div class="btn-wrapper">
            <el-button type="primary">新增学员</el-button>
            <el-button type="primary">批量导入</el-button>
            <el-button type="primary">批量导出</el-button>
            <el-button type="primary">查看报表</el-button>
        </div>


         <el-table :data="tableData" border height="470" style="width: 100%;margin-top: 10px;">
            <el-table-column label="学生名称">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" alt="" class="imggs">
                    <span>{{scope.row.nickname}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="mobile" label="手机号">
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    <span v-if="scope.row.status == 1">启用</span>
                    <span v-else>禁用</span>
                </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间">
                <template slot-scope="{row:{created_at}}">
                    {{new Date(Number(created_at)).toLocaleString()}}
                </template>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="280">
            <template>
                <el-button type="text" size="small">详情</el-button>-
                <el-button type="text" size="small">编辑</el-button>-
                <el-button type="text" size="small">禁用</el-button>-
                <el-button type="text" size="small">删除</el-button>-
                <el-button type="text" size="small">重置密码</el-button>
            </template>
            </el-table-column>
        </el-table>


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
import list from '../assets/list.json'

export default {
    name: 'CytaCytXue',

    data() {
        return {
            total:0,
            nickname:'',
            status:'',
            mobile:'',
            tableData:[],
            pagenum:1,
            pagesize:6
        };
    },

    mounted() {
        this.getlist()
    },
 
    methods: {
        getlist() {
            // console.log(list);
            this.tableData = list
            this.total = list.length
            let frist = (this.pagenum - 1) * this.pagesize
            let last = this.pagenum * this.pagesize
            this.tableData = this.tableData.slice(frist,last)
        },
        sou() {
            if(this.status != '') {
                this.tableData = list.filter(item => {
                    return item.status == this.status
                })
            }
            if(this.nickname != '') {
                this.tableData = list.filter(item => {
                    return item.nickname.includes(this.nickname)
                })
            }
            if(this.mobile != '') {
                this.tableData = list.filter(item => {
                    return item.mobile.includes(this.mobile)
                })
            }
        },
        chong() {
            this.getlist()
            this.mobile = ''
            this.nickname = ''
            this.status = ''
        },
        handleSizeChange(val) {
            this.pagesize = val
            this.getlist()
        },
        handleCurrentChange(val) {
            this.pagenum = val
            this.getlist()
        }
    },
};
</script>

<style scoped>
.imggs {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
}
.btn-wrapper {
    display: flex;
    width: 100%;
    margin-top: -45px;
}
.sou-wrapper {
    display: flex;
    width: 100%;
    /* height: 50px; */
}
.xial {
    width:200px;
    margin-top:-50px;
    margin-right: 20px;
}
.btn {
    width: 90px;
    height: 40px;
    margin-top: 10px;
}
</style>