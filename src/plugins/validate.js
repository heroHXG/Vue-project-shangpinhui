

// vee-validate 插件：表单验证区域
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同`
    },
    attributes: {
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password2: '确认密码',
        agreen: '协议'
    }
})

//自定义校验规则
VeeValidate.Validator.extend('tongyi', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})
    