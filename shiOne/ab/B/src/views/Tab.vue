<template>
    <div>
        <el-tabs v-model="activeName">

            <el-tab-pane label="未读消息" name="first">
                <el-table :data="tableData" style="width: 100%;">
                    <el-table-column prop="title"></el-table-column>
                    <el-table-column prop="date"></el-table-column>
                    <el-table-column
                    fixed="right"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="yd(scope.row)" size="small">标为已读</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <el-button class="btns" type="primary" @click="ydall()">全部标为已读</el-button>
            </el-tab-pane>


            <el-tab-pane label="已读消息" name="second">
                <el-table :data="tableData1" style="width: 100%;">
                    <el-table-column prop="title"></el-table-column>
                    <el-table-column prop="date"></el-table-column>
                    <el-table-column
                    fixed="right"
                    width="150">
                    <template slot-scope="scope">
                            <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
                            <el-button @click="hy1(scope.row)" size="small">还原</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <el-button class="btns" type="danger" @click="delall()">全部删除</el-button>
            </el-tab-pane>


            <el-tab-pane label="回收站" name="third">
                <el-table :data="tableData2" style="width: 100%;">
                    <el-table-column prop="title"></el-table-column>
                    <el-table-column prop="date"></el-table-column>
                    <el-table-column
                    fixed="right"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="hy2(scope.row)" size="small"> 还原 </el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <el-button class="btns" type="primary" @click="hyall()">全部还原</el-button>
            </el-tab-pane>
        </el-tabs>

        <!-- <el-pagination
        class="fen"
        background
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-size="pagesize"
        layout="prev, pager, next"
        :total="total">
        </el-pagination> -->
    </div>
</template>

<script>
export default {
    name: 'CytbbTab',

    data() {
        return {
            activeName: 'first',
            total:0,
            pagenum:1,
            pagesize:5
        };
    },

    mounted() {
        this.getlist()
    },

    computed: {
        tableData:{
            get:function() {
                return this.$store.state.tab.tableData
            }
        },
        tableData1:{
            get:function() {
                return this.$store.state.tab.tableData1
            }
        },
        tableData2:{
            get:function() {
                return this.$store.state.tab.tableData2
            }
        }
    },

    methods: {
        getlist() {
            this.$axios.get('/params/tab').then(res => {
                console.log(res);
                this.$store.commit('tab/tableList',res.data.data.unread)
                // console.log(this.tableData);
            })
        },
        // 已读
        yd(val) {
            // console.log(val);
            this.$store.commit('tab/yd',val)
        },
        // 删除
        del(val) {
            // console.log(val);
            this.$store.commit('tab/del',val)
        },
        // 还原到未读
        hy1(val) {
            // console.log(val);
            this.$store.commit('tab/hy1',val)
        },
        // 还原到已读
        hy2(val){
            // console.log(val);
            this.$store.commit('tab/hy2',val)
        },
        // 全部已读
        ydall() {
            this.$store.commit('tab/ydall')
        },
        // 全部删除
        delall() {
            this.$store.commit('tab/delall')
        },
        // 全部还原到未读
        hyall() {
            this.$store.commit('tab/hyall')
        },
        // 翻页
        // handleCurrentChange(val) {
        //     // console.log(`当前页: ${val}`);
        //     this.pagenum = val
        //     this.getlist()
        // }
    },
};
</script>

<style lang="scss" scoped>
.btns {
    float: left;
    margin-top: 30px;
}
.fen {
    margin-top: 20px;
    display: flex;
}
</style>