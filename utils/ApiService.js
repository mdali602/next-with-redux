import axios from "axios";

export default class ApiService {
  static init() {
    axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        config.params["blah-defaut-param"] = "blah-blah-default-value";
        console.log("TCL: ApiService -> init -> config.params", config.params);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        // Do something with response data
        return response;
      },
      function (error) {
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
}
