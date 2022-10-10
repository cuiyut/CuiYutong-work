const state = {
    one:'我有点懵',
    two:'这什么情况',
    three:'不是太明白'
}

const mutations = {
    UpdateOne:(state,player = 'okk') => {
        state.one = player
    }
}

const action = {

}

export default {
    namespaced:true,
    state,
    mutations,
    action
}