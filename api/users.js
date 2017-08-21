module.exports = api => {
  /**
 * 	Lists all users in a Slack team.
 * See: https://api.slack.com/methods/users.list
 */
  api.users.list = async (limit = 20, presence = false, options = {}) =>
    api.utils.handleError(async () => {
      let response = await api.utils.post(
        "users.list",
        Object.assign({ limit: limit, presence: presence }, options)
      );
      if (response.ok === true) {
        return response.members;
      } else {
        throw `api.users.list(${limit}, ${presence}, ${JSON.stringify(options)}) returns ${response}`;
      }
    });

  /**
 * 	Get a user in a Slack team by user name
 * See: https://api.slack.com/methods/users.list
 */
  api.users.getByUserName = async (name, ...options) =>
    api.utils.handleError(async () => {
      let users = await api.users.list(...options);
      return (
        users.find(user =>
          user.name.toLowerCase().trim().startsWith(name.toLowerCase().trim())
        ) || null
      );
    });

  /**
 * 	Get a user id in a Slack team by user name
 * See: https://api.slack.com/methods/users.list
 */
  api.users.getIdByUserName = async (name, ...options) =>
    api.utils.handleError(async () => {
      let users = await api.users.list();
      let user = await api.users.getByUserName(name, ...options);
      return user.id || null;
    });

  /**
 * 	Retrieves a user's profile information.
 * See: https://api.slack.com/methods/users.profile.get
 */
  api.users.profile.get = async (id, include_labels = true) =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("users.profile.get", {
        user: id,
        include_labels: include_labels
      });
      if (response.ok === true) {
        return response.profile;
      } else {
        throw `api.users.profile.get(${id}, ${include_labels}) returns ${response}`;
      }
    });

  /**
 * 	Retrieves a user's profile information by a user name.
 * See: https://api.slack.com/methods/users.profile.get
 */
  api.users.profile.getByUserName = async (name, include_labels = true) =>
    api.utils.handleError(async () => {
      let id = await api.users.getIdByUserName(name);
      return await api.users.profile.get(id, include_labels);
    });
};
