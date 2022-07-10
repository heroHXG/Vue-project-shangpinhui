
import {reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout} from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: ''
}
const mutations = {
    GET_CODE(state, data) {
        state.code = data
    },
    USER_LOGIN(state, token) {
        state.token = token
    },
    GET_USER_INFO(state, data) {
        state.userInfo = data
    },
    CLEAR(state) {
        state.token = '',
        state.userInfo = '',
        removeToken()
    }
}
const actions = {
    async getCode({commit}, phone) {
        let result = await reqGetCode(phone)
        if(result.code == 200) {
            commit('GET_CODE', result.data)
        }else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 用户注册
    async userRegister({commit}, user) {
      let result = await reqUserRegister(user)
      console.log(result)
      if(result.code == 200) {
          return 'ok'
      }else{
          return Promise.reject(new Error('failed'))
      }
    },
    async userLogin({commit}, user) {
        let result = await reqUserLogin(user)
        console.log(result)
        // 服务器下发的token，是用户唯一的标识符
        if(result.code == 200) {
            commit('USER_LOGIN', result.data.token)
            // 本地持久化存储token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}) {
        let result = await reqUserInfo()
        if(result.code == 200) {
            commit('GET_USER_INFO', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async userLogout({commit}) {
        let result = await reqLogout()
        if(result.code == 200) {
            commit('CLEAR')
            return 'ok'
        }else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}