

// 对api接口进行统一管理
import requests from '@/api/request'
import mockAjax from './mockAjax'


export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})

//获取banner
export const reqGetBannerList = () => mockAjax.get('/banner')

export const reqFloorList = () => mockAjax.get('/floor')

// reqGetSearchInfo 给服务器传递的参数params，至少是一个空对象{}
export const reqGetSearchInfo = (params) => requests({url: "/list", method: 'post', data:params})

// 获取产品详情数据，API：/api/item/{ skuId }  请求方式：get； 参数：skuId	string（类型）	Y（必传）	商品ID（含义）
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: 'get'} )

// 将商品添加到购物车中或者更新某一个产品的个数：/api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`, method: 'post'})

//获取购物车列表 /api/cart/cartList get请求， 无参数
export const reqCartList = () => requests({url: '/cart/cartList', method: 'get'})

// 删除购物车产品的接口： /api/cart/deleteCart/{skuId} delete请求，参数：skuId
export const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})

// /api/cart/checkCart/{skuId}/{isChecked} method:get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`, method: 'get'})

// 获取验证码：/api/user/passport/sendCode/{phone}  method：get
export const reqGetCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method: 'get'})

//  /api/user/passport/register method：post；参数：phone，password，code
export const reqUserRegister = (data) => requests({url: '/user/passport/register', method:'post', data})

// /api/user/passport/login method：post
export const reqUserLogin = (data) => requests({url: `/user/passport/login`, data, method: 'post'})

//获取用户信息，需要携带token。 url：/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo', method: 'get'})

// /api/user/passport/logout   method:get  无参数
export const reqLogout = () => requests({url: '/user/passport/logout', method: 'get'})

// /api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => requests({url: '/user/userAddress/auth/findUserAddressList', method: 'get'})

// /api/order/auth/trade    method:get
export const reqOrderInfo = () => requests({url: '/order/auth/trade', method: 'get'})


// /api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder = (tradeNo, data) => requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post'})

// /api/payment/weixin/createNative/{orderId}   method:get
export const reqPayInfo = (orderId) => requests({url: `/payment/weixin/createNative/${orderId}`, method: 'get'})

// 获取订单支付状态 /api/payment/weixin/queryPayStatus/{orderId}  method:get
export const reqPayStatus = (orderId) => requests({url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get'})


// 获取个人中心数据 /api/order/auth/{page}/{limit}  method:get
export const reqMyOrderList = (page, limit) => requests({url: `/order/auth/${page}/${limit}`, method: 'get'})