/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router/index';
import store from '../store/index';
import {Message} from 'element-ui';

/**
 * 提示函数
 */
const tip = (msg, type) => {
    Message({
        message: msg,
        type: type
    });
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/**
 * 500提示
 */
const codeMessag = (meta) => {
    switch (meta.code) {
        case "500":
            tip(meta.message, 'warning');
            break;
    }
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录', 'warning');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在', 'warning');
            break;
        default:
            console.log(other);
            store.commit('changeNetwork', false);
            tip('连接到服务器失败', 'warning');
    }
}

// 创建axios实例
var instance = axios.create({timeout: 1000 * 12});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
    // 请求失败
    error => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            store.commit('changeNetwork', false);
            // tip('请求错误', 'error');
        }
    });

// export default instance;

//判断是否未登录
function notLogin(type) {
    if ('USER_NOT_LOGGED_IN'===type){
        tip('未登录', 'error');
        toLogin()
        return false
    }else{
        return  true
    }
}

//get请求
function get(url, params = {}) {
    if (!url) {
        tip('请求错误(无api)', 'error');
        return false
    }
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        })
            .then(response => {
                if(notLogin(response.data.info)) {
                    codeMessag(response.meta)
                    resolve(response)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

//post请求
function post(url, data = {},params) {
    if (!url) {
        tip('请求错误(无api)', 'error');
        return false
    }
    return new Promise((resolve, reject) => {
        instance.post(url, data,{params})
            .then(response => {
                if(notLogin(response.data.info)) {
                    codeMessag(response.meta)
                    resolve(response)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default {
    get,
    post
}