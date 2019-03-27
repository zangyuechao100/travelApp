import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '杭州'
    },
    actions: {
        changeCity (ctx, name) {
            let { commit } = ctx
            commit('changeCity', name)
        }
    },
    mutations: {
        changeCity (state, name) {
            state.city = name
        }
    }
})