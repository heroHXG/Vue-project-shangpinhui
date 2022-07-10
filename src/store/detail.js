
import {reqGoodsInfo, reqAddOrUpdateShopCart} from '@/api'
import {getUUID} from '@/utils/uuid_token'
let state = {
    goodsInfo: {},
    uuid_token: getUUID()
}
let mutations = {
    GET_GOODS_INFO(state, data) {
        state.goodsInfo = data
    }
}
let actions = {
    async getGoodsInfo({commit}, skuId) {
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200) {
            commit('GET_GOODS_INFO', result.data)
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if(result.code == 200) {
            return "ok"
        }else {
            return Promise.reject(new Error('failer'))
        }
    }
}
let getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {} 
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}