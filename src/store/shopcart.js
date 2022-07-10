import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"

const state = {
    cartList: []
}
const mutations = {
    GET_CART_LIST(state, list) {
        state.cartList = list || []
    }
}
const actions = {
    async getCartList({commit}) {
        let result = await reqCartList()
        if(result.code == 200) {
            commit('GET_CART_LIST', result.data)
        }
    },
    async deleteCartListBySkuId({commit}, skuId) {
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({commit}, {skuId, isChecked}) {
       let result = await reqUpdateCheckedById(skuId, isChecked)
       if(result.code == 200){
           return 'ok'
       }else {
           return Promise.reject(new Error('faile'))
       }
    },
    deleteAllCheckedCart({dispatch, getters}) {
        let PromiseAll = []
        getters.cartInfoList.forEach(cart => {
            let promise = cart.isCshecked == 1 && dispatch('deleteCartListBySkuId', cart.skuId)
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    updateAllCartChecked({getters, dispatch}, checked) {
        let PromiseAll = []
        getters.cartInfoList.forEach(cart => {
            let promise = dispatch('updateCheckedById', {skuId: cart.skuId, isChecked: checked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartInfoList(state) {
        return state.cartList[0]?.cartInfoList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}