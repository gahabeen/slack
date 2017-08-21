module.exports = api => {
  /**
	 * Checks API calling code.
	 * See: https://api.slack.com/methods/api.test
	 */
  api.api.test = async () =>
    api.utils.handleError(async () => await api.utils.post("api.test", {}));

};
