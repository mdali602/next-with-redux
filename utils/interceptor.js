import axios from "axios";

export default {
  setupInterceptors: () => {
    // axios.interceptors.request.use(
    console.log("TCL: test");
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.params["blah-defaut-param"] = "blah-blah-default-value";
        config.headers['X-AUTH-TOKEN'] = 'test';
        console.log("TCL: config.params", config.params);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        // Do something with response data
        return response;
      },
      function (error) {
        // Do something with response error
        return Promise.reject(error);
      }
    );
  },
};
