module.exports = api => {
  /**
 * Creates a group.
 * See: https://api.slack.com/methods/groups.create
 */
  api.groups.create = async name =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("groups.create", {
        name: name.replace(/\#+/, "")
      });
      if (response.ok === true) {
        return response.group;
      } else {
        throw `api.groups.create(${name}) returns ${response}`;
      }
    });

  /**
 * Renames a group.
 * See: https://api.slack.com/methods/groups.rename
 */
  api.groups.rename = async (id, newName, validate = true) =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("groups.rename", {
        name: newName.replace(/\#+/, ""),
        channel: id,
        validate: validate
      });

      if (response.ok === true) {
        return response.group;
      } else {
        throw `api.groups.rename(${id},${newName},${validate}) returns ${response}`;
      }
    });

  /**
 * Renames a group by a group name.
 * See: unofficial method
 */
  api.groups.renameByGroupName = async (name, newName, validate = true) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.rename(id, newName, validate);
    });

  /**
 * Fetches history of messages and events from a group.
 * See: https://api.slack.com/methods/groups.history
 */
  api.groups.history = async (id, options) =>
    api.utils.handleError(async () => {
      let response = await api.utils.post(
        "groups.history",
        Object.assign({ channel: id }, options)
      );
      if (response.ok === true) {
        return response.messages;
      } else {
        throw `api.groups.history(${id},${options}) returns ${response}`;
      }
    });

  /**
 * Fetches history of messages and events from a group by its name.
 * See: unofficial method
 */
  api.groups.historyByGroupName = async (name, options) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.history(id, options);
    });

  /**
 * Fetch last message of a group
 * See: unofficial method
 */
  api.groups.lastMessage = async (id, options) =>
    api.utils.handleError(async () => {
      let messages = await api.groups.history(id, options);
      if (Array.isArray(messages) && messages.length > 0) {
        return messages[0];
      } else {
        throw `api.groups.lastMessage(${id},${options}) returns ${messages}`;
      }
    });

  /**
 * Get timestamp of last message of a group
 * See: unofficial method
 */
  api.groups.getTimestampOfLastMessage = async (id, options) =>
    api.utils.handleError(async () => {
      let message = await api.groups.lastMessage(id, options);
      if (message && message.ts) {
        return message.ts;
      } else {
        throw `api.groups.getTimestampOfLastMessageByGroupName(${name},${options}) returns ${message}`;
      }
    });

  /**
 * Fetch last message of a group by group name
 * See: unofficial method
 */
  api.groups.lastMessageByGroupName = async (name, options) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.lastMessage(id, options);
    });

  /**
 * Get id of last message of a group by group name
 * See: unofficial method
 */
  api.groups.getTimestampOfLastMessageByGroupName = async (name, options) =>
    api.utils.handleError(async () => {
      let message = await api.groups.lastMessageByGroupName(name, options);
      if (message && message.ts) {
        return message.ts;
      } else {
        throw `api.groups.getTimestampOfLastMessageByGroupName(${name},${options}) returns ${message}`;
      }
    });

  /**
 * Fetch last message starting by a text.
 * See: unofficial method
 */
  api.groups.lastMessageStartingWith = async (
    id,
    messageStartingText,
    options
  ) =>
    api.utils.handleError(async () => {
      let messages = await api.groups.history(id, options);
      let message = messages.find(message =>
        message.text.startsWith(messageStartingText)
      );
      if (message) {
        return message;
      } else {
        throw `api.groups.lastMessageStartingWith(${id},${messageStartingWith},${options}) returns ${message}`;
      }
    });

  /**
 * Fetch last message starting by a text by a group name.
 * See: unofficial method
 */
  api.groups.lastMessageStartingWithByGroupName = async (
    name,
    messageStartingText,
    options
  ) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.lastMessageStartingWith(
        id,
        messageStartingText,
        options
      );
    });

  /**
 * Get id of last message of a group by group name
 * See: unofficial method
 */
  api.groups.getTimestampOfLastMessageStartingWithByGroupName = async (
    name,
    messageStartingWith,
    options
  ) =>
    api.utils.handleError(async () => {
      let message = await api.groups.lastMessageStartingWithByGroupName(
        name,
        messageStartingWith,
        options
      );
      if (message && message.ts) {
        return message.ts;
      } else {
        throw `api.groups.getTimestampOfLastMessageStartingWithByGroupName(${name},${messageStartingWith},${options}) returns ${message}`;
      }
    });

  /**
 * Lists all groups in a Slack team.
 * See: https://api.slack.com/methods/groups.list
 */
  api.groups.list = async () =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("groups.list", {});
      if (response.ok === true) {
        return response.groups;
      } else {
        throw `api.groups.list() returns ${response}`;
      }
    });

  /**
 * Return a group object from a given name
 * See: unofficial method
 */
  api.groups.findByGroupName = async name =>
    api.utils.handleError(async () => {
      let groupsList = await api.groups.list();
      let group = groupsList.find(group => group.name === name);
      if (group) {
        return group;
      } else {
        throw `api.groups.findByGroupName(${name}) returns ${group}`;
      }
    });

  /**
 * Return an id from a given group name
 * See: unofficial method
 */
  api.groups.getIdByGroupName = async name =>
    api.utils.handleError(async () => {
      let foundGroup = await api.groups.findByGroupName(name);
      if (foundGroup && foundGroup.id) {
        return foundGroup.id;
      } else {
        throw foundGroup;
      }
    });

  /**
 * Archives a group.
 * See: https://api.slack.com/methods/groups.archive
 */
  api.groups.archive = async id =>
    api.utils.handleError(async () => {
      let response = await api.utils.post("groups.archive", {
        channel: id
      });
      if (response.true) {
        return reponse.group;
      } else {
        throw `api.groups.archive(${id}) returns ${response}`;
      }
    });

  /**
 * Archives a group by name
 * See: unofficial method
 */
  api.groups.archiveByGroupName = async name =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.archive(id);
    });

  /**
 * Sets the purpose for a group.
 * See: https://api.slack.com/methods/groups.setPurpose
 */
  api.groups.setPurpose = async (id, purpose) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.setPurpose", {
          channel: id,
          purpose: purpose
        })
    );

  /**
 * Sets the purpose for a group by a group name.
 * See: unofficial method
 */
  api.groups.setPurposeByGroupName = async (name, purpose) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.setPurpose(id, purpose);
    });

  /**
 * Sets the topic for a group.
 * See: https://api.slack.com/methods/groups.setTopic
 */
  api.groups.setTopic = async (id, topic) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.setTopic", {
          channel: id,
          topic: topic
        })
    );

  /**
 * Sets the topic for a group by a group name.
 * See: unofficial method
*/
  api.groups.setTopicByGroupName = async (name, topic) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.setTopic(id, topic);
    });

  /**
 * Unarchives a group.
 * See: https://api.slack.com/methods/groups.unarchive
*/
  api.groups.unarchive = async id =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.unarchive", {
          channel: id
        })
    );

  /**
 * Unarchives a group by a group name.
 * See: unofficial method
*/
  api.groups.unarchiveByGroupName = async name =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.unarchive(id);
    });

  /**
 * Retrieve a thread of messages posted to a group
 * See: https://api.slack.com/methods/groups.replies
*/
  api.groups.replies = async (id, thread_ts) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.replies", {
          channel: id,
          thread_ts: thread_ts
        })
    );

  /**
 * Retrieve a thread of messages posted to a group by a group name
 * See: unofficial method
*/
  api.groups.repliesByGroupName = async (name, thread_ts) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.replies(id, thread_ts);
    });

  /**
 * Retrieve a thread of from the last message starting with a text and posted to a group by a group name
 * See: unofficial method
*/
  api.groups.repliesFromLastMessageStartingWithByGroupName = async (
    name,
    messageStartingText
  ) =>
    api.utils.handleError(async () => {
      let message = await api.groups.lastMessageStartingWithByGroupName(
        messageStartingText,
        name
      );
      return await api.groups.repliesByGroupName(name, message.ts);
    });

  /**
 * Removes a user from a group.
 * See: https://api.slack.com/methods/groups.kick
*/
  api.groups.kick = async (id, userId) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.kick", {
          channel: id,
          user: userId
        })
    );

  /**
 * Removes a user from a group by group name.
 * See: unofficial method
*/
  api.groups.kickByGroupName = async (name, userId) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.kick(id, userId);
    });

  /**
   * Removes a user by user name from a group.
   * See: unofficial method
  */
  api.groups.kickByUserName = async (id, userName) =>
    api.utils.handleError(async () => {
      let userId = await api.users.getIdByUserName(userName);
      return await api.groups.kick(id, userId);
    });

  /**
 * Removes a user by user name from a group by group name.
 * See: unofficial method
*/
  api.groups.kickByGroupNameAndUserName = async (name, userName) =>
    api.utils.handleError(async () => {
      let userId = await api.users.getIdByUserName(userName);
      return await api.groups.kickByGroupName(name, userId);
    });

  /**
 * Invites a user to a group.
 * See: https://api.slack.com/methods/groups.invite
*/
  api.groups.invite = async (id, userId) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.invite", {
          channel: id,
          user: userId
        })
    );

  /**
* Invites a user from a group by group name.
* See: unofficial method
*/
  api.groups.inviteByGroupName = async (name, userId) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.invite(id, userId);
    });

  /**
 * Invites a user by user name from a group.
 * See: unofficial method
*/
  api.groups.inviteByUserName = async (id, userName) =>
    api.utils.handleError(async () => {
      let userId = await api.users.getIdByUserName(userName);
      return await api.groups.invite(id, userId);
    });

  /**
* Invites a user by user name from a group by group name.
* See: unofficial method
*/
  api.groups.inviteByGroupNameAndUserName = async (name, userName) =>
    api.utils.handleError(async () => {
      let userId = await api.users.getIdByUserName(userName);
      return await api.groups.inviteByGroupName(name, userId);
    });

  /**
* Sets the read cursor in a group.
* See: https://api.slack.com/methods/groups.mark
*/
  api.groups.mark = async (id, timestamp) =>
    api.utils.handleError(
      async () =>
        await api.utils.post("groups.mark", {
          channel: id,
          ts: timestamp
        })
    );

  /**
* Sets the read cursor in a group by a group name.
* See: unofficial method
*/
  api.groups.markByGroupName = async (name, timestamp) =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      return await api.groups.mark(id, timestamp);
    });

  /**
* Sets the read cursor in a group by a group name and the latest message by group name.
* See: unofficial method
*/
  api.groups.markByGroupNameAndLastMessageByGroupName = async name =>
    api.utils.handleError(async () => {
      let id = await api.groups.getIdByGroupName(name);
      let ts = await api.groups.getTimestampOfLastMessageByGroupName(name);
      return await api.groups.mark(id, ts);
    });
};
