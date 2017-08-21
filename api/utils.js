const request = require("request-promise-native");
module.exports = api => {
  api.utils.buildUrl = method => {
    return `${api.variables.baseUrl}/${method}`;
  };

  api.utils.handleError = async fn => {
    try {
      return await fn();
    } catch (error) {
      throw `Error: ${error}`;
    }
  };

  api.utils.post = (method, body) => {
    // return api.utils.handleError(() => {
      body.token = api.variables.apiToken;
      return request
        .post({ url: api.utils.buildUrl(method), json: true })
        .form(body);
    // });
  };
};
