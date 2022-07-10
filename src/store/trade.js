
import {reqAddressInfo, reqOrderInfo} from '@/api'

const state = {
    userAddress: [],
    orderInfo: {}
}
const mutations = {
    GET_USER_ADDRESS(state, addressInfo) {
        state.userAddress = addressInfo
    },
    GET_ORDER_INFO(state, order) {
        state.orderInfo = order
    }
}
const actions = {
    async getUserAddress({commit}) {
        let result = await reqAddressInfo()
        if(result.code == 200) {
            commit('GET_USER_ADDRESS',result.data)
        }
    },
    async getOrderInfo({commit}) {
        let result = await reqOrderInfo()
        if(result.code == 200) {
            commit('GET_ORDER_INFO', result.data)
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,

}