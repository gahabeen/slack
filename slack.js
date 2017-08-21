function Slack(apiToken = null) {
  let api = {
    variables: {}, // done
    utils: {}, // done
    channels: {}, // done
    groups: {}, // done
    chat: {}, // half done
    api: {}, // done
    apps: { // done
			permissions: {}
		},
    auth: {}, // done
    bots: {},
    files: {
      comments: {}
    },
    im: {},
    mpim: {},
    pins: {},
    reactions: {},
    rtm: {},
    search: {},
    starts: {},
    team: {
      profile: {}
    },
    usergroups: {
      users: {} 
    },
    users: { // done
      profile: {} 
    }
  };

  api.variables = {
    baseUrl: "https://slack.com/api",
    apiToken: apiToken
  };

  require("./api/api")(api);
  require("./api/utils")(api);
  require("./api/channels")(api);
  require("./api/groups")(api);
	require("./api/chat")(api);
  require("./api/users")(api);
  require("./api/apps")(api);
  require("./api/auth")(api);
	

  return api;
}

module.exports = Slack;
