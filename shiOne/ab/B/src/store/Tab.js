

const state = {
    // 未读
    tableData:[],
    // 已读
    tableData1:[],
    // 回收站
    tableData2:[],
}

const mutations = {
    // 数据
    tableList:(state,val) => {
        state.tableData = val
    },
    // 未读放到已读
    yd:(state,val) => {
        let index = state.tableData.findIndex(item => item == val)
        state.tableData.splice(index,1)
        state.tableData1.push(val)
    },
    // 已读删除到回收站
    del:(state,val) => {
        let index = state.tableData1.findIndex(item => item == val)
        state.tableData1.splice(index,1)
        state.tableData2.push(val)
    },
    // 已读还原到未读
    hy1:(state,val) => {
        let index = state.tableData1.findIndex(item => item == val)
        state.tableData1.splice(index,1)
        state.tableData.push(val)
    },
    // 删除还原到已读
    hy2:(state,val) => {
        let index = state.tableData2.findIndex(item => item == val)
        state.tableData2.splice(index,1)
        state.tableData.push(val)
    },
    // 未读全部已读
    ydall:(state) => {
        state.tableData.forEach(item => {
            state.tableData1.push(item)
        })
        state.tableData = []
    },
    // 已读全部删除到回收站
    delall:(state) => {
        state.tableData1.forEach(item => {
            state.tableData2.push(item)
        })
        state.tableData1 = []
    },
    // 回收站全部还原到未读
    hyall:(state) => {
        state.tableData2.forEach(item => {
            state.tableData.push(item)
        })
        state.tableData2 = []
    },
}

const  actions = {

}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}