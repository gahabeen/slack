const request = require("request-promise-native");

function Slack(apiToken) {
  this.baseUrl = "https://slack.com/api/";
  this.apiToken = apiToken;

  let parent = this;

  this.buildUrl = function(method) {
    return `${this.baseUrl}/${method}`;
  };

  this.slackApi = function(method, body) {
    body.token = this.apiToken;
    return request.post({ url: this.buildUrl(method), json: true }).form(body);
  };

  let handleError = function(fn) {
    try {
      return fn();
    } catch (error) {
      throw error;
    }
  };

  let api = {
    channels: {},
    groups: {},
    chat: {}
  };

  /**
	 * Checks API calling code.
	 * See: https://api.slack.com/methods/api.test
	 */
  api.test = async () =>
    handleError(async () => await parent.slackApi("api.test", {}));

  // Channels

  /**
	 * Creates a channel.
	 * See: https://api.slack.com/methods/channels.create
	 */
  api.channels.create = async name =>
    handleError(
      async () =>
        await parent.slackApi("channels.create", {
          name: name.replace(/\#+/, "")
        })
    );

  /**
	 * Lists all channels in a Slack team.
	 * See: https://api.slack.com/methods/channels.list
	 */
  api.channels.list = async () =>
    handleError(async () => {
      let response = await parent.slackApi("channels.list", {});
      if (response.ok === true) {
        return response.channels;
      } else {
        throw response;
      }
    });

  /**
	 * Return a channel object from a given name
	 * See: unofficial method
	 */
  api.channels.findByName = async name =>
    handleError(async () => {
      let channelsList = await api.channels.list();
      let channel = channelsList.find(channel => channel.name === name) || null;
      return channel;
    });

  /**
	 * Return an id from a given channel name
	 * See: unofficial method
	 */
  api.channels.getIdByName = async name =>
    handleError(async () => {
      let foundChannel = await api.channels.findByName(name);
      return foundChannel && foundChannel.id ? foundChannel.id : null;
    });

  /**
	 * Archives a channel.
	 * See: https://api.slack.com/methods/channels.archive
	 */
  api.channels.archive = async id =>
    handleError(
      async () =>
        await parent.slackApi("channels.archive", {
          channel: id
        })
    );

  /**
	 * Archives a channel by name
	 * See: unofficial method
	 */
  api.channels.archiveByName = async name =>
    handleError(async () => {
      let id = await api.channels.getIdByName(name);
      return await api.channels.archive(id);
    });

  // Groups

  /**
	 * Creates a private channel.
	 * See: https://api.slack.com/methods/groups.create
	 */
  api.groups.create = async name =>
    handleError(
      async () =>
        await parent.slackApi("groups.create", {
          name: name.replace(/\#+/, "")
        })
    );

  /**
	 * 	Lists private channels that the calling user has access to.
	 * See: https://api.slack.com/methods/groups.list
	 */
  api.groups.list = async () =>
    handleError(async () => await parent.slackApi("groups.list", {}));

  /**
	 * Return a private channel object from a given name
	 * See: unofficial method
	 */
  api.groups.findByName = async name =>
    handleError(async () => {
      let groupsList = await api.groups.list();
      let group = groupsList.find(group => group.name === name) || null;
      return group;
    });

  api.groups.getIdByName = async name =>
    handleError(async () => {
      let foundGroup = await api.groups.findByName(name);
      return foundGroup && foundGroup.id ? foundGroup.id : null;
    });

  api.groups.archive = async id =>
    handleError(
      async () =>
        await parent.slackApi("groups.archive", {
          group: id
        })
    );

  api.groups.archiveByName = async name =>
    handleError(async () => {
      let id = await api.groups.getIdByName(name);
      return await api.groups.archive(id);
    });

  // Chat

  api.chat.postMessage = async (
    {
      username = "SlackAPI",
      channel = "general",
      text = null,
      as_user = null,
      attachments = [],
      icon_emoji = null,
      icon_url = null,
      link_names = true,
      parse = none,
      reply_broadcast = false,
      thread_ts = null,
      unfurl_links = false,
      unfurl_media = false
    } = {}
  ) => {
    handleError(
      async () =>
        await parent.slackApi("chat.postMessage", {
          text: text,
          username: username,
          channel: `#${channel}`,
          attachments: JSON.stringify(attachments)
        })
    );
  };

  api.chat.postBuildMessage = async function(options, template, sourceObject) {
    handleError(async () => {});
  };

  return api;
}
