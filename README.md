# Slack
### An Extended Wrapper for Slack API, based on Promises/ES6

More than wrapping Slack's Web APIs, this module adds quite a few methods to build-up complex services in no time.



```javascript

/*
	As for now, no npm repo has been open.

	npm install https://github.com/phelpstream/slack.git --save
	or
	yarn add https://github.com/phelpstream/slack.git
*/

const Slack = require('slack');
let slack = new Slack( /* Slack API OAuth Access Token */);

// Post a message
slack.chat
	.postMessage("general", "Welcome to our slack, sent from Node!")
	.then(response => {
		console.log("Response:", response)
	}).catch(err => console.error(err))

// Update it (not a native method)
slack.chat
	.updateLastMessageByChannelName("general", "Welcome to our slack, updated from Node!")
	.then(response => {
		console.log("Response:", response)
	}).catch(err => console.error(err))

// Update it (not a native method)
slack.chat
	.deleteLastMessageStartingWithByChannelName("general", "Welcome to our slack")
	.then(response => {
		console.log("Response:", response)
	}).catch(err => console.error(err))

```

## Extended Api

### api

- #### .api.test()
Checks API calling code.  
See native api: [api.test](https://api.slack.com/methods)

### apps

- #### .apps.permissions.info()
Returns list of permissions this app has on a team.  
See native api: [apps.permissions.info](https://api.slack.com/methods/apps.permissions.info)

- #### .apps.permissions.request()
Allows an app to request additional scopes 
See native api: [apps.permissions.request](https://api.slack.com/methods/apps.permissions.request)

### auth

- #### .auth.revoke()
Revokes a token.
See native api: [auth.revoke](https://api.slack.com/methods/auth.revoke)

- #### .auth.test()
Checks authentication & identity.
See native api: [auth.test](https://api.slack.com/methods/auth.test)

### bots

- #### ~~.bots.info()~~ (not implemented yet)
Gets information about a bot user.
See native api: [bots.info](https://api.slack.com/methods/bots.info)

### channels

- #### .channels.archive()
Archives a channel.
See native api: [channels.archive](https://api.slack.com/methods/channels.archive)

- #### .channels.create()
Creates a channel.
See native api: [channels.create](https://api.slack.com/methods/channels.create)

- #### .channels.history()
Fetches history of messages and events from a channel.
See native api: [channels.history](https://api.slack.com/methods/channels.history)

- #### .channels.info()
Gets information about a channel.
See native api: [channels.info](https://api.slack.com/methods/channels.info)

- #### .channels.invite()
Invites a user to a channel.
See native api: [channels.invite](https://api.slack.com/methods/channels.invite)

- #### ~~.channels.join()~~ (not implemented yet)
Joins a channel, creating it if needed.
See native api: [channels.join](https://api.slack.com/methods/channels.join)

- #### .channels.kick()
Removes a user from a channel.
See native api: [channels.kick](https://api.slack.com/methods/channels.kick)

- #### ~~.channels.leave()~~ (not implemented yet)
Leaves a channel.
See native api: [channels.leave](https://api.slack.com/methods/channels.leave)

- #### .channels.list()
Lists all channels in a Slack team.
See native api: [channels.list](https://api.slack.com/methods/channels.list)

- #### .channels.mark()
Sets the read cursor in a channel.
See native api: [channels.mark](https://api.slack.com/methods/channels.mark)

- #### .channels.rename()
Renames a channel.
See native api: [channels.rename](https://api.slack.com/methods/channels.rename)

- #### .channels.replies()
Retrieve a thread of messages posted to a channel
See native api: [channels.replies](https://api.slack.com/methods/channels.replies)

- #### .channels.setPurpose()
Sets the purpose for a channel.
See native api: [channels.setPurpose](https://api.slack.com/methods/channels.setPurpose)

- #### .channels.setTopic()
Sets the topic for a channel.
See native api: [channels.setTopic](https://api.slack.com/methods/channels.setTopic)

- #### .channels.unarchive()
Unarchives a channel.
See native api: [channels.unarchive](https://api.slack.com/methods/channels.unarchive)

### groups

- #### .groups.archive()
Archives a group.
See native api: [groups.archive](https://api.slack.com/methods/groups.archive)

- #### .groups.create()
Creates a group.
See native api: [groups.create](https://api.slack.com/methods/groups.create)

- #### .groups.history()
Fetches history of messages and events from a group.
See native api: [groups.history](https://api.slack.com/methods/groups.history)

- #### .groups.info()
Gets information about a group.
See native api: [groups.info](https://api.slack.com/methods/groups.info)

- #### .groups.invite()
Invites a user to a group.
See native api: [groups.invite](https://api.slack.com/methods/groups.invite)

- #### ~~.groups.join()~~ (not implemented yet)
Joins a group, creating it if needed.
See native api: [groups.join](https://api.slack.com/methods/groups.join)

- #### .groups.kick()
Removes a user from a group.
See native api: [groups.kick](https://api.slack.com/methods/groups.kick)

- #### ~~.groups.leave()~~ (not implemented yet)
Leaves a group.
See native api: [groups.leave](https://api.slack.com/methods/groups.leave)

- #### .groups.list()
Lists all groups in a Slack team.
See native api: [groups.list](https://api.slack.com/methods/groups.list)

- #### .groups.mark()
Sets the read cursor in a group.
See native api: [groups.mark](https://api.slack.com/methods/groups.mark)

- #### .groups.rename()
Renames a group.
See native api: [groups.rename](https://api.slack.com/methods/groups.rename)

- #### .groups.replies()
Retrieve a thread of messages posted to a group
See native api: [groups.replies](https://api.slack.com/methods/groups.replies)

- #### .groups.setPurpose()
Sets the purpose for a group.
See native api: [groups.setPurpose](https://api.slack.com/methods/groups.setPurpose)

- #### .groups.setTopic()
Sets the topic for a group.
See native api: [groups.setTopic](https://api.slack.com/methods/groups.setTopic)

- #### .groups.unarchive()
Unarchives a group.
See native api: [groups.unarchive](https://api.slack.com/methods/groups.unarchive)

### chat

- #### .chat.delete()
Deletes a message.
See native api: [chat.delete](https://api.slack.com/methods/chat.delete)

- #### .chat.meMessage()
Share a me message into a channel.
See native api: [chat.meMessage](https://api.slack.com/methods/chat.meMessage)

- #### .chat.postEphemeral()
Sends an ephemeral message to a user in a channel.
See native api: [chat.postEphemeral](https://api.slack.com/methods/chat.postEphemeral)

- #### .chat.postMessage()
Sends a message to a channel.
See native api: [chat.postMessage](https://api.slack.com/methods/chat.postMessage)

- #### .chat.unfurl()
Provide custom unfurl behavior for user-posted URLs
See native api: [chat.unfurl](https://api.slack.com/methods/chat.unfurl)

- #### .chat.update()
Updates a message.
See native api: [chat.update](https://api.slack.com/methods/chat.update)

### users

- #### .users.profile.get()
Retrieves a user's profile information.
See native api: [users.profile.get](https://api.slack.com/methods/users.profile.get)

- #### .users.profile.set()
Set the profile information for a user.
See native api: [users.profile.set](https://api.slack.com/methods/users.profile.set)


	An more description of the API to come soon!