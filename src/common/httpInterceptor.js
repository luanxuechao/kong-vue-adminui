import axios from 'axios';
import Vue from 'vue';


const service = axios.create({
  baseURL: 'http://localhost:8001',  // 基本路径
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers.Authorization = store.getters.token;
  // }
  return config;
}, error => {
  Promise.reject(error);
})

service.interceptors.response.use(
  response => response,
  error => {
    // const statusCode = error.response.data.error.statusCode
    // if (statusCode === 401) {
    //   // store.dispatch('FedLogOut').then(() => {
    //   //   location.reload()
    //   // })
    // } else {
      const vueObj = new Vue()
      // const msg = error.response.data.error.message
    //  console.log('111'+error)
      vueObj.$message.error({
        title: '请求出错',
        desc: error.message
      });
    // }
    return Promise.reject(error);
  }
)

export default service;
