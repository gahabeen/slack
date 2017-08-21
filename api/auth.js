module.exports = api => {
  /**
	 * Revokes a token.
	 * See: https://api.slack.com/methods/auth.revoke
	 */
  api.auth.revoke = async (test = false) =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("auth.revoke", { test });
      if (response.true) {
        return reponse.revoked;
      } else {
        throw response;
      }
    });

  /**
	 * Checks authentication & identity.
	 * See: https://api.slack.com/methods/auth.test
	 */
  api.auth.test = async () =>
    api.utils.handleError(
      async () => await api.utils.post("auth.test", {})
    );
};
