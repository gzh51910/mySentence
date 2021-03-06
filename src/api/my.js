import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'http://120.27.247.86'
});

function get(path, params, config = {}) {
    return my.get(path, {
        ...config,
        params
    })
}

function post(path, data = {}, config = {}) {
    return my.post(path, data, config)
}
function patch(path, data = {}, config = {}) {
    return my.patch(path, data, config);
}
export default {
    get,
    post,
    patch
}