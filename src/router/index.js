import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

//使用插件
Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写 push｜replace
VueRouter.prototype.push = function(location, resolve, reject) {
   if(resolve && reject) {
       originPush.call(this, location, resolve, reject)
   }else {
       originPush.call(this, location, () => {}, () => {})
   }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if(resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    }else {
        originReplace.call(this, location, ()=>{}, () => {})
    }
}

let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    },
})


router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token) {
        if(to.path=='/login' || to.path =='/register') {
            next('/')
        }else{
            // 已经登陆了，访问的是非登陆/注册页面
            if(name) {
                next()
            }else{
                try{
                    await store.dispatch('getUserInfo')
                    next()
                }catch(error) {
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{
        let toPath = to.path
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
            next('/login?redirect=' + toPath)
        }else{
            next()
        }
    }
})

export default router