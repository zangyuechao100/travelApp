export default {
    changeCity (ctx, name) {
        let { commit } = ctx
        commit('changeCity', name)
    }
}