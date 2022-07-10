

//引入路由组件
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default[
    {
        path: "/center",
        name: 'center',
        component: Center,
        // show 路由元信息用来显示底部的footer 组件
        meta: {show: true},
        children: [{
               path: 'myorder',
               component: MyOrder,
            },{
                path: 'groupOrder',
                component: GroupOrder
            },{
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: "/paysuccess",
        name: 'paysuccess',
        component: PaySuccess,
        meta: {show: true}
    },
    {
        path: "/pay",
        name: 'pay',
        component: Pay,
        meta: {show: true},
        beforeEnter: (to, from, next) => {
            if(from.path == '/trade') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/trade",
        name: 'trade',
        component: Trade,
        meta: {show: true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart') {
                next()
            }else{
                next(false) //依然停留在原地
            }
        }
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: ShopCart,
        meta: {show: true}
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {show: true}
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: {show: true}
    },
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: {show: true}
    },
    {
        path: "/search/:keyword?",
        component: () => import('@/pages/Search'),
        meta: {show: true},
        name: 'search',
        props: ($route) => ({keyword: $route.params.keyword, k: $route.query.k})
    },
    {
        path: "/login",
        component: Login,
        meta: {show: false}
    },
    {
        path: "/register",
        component: Register,
        meta: {show: false}
    },
    {
        //重定向
        path: '*',
        redirect: '/home'
    }
]