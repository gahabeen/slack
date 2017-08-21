module.exports = api => {
  /**
	 * Deletes a message.
	 * See: https://api.slack.com/methods/chat.delete
	 */
  api.chat.delete = async (id, messageTimestamp) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("chat.delete", {
          channel: id,
          ts: messageTimestamp
        })
    );

  /**
	 * Provide custom unfurl behavior for user-posted URLs
	 * See: https://api.slack.com/methods/chat.unfurl
	 */
  api.chat.unfurl = async (id, messageTimestamp, unfurls, options = {}) =>
    api.utils.handleError(
      async () =>
        await api.utils.post(
          "chat.delete",
          Object.assign(
            {
              channel: id,
              ts: messageTimestamp,
              unfurls: unfurls
            },
            options
          )
        )
    );

  /**
	 * Provide custom unfurl behavior for user-posted URLs by channel name
	 * See: https://api.slack.com/methods/chat.unfurl
	 */
  api.chat.unfurlByChannelName = async (
    name,
    messageTimestamp,
    unfurls,
    options = {}
  ) =>
    api.utils.handleError(async () => {
      let id = await api.channels.getIdByChannelName(name);
      return await api.chat.unfurl(id, messageTimestamp, unfurls, options);
    });

  /**
	 * Provide custom unfurl behavior for user-posted URLs by channel name
	 * See: https://api.slack.com/methods/chat.unfurl
	 */
  api.chat.unfurlByChannelNameAndLastMessageStartingWithByChannelName = async (
    name,
    messageStartingText,
    unfurls,
    options = {}
  ) =>
    api.utils.handleError(async () => {
      let ts = await api.channels.getTimestampOflastMessageStartingWithByChannelName(
        name,
        messageStartingText,
        options
      );
      return await api.chat.unfurlByChannelName(
        name,
        HTMLSourceElement,
        unfurls,
        options
      );
    });

  /**
	 * Share a me message into a channel.
	 * See: https://api.slack.com/methods/chat.meMessage
	 */
  api.chat.meMessage = async (id, text) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("chat.meMessage", {
          channel: id,
          text: text
        })
    );

  /**
	 * Share a me message into a channel by channel name
   * See: unofficial method
	 */
  api.chat.meMessageByChannelName = async (name, text) =>
    api.utils.handleError(async () => {
      let id = await api.channels.getIdByChannelName(name);
      return await api.chat.meMessage(id, text);
    });

  /**
	 * Share a me message into a channel by group name
  * See: unofficial method
	 */
  api.chat.meMessageByGroupName = async (name, text) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.chat.meMessage(id, text);
    });

  /**
	 * Sends an ephemeral message to a user in a channel.
	 * See: https://api.slack.com/methods/chat.postEphemeral
	 */
  api.chat.postEphemeral = async (id, userId, text, options = {}) =>
    api.utils.handleError(async () => {
      let messageObject = Object.assign(
        {
          as_user: null,
          attachments: [],
          link_names: true,
          parse: "none"
        },
        options
      );

      return await api.utils.post(
        "chat.postEphemeral",
        Object.assign({ channel: id, user: userId, text: text }, messageObject)
      );
    });

  /**
	 * Updates a message.
	 * See: https://api.slack.com/methods/chat.update
	 */
  api.chat.update = async (id, text, messageTimestamp, options = {}) =>
    api.utils.handleError(
      async () =>
        await api.utils.post(
          "chat.update",
          Object.assign(
            { channel: id, text: text, ts: messageTimestamp },
            options
          )
        )
    );

  /**
	 * Updates a message by channel name
	 * See: https://api.slack.com/methods/chat.update
	 */
  api.chat.updateByChannelName = async (
    name,
    text,
    messageTimestamp,
    options = {}
  ) =>
    api.utils.handleError(async () => {
      let id = await api.channels.getIdByChannelName(name);
      return await api.chat.update(id, text, messageTimestamp, options);
    });

  /**
	 * Updates a message by channel name
	 * See: https://api.slack.com/methods/chat.update
	 */
  api.chat.updateByChannelNameAndLastMessageStartingWithByChannelName = async (
    name,
    messageStartingText,
    newText,
    options = {}
  ) =>
    api.utils.handleError(async () => {
      let ts = await api.channels.getTimestampOflastMessageStartingWithByChannelName(
        name,
        messageStartingText,
        options
      );
      return await api.chat.updateByChannelName(name, newText, ts, options);
    });

  /**
 * Sends a message to a channel.
 * See: https://api.slack.com/methods/chat.postMessage
 */
  api.chat.postMessage = async (id, text, options = {}) =>
    api.utils.handleError(async () => {
      let messageObject = Object.assign(
        {
          as_user: null,
          attachments: [],
          icon_emoji: null,
          icon_url: null,
          link_names: true,
          parse: "none",
          reply_broadcast: false,
          thread_ts: null,
          unfurl_links: false,
          unfurl_media: false
        },
        options
      );

      return await api.utils.post(
        "chat.postMessage",
        Object.assign({ channel: id, text: text }, messageObject)
      );
    });

  /**
 * Sends a message to a channel.
 * See: https://api.slack.com/methods/chat.postMessage
 */
  api.chat.postMessageByChannelName = async (name, text, options = {}) =>
    api.utils.handleError(async () => {
      let id = await api.channels.getIdByChannelName(name);
      return await api.chat.postMessage(id, text, options);
    });

  /**
 * Sends a dynamically build message to a channel.
 * See: unofficial method
 */
  api.chat.postBuildMessage = async (options, template, sourceObject) =>
    api.utils.handleError(async () => {
      // Will soon include a message builder
      return api.chat.postMessage(options);
    });
};
