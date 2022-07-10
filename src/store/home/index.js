
import {reqCategoryList, reqGetBannerList, reqFloorList} from '@/api'

const state = {
    categoryList:[],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList

    },
    GET_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GET_FLOOR_LIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
   
    async categoryList({commit}) {
        let result = await reqCategoryList() 
        if(result.code == 200) {
            commit('CATEGORY_LIST', result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        if(result.code == 200) {
            commit('GET_BANNER_LIST', result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList()
        if(result.code == 200) {
            commit('GET_FLOOR_LIST', result.data)
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