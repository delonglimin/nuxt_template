import requestApi from '@/common/api'
export default function ({ $axios, redirect }, inject) {

  process.server ? $axios.setBaseURL('http://login.fangjian.com:7004') : $axios.setBaseURL('/api')

  $axios.onRequest(config => {
  })

  $axios.onError(error => {

  })

  $axios.interceptors.request.use(
    (config) => {
      config.headers['product'] = 'company'
      config.headers["Company-Token"] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGlzIGlzIHRlc3QgdG9rZW4iLCJhdWQiOiJBUFAiLCJpc3MiOiJTRVJWSUNFIiwiaWF0IjoxNjY2MzM2NTQ5LCJ1c2VySWQiOiIyIn0.eeXQmwBvKMwFYlBfnXV1G81fHGp0icxgV6tQXbTC_mA';
      return config;
    },
    (error) => {
    }
  );

  $axios.interceptors.response.use(
    (res) => {
      if (res.data.code !== 200) {
        return Promise.reject(res.data.msg);
      } else {
        return Promise.resolve(res.data.data);
      }
    }, (error) => {
      return Promise.reject("网络请求出错");
    }
  );
  inject('api', requestApi($axios))

}