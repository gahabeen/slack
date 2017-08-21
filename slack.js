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

  let api = {
    channels: {},
    groups: {},
    chat: {}
  };

  // Channels

  api.channels.create = async function(name) {
    try {
      return await parent.slackApi("channels.create", {
        name: name.replace(/\#+/, "")
      });
    } catch (error) {
      throw error;
    }
  };

  api.channels.list = async function() {
    try {
      let response = await parent.slackApi("channels.list", {});
      if (response.ok === true) {
        return response.channels;
      } else {
        throw response;
      }
    } catch (error) {
      throw error;
    }
  };

  api.channels.findByName = async function(name) {
    try {
      let channelsList = await api.channels.list();
      let channel = channelsList.find(channel => channel.name === name) || null;
      return channel;
    } catch (error) {
      throw error;
    }
  };

  api.channels.getIdByName = async function(name) {
    try {
      let foundChannel = await api.channels.findByName(name);
      return foundChannel && foundChannel.id ? foundChannel.id : null;
    } catch (error) {
      throw error;
    }
  };

  api.channels.archive = async function(id) {
    try {
      return await parent.slackApi("channels.archive", {
        channel: id
      });
    } catch (error) {
      throw error;
    }
  };

  api.channels.archiveByName = async function(name) {
    try {
      let id = await api.channels.getIdByName(name);
      return await api.channels.archive(id);
    } catch (error) {
      throw error;
    }
  };

  // Groups

  api.groups.create = async function(name) {
    try {
      return await parent.slackApi("groups.create", {
        name: name.replace(/\#+/, "")
      });
    } catch (error) {
      throw error;
    }
  };

  api.groups.list = async function() {
    try {
      return await parent.slackApi("groups.list", {});
    } catch (error) {
      throw error;
    }
  };

  api.groups.findByName = async function(name) {
    try {
      let groupsList = await api.groups.list();
      let group = groupsList.find(group => group.name === name) || null;
      return group;
    } catch (error) {
      throw error;
    }
  };

  api.groups.getIdByName = async function(name) {
    try {
      let foundGroup = await api.groups.findByName(name);
      return foundGroup && foundGroup.id ? foundGroup.id : null;
    } catch (error) {
      throw error;
    }
  };

  api.groups.archive = async function(id) {
    try {
      return await parent.slackApi("groups.archive", {
        group: id
      });
    } catch (error) {
      throw error;
    }
  };

  api.groups.archiveByName = async function(name) {
    try {
      let id = await api.groups.getIdByName(name);
      return await api.groups.archive(id);
    } catch (error) {
      throw error;
    }
  };

  // Chat

  api.chat.postMessage = async function(
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
  ) {
    try {
      return await parent.slackApi("chat.postMessage", {
        text: text,
        username: username,
        channel: `#${channel}`,
        attachments: JSON.stringify(attachments)
      });
    } catch (error) {
      throw error;
    }
  };

  api.chat.postBuildMessage = async function(options, template, sourceObject) {
    try {

      return await api.groups.archive(id);
    } catch (error) {
      throw error;
    }
  };

  return api;
}

let slack = new Slack(
  "xoxp-216754966870-215791288499-219888067830-7461b1d462416d794ad0a6f7d2bd90f2"
);

// slack.chat
//   .postMessage({
//     username: "Alertes Retards",
//     text: "Super test!",
//     channel: "red-testp"
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// slack.channels
//   .list()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// slack.channels
//   .getIdByName("general")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
