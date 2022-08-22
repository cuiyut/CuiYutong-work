<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未读消息" name="first" />
            <el-tab-pane label="已读消息" name="second" />
            <el-tab-pane label="回收站" name="third" />
            <el-table :data="tableData" style="width: 100%;margin-top: -30px;">
                <el-table-column prop="title"></el-table-column>
                <el-table-column prop="date" width="200"></el-table-column>
                <el-table-column
                fixed="right"
                width="150">
                <template slot-scope="scope">
                    <el-button v-if="weidu" @click="yd(scope.row)" size="small">标为已读</el-button>
                    <div class="yd" v-if="yidu">
                        <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
                        <el-button @click="hy1(scope.row)" size="small">还原</el-button>
                    </div>
                    <el-button v-if="huishou" @click="hy2(scope.row)" size="small"> 还原 </el-button>
                </template>
                </el-table-column>
            </el-table>

            <el-pagination
            class="fen"
            background
            @current-change="handleCurrentChange"
            :current-page="pagenum"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="tableData.length">
            </el-pagination>

            <div class="btns">
                <el-button type="primary" v-if="weidu" @click="ydall()">全部标为已读</el-button>
                <el-button type="danger" v-if="yidu" @click="delall()">全部删除</el-button>
                <el-button type="primary" v-if="huishou" @click="hyall()">全部还原</el-button>
            </div>
        </el-tabs>
    </div>
</template>

<script>

export default {
    name: 'CytbbTab',

    data() {
        return {
            activeName: 'first',
            tableData:[],
            total:0,
            pagenum:1,
            pagesize:5,
            weidu:true,
            yidu:false,
            huishou:false
        };
    },

    // computed: {
    //     tableData:{
    //         get:function() {
    //             return this.$store.state.tab.weidu
    //         }
    //     }
    // },

    mounted() {
        this.getlist()
    },

    methods: {
        getlist() {
            this.$axios.get('/params/tab').then(res => {
                // console.log(res);
                this.tableData = res.data.data.unread
            })
        },
        // 已读
        yd(val) {
            
        },
        // 删除
        del(val) {

        },
        // 还原到未读
        hy1(val) {

        },
        // 还原到已读
        hy2(val){

        },
        // 全部已读
        ydall() {

        },
        // 全部删除
        delall() {

        },
        // 全部还原到未读
        hyall() {

        },
        // tab切换
        handleClick(val) {
            console.log(val);
            // console.log(val._props.name);
            this.$axios.get('/params/tab').then(res => {
                if(val._props.name == 'first') {
                    this.tableData = res.data.data.unread
                    this.weidu = true
                    this.yidu = false
                    this.huishou = false
                }else if(val._props.name == 'second') {
                    this.tableData = res.data.data.read
                    this.weidu = false
                    this.yidu = true
                    this.huishou = false
                }else if(val._props.name == 'third') {
                    this.tableData = res.data.data.recycle
                    this.weidu = false
                    this.yidu = false
                    this.huishou = true
                }
            })
        },
        // 翻页
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.pagenum = val
            this.getlist()
        }
    },
};
</script>

<style lang="scss" scoped>
.btns {
    display: flex;
    margin-top: 30px;
}
.fen {
    margin-top: 20px;
    display: flex;
}
</style>