const state = {
    routes:[]
}

const mutations = {
    // 点击保存
    add:(state,val) => {
        let index = state.routes.findIndex(item => item == val)
        if(index === -1) {
            state.routes.push(val)
        }
    },
    // 删除
    del:(state,val) => {
        let index = state.routes.findIndex(item => item === val)
        state.routes.splice(index,1)
    },
    // 清空
    qing:(state) => {
        state.routes = []
    }
}


export default {
    namespaced: true,
    state,
    mutations
}