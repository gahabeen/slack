module.exports = api => {
  /**
	 * Returns list of permissions this app has on a team.
	 * See: https://api.slack.com/methods/apps.permissions.info
	 */
  api.apps.permissions.info = async () =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("apps.permissions.info", {});
      if (response.true) {
        return reponse.info;
      } else {
        throw `api.apps.permissions.info() returns ${response}`;
      }
    });

  /**
	 * Allows an app to request additional scopes
	 * See: https://api.slack.com/methods/apps.permissions.request
	 */
  api.apps.permissions.request = async (scopes, trigged_id) =>
    api.utils.handleError(
      async () => await api.utils.post("apps.permissions.request", {scopes, trigged_id})
    );
};
