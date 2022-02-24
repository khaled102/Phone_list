import axios from 'axios';

export default new (class HttpClient {

  constructor() {
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.setupResponseInterceptors();
  }

  setupResponseInterceptors() {
    axios.interceptors.response.use((res) => res, (err) => Promise.reject(err.response));
  }

  getDefaultConfig() {
    return {
      headers: {}
    };
  }

  parseConfigAgainstDefaults(config) {
    const defaultConfig = this.getDefaultConfig();
    for (const k in config) {
      if (k === 'headers') {
        defaultConfig[k] = {...defaultConfig.headers, ...config.headers};
      } else {
        defaultConfig[k] = config[k];
      }
    }
    return defaultConfig;
  }

  request(url, method, config) {
    return axios.request({
      url,
      method,
      ...(this.parseConfigAgainstDefaults(config))
    });
  }

  parseArgs(against, firstArg, secondArg) {
    if (secondArg) {
      secondArg[against] = firstArg;
    } else {
      secondArg = {};
      secondArg[against] = firstArg;
    }
    return secondArg;
  }

  get(url, params, config) {
    config = this.parseArgs('params', params, config);
    return this.request(url, 'get', config);
  }

  post(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'post', config);
  }

  put(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'put', config);
  }

  patch(url, data, config) {
    config = this.parseArgs('data', data, config);
    return this.request(url, 'patch', config);
  }

  delete(url, data, config) {
    config = this.parseArgs('params', data, config);
    return this.request(url, 'delete', config);
  }

})();