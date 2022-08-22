<template>
    <div>
        <el-tabs v-model="activeName" style="margin-top:-50px">
            <el-tab-pane label="未读消息">
                <el-table :data="tableData" style="width: 100%;margin-top:-150px">
                    <el-table-column 
                    prop="title">
                    </el-table-column>
                    <el-table-column 
                    prop="date"
                    >
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button type="text" @click="yidu(scope.$index,scope.row)">标为已读</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button @click="allyidu()" type="primary">全部标记已读</el-button>
            </el-tab-pane>


            <el-tab-pane label="已读消息">
                <el-table :data="tableData1" style="width: 100%;margin-top:-150px">
                    <el-table-column 
                    prop="title">
                    </el-table-column>
                    <el-table-column 
                    prop="date">
                    </el-table-column>
                    <el-table-column>
                        <template  slot-scope="scope">
                            <el-button type="danger" size="mini" @click="del(scope.$index,scope.row)">删除</el-button>
                            <el-button type="text" @click="huan(scope.$index,scope.row)">还原未读</el-button>
                        </template>

                    </el-table-column>
                </el-table>
                <el-button type="danger" @click="delall()">删除全部</el-button>
            </el-tab-pane>

             
            <el-tab-pane label="回收站">
                <el-table :data="tableData2" style="width: 100%;margin-top:-150px">
                    <el-table-column 
                    prop="title">
                    </el-table-column>
                    <el-table-column 
                    prop="date">
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button type="text"  @click="huanyuan(scope.$index,scope.row)">还原</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button type="danger" @click="qing()">清空回收站</el-button>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import list from '../assets/tabs.json'
export default {
    data() {
        return {
            tableData: [],
            tableData1: [],
            tableData2: []
        };
    },

    mounted() {
        this.getlist()
    },

    methods: {
        getlist() {
            // console.log(list);
            this.tableData = list.unread
            this.tableData1 = list.recycle
            this.tableData2 = list.read
        },
        yidu(index,row) {
            this.tableData1.push(row)
            this.tableData.splice(index, 1)
        },
        del(index,row){
            this.tableData2.push(row)
            this.tableData1.splice(index, 1)
        },
        huan(index,row){
            this.tableData.push(row)
            this.tableData1.splice(index, 1)
        },
        huanyuan(index,row){
            this.tableData.push(row)
            this.tableData2.splice(index, 1)
        },
        allyidu(){
            this.tableData.forEach(item => {
                this.tableData1.push(item)
            });
            this.tableData =                                                                                                                           []
        },
        delall(){
            this.tableData1.forEach(item => {
                this.tableData2.push(item)
            });
            this.tableData1 = []
        },
        qing(){
            this.tableData2 = []
        }
    },
};
</script>