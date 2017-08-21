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
See native api: <a href="https://api.slack.com/methods/api.test" target="_blank">api.test</a>

### apps

- #### .apps.permissions.info()
Returns list of permissions this app has on a team.    
See native api: <a href="https://api.slack.com/methods/apps.permissions.info" target="_blank">apps.permissions.info</a>

- #### .apps.permissions.request(scopes, trigged_id)
Allows an app to request additional scopes   
See native api: <a href="https://api.slack.com/methods/apps.permissions.request" target="_blank">apps.permissions.request</a>

### auth

- #### .auth.revoke()
Revokes a token.  
See native api: <a href="https://api.slack.com/methods/auth.revoke" target="_blank">auth.revoke</a>

- #### .auth.test(test)
Checks authentication & identity.  
See native api: <a href="https://api.slack.com/methods/auth.test" target="_blank">auth.test</a>

### bots

- #### ~~.bots.info()~~ (not implemented yet)
Gets information about a bot user.  
See native api: <a href="https://api.slack.com/methods/bots.info" target="_blank">bots.info</a>

### channels

- #### .channels.archive()
Archives a channel.  
See native api: <a href="https://api.slack.com/methods/channels.archive" target="_blank">channels.archive</a>

- #### .channels.archiveByChannelName(name)
Archives a channel by a channel name.   
*Custom method*

- #### .channels.create(name)
Creates a channel.  
See native api: <a href="https://api.slack.com/methods/channels.create" target="_blank">channels.create</a>

- #### .channels.history()
Fetches history of messages and events from a channel.  
See native api: <a href="https://api.slack.com/methods/channels.history" target="_blank">channels.history</a>

- #### .channels.historyByChannelName(name, validate)
Fetches history of messages and events from a channel by its name.   
*Custom method*

- #### .channels.lastMessage(id, options)
Fetches last message of a channel   
*Custom method*

- #### .channels.lastMessageByChannelName(name, options)
Fetches last message of a channel by its name.   
*Custom method*

- #### .channels.getTimestampOfLastMessage(id, options)
Get timestamp of last message of a channel   
*Custom method*

- #### .channels.getTimestampOfLastMessageByChannelName(name, options)
Get timestamp of last message of a channel by channel name   
*Custom method*

- #### .channels.lastMessageStartingWith(id, messageStartingText, options)
Fetches last message starting by a text.   
*Custom method*

- #### .channels.lastMessageStartingWithByChannelName(name, messageStartingText, options)
Fetches last message starting by a text by a channel name.   
*Custom method*

- #### .channels.getTimestampOfLastMessageStartingWithByChannelName(name, messageStartingText, options)
Get timestamp of last message of a channel by channel name.   
*Custom method*

- #### .channels.info()
Gets information about a channel.  
See native api: <a href="https://api.slack.com/methods/channels.info" target="_blank">channels.info</a>

- #### .channels.invite(id, userId)
Invites a user to a channel.  
See native api: <a href="https://api.slack.com/methods/channels.invite" target="_blank">channels.invite</a>

- #### .channels.inviteByChannelName(name, userId)
Invites a user from a channel by channel name.   
*Custom method*

- #### .channels.inviteByUserName(id, userName)
Invites a user from a channel by channel name.   
*Custom method*

- #### .channels.inviteByChannelNameAndUserName(name, userName)
Invites a user by user name from a channel by channel name.   
*Custom method*

- #### ~~.channels.join()~~ (not implemented yet)
Joins a channel, creating it if needed.  
See native api: <a href="https://api.slack.com/methods/channels.join" target="_blank">channels.join</a>

- #### .channels.kick(id, userId)
Removes a user from a channel.  
See native api: <a href="https://api.slack.com/methods/channels.kick" target="_blank">channels.kick</a>

- #### .channels.kickByChannelName(name, userId)
Removes a user from a channel by channel name.   
*Custom method*

- #### .channels.kickByUserName(id, userName)
Removes a user by user name from a channel.   
*Custom method*

- #### .channels.kickByChannelNameAndUserName(name, userName)
Removes a user by user name from a channel by channel name.   
*Custom method*

- #### ~~.channels.leave()~~ (not implemented yet)
Leaves a channel.  
See native api: <a href="https://api.slack.com/methods/channels.leave" target="_blank">channels.leave</a>

- #### .channels.list()
Lists all channels in a Slack team.  
See native api: <a href="https://api.slack.com/methods/channels.list" target="_blank">channels.list</a>

- #### .channels.findByChannelName(name)
Return a channel object from a given name.   
*Custom method*

- #### .channels.getIdByChannelName(name)
Return an id from a given channel name.   
*Custom method*

- #### .channels.mark(id, timestamp)
Sets the read cursor in a channel.  
See native api: <a href="https://api.slack.com/methods/channels.mark" target="_blank">channels.mark</a>

- #### .channels.markByChannelName(name, timestamp)
Sets the read cursor in a channel by a channel name.   
*Custom method*

- #### .channels.markByChannelNameAndLastMessageByChannelName(name)
Sets the read cursor in a channel by a channel name and the latest message by channel name.   
*Custom method*

- #### .channels.rename(id, newName, validate)
Renames a channel.  
See native api: <a href="https://api.slack.com/methods/channels.rename" target="_blank">channels.rename</a>

- #### .channels.renameByChannelName(name, newName, validate)
Renames a channel by a channel name.    
*Custom method*

- #### .channels.replies()
Retrieve a thread of messages posted to a channel  
See native api: <a href="https://api.slack.com/methods/channels.replies" target="_blank">channels.replies</a>

- #### .channels.repliesByChannelName(name, thread_ts)
Retrieve a thread of messages posted to a channel by a channel name.   
*Custom method*

- #### .channels.repliesFromLastMessageStartingWithByChannelName(name, messageStartingText)
Retrieve a thread of from the last message starting with a text and posted to a channel by a channel name.   
*Custom method*

- #### .channels.setPurpose(id, purpose)
Sets the purpose for a channel. 
See native api: <a href="https://api.slack.com/methods/channels.setPurpose" target="_blank">channels.setPurpose</a>

- #### .channels.setPurposeByChannelName(name, purpose)
Sets the purpose for a channel by a channel name.    
*Custom method*

- #### .channels.setTopic(id, topic)
Sets the topic for a channel.  
See native api: <a href="https://api.slack.com/methods/channels.setTopic" target="_blank">channels.setTopic</a>

- #### .channels.setTopicByChannelName(name, topic)
Sets the topic for a channel by a channel name.    
*Custom method*

- #### .channels.unarchive()
Unarchives a channel.  
See native api: <a href="https://api.slack.com/methods/channels.unarchive" target="_blank">channels.unarchive</a>

- #### .channels.unarchiveByChannelName(name)
Unarchives a channel by a channel name.   
*Custom method*

### groups

- #### .groups.archive()
Archives a group.  
See native api: <a href="https://api.slack.com/methods/groups.archive" target="_blank">groups.archive</a>

- #### .groups.archiveByGroupName(name)
Archives a group by a group name.   
*Custom method*

- #### .groups.create(name)
Creates a group.  
See native api: <a href="https://api.slack.com/methods/groups.create" target="_blank">groups.create</a>

- #### .groups.history()
Fetches history of messages and events from a group.  
See native api: <a href="https://api.slack.com/methods/groups.history" target="_blank">groups.history</a>

- #### .groups.historyByGroupName(name, validate)
Fetches history of messages and events from a group by its name.   
*Custom method*

- #### .groups.lastMessage(id, options)
Fetches last message of a group   
*Custom method*

- #### .groups.lastMessageByGroupName(name, options)
Fetches last message of a group by its name.   
*Custom method*

- #### .groups.getTimestampOfLastMessage(id, options)
Get timestamp of last message of a group   
*Custom method*

- #### .groups.getTimestampOfLastMessageByGroupName(name, options)
Get timestamp of last message of a group by group name   
*Custom method*

- #### .groups.lastMessageStartingWith(id, messageStartingText, options)
Fetches last message starting by a text.   
*Custom method*

- #### .groups.lastMessageStartingWithByGroupName(name, messageStartingText, options)
Fetches last message starting by a text by a group name.   
*Custom method*

- #### .groups.getTimestampOfLastMessageStartingWithByGroupName(name, messageStartingText, options)
Get timestamp of last message of a group by group name.   
*Custom method*

- #### .groups.info()
Gets information about a group.  
See native api: <a href="https://api.slack.com/methods/groups.info" target="_blank">groups.info</a>

- #### .groups.invite(id, userId)
Invites a user to a group.  
See native api: <a href="https://api.slack.com/methods/groups.invite" target="_blank">groups.invite</a>

- #### .groups.inviteByGroupName(name, userId)
Invites a user from a group by group name.   
*Custom method*

- #### .groups.inviteByUserName(id, userName)
Invites a user from a group by group name.   
*Custom method*

- #### .groups.inviteByGroupNameAndUserName(name, userName)
Invites a user by user name from a group by group name.   
*Custom method*

- #### ~~.groups.join()~~ (not implemented yet)
Joins a group, creating it if needed.  
See native api: <a href="https://api.slack.com/methods/groups.join" target="_blank">groups.join</a>

- #### .groups.kick(id, userId)
Removes a user from a group.  
See native api: <a href="https://api.slack.com/methods/groups.kick" target="_blank">groups.kick</a>

- #### .groups.kickByGroupName(name, userId)
Removes a user from a group by group name.   
*Custom method*

- #### .groups.kickByUserName(id, userName)
Removes a user by user name from a group.   
*Custom method*

- #### .groups.kickByGroupNameAndUserName(name, userName)
Removes a user by user name from a group by group name.   
*Custom method*

- #### ~~.groups.leave()~~ (not implemented yet)
Leaves a group.  
See native api: <a href="https://api.slack.com/methods/groups.leave" target="_blank">groups.leave</a>

- #### .groups.list()
Lists all groups in a Slack team.  
See native api: <a href="https://api.slack.com/methods/groups.list" target="_blank">groups.list</a>

- #### .groups.findByGroupName(name)
Return a group object from a given name.   
*Custom method*

- #### .groups.getIdByGroupName(name)
Return an id from a given group name.   
*Custom method*

- #### .groups.mark(id, timestamp)
Sets the read cursor in a group.  
See native api: <a href="https://api.slack.com/methods/groups.mark" target="_blank">groups.mark</a>

- #### .groups.markByGroupName(name, timestamp)
Sets the read cursor in a group by a group name.   
*Custom method*

- #### .groups.markByGroupNameAndLastMessageByGroupName(name)
Sets the read cursor in a group by a group name and the latest message by group name.   
*Custom method*

- #### .groups.rename(id, newName, validate)
Renames a group.  
See native api: <a href="https://api.slack.com/methods/groups.rename" target="_blank">groups.rename</a>

- #### .groups.renameByGroupName(name, newName, validate)
Renames a group by a group name.    
*Custom method*

- #### .groups.replies()
Retrieve a thread of messages posted to a group  
See native api: <a href="https://api.slack.com/methods/groups.replies" target="_blank">groups.replies</a>

- #### .groups.repliesByGroupName(name, thread_ts)
Retrieve a thread of messages posted to a group by a group name.   
*Custom method*

- #### .groups.repliesFromLastMessageStartingWithByGroupName(name, messageStartingText)
Retrieve a thread of from the last message starting with a text and posted to a group by a group name.   
*Custom method*

- #### .groups.setPurpose(id, purpose)
Sets the purpose for a group. 
See native api: <a href="https://api.slack.com/methods/groups.setPurpose" target="_blank">groups.setPurpose</a>

- #### .groups.setPurposeByGroupName(name, purpose)
Sets the purpose for a group by a group name.    
*Custom method*

- #### .groups.setTopic(id, topic)
Sets the topic for a group.  
See native api: <a href="https://api.slack.com/methods/groups.setTopic" target="_blank">groups.setTopic</a>

- #### .groups.setTopicByGroupName(name, topic)
Sets the topic for a group by a group name.    
*Custom method*

- #### .groups.unarchive()
Unarchives a group.  
See native api: <a href="https://api.slack.com/methods/groups.unarchive" target="_blank">groups.unarchive</a>

- #### .groups.unarchiveByGroupName(name)
Unarchives a group by a group name.   
*Custom method*

### chat

- #### .chat.delete(id, messageTimestamp)
Deletes a message.  
See native api: <a href="https://api.slack.com/methods/chat.delete" target="_blank">chat.delete</a>

- #### .chat.deleteByChannelName(name, messageTimestamp)
Deletes a message by channel name.   
*Custom method*

- #### .chat.deleteLastMessageByChannelName(name)
Deletes last message of channel by channel name.   
*Custom method*

- #### .chat.deleteLastMessageStartingWithByChannelName(name, messageStartingWith)
Deletesthe last message starting with a text by channel name   
*Custom method*

- #### .chat.meMessage(id, text)
Share a me message into a channel.  
See native api: <a href="https://api.slack.com/methods/chat.meMessage" target="_blank">chat.meMessage</a>

- #### .chat.meMessageByChannelName(name, text)
Share a me message into a channel by channel name.   
*Custom method*

- #### .chat.meMessageByGroupName(name, text)
Share a me message into a channel by group name.   
*Custom method*

- #### .chat.postEphemeral(id, userId, text, options = {})
Sends an ephemeral message to a user in a channel.
See native api: <a href="https://api.slack.com/methods/chat.postEphemeral" target="_blank">chat.postEphemeral</a>

- #### .chat.postEphemeralByUserName(id, userName, text, options = {})
Sends an ephemeral message to a user name in a channel.   
*Custom method*

- #### .chat.postEphemeralByChannelNameAndUserName(name, userName, text, options = {})
Sends an ephemeral message to a user name in a channel by its name.   
*Custom method*

- #### .chat.postMessage(idOrName, text, options = {})
Sends a message to a channel.  
See native api: <a href="https://api.slack.com/methods/chat.postMessage" target="_blank">chat.postMessage</a>

- #### .chat.unfurl(id, messageTimestamp, unfurls, options = {})
Provide custom unfurl behavior for user-posted URLs  
See native api: <a href="https://api.slack.com/methods/chat.unfurl" target="_blank">chat.unfurl</a>

- #### .chat.unfurlByChannelName(name,  messageTimestamp, unfurls, options = {})
Provide custom unfurl behavior for user-posted URLs by channel name   
*Custom method*

- #### .chat.unfurlLastMessageStartingWithByChannelName(name,  messageStartingText, unfurls, options = {})
Provide custom unfurl behavior for user-posted URLs by channel name for last message starting by a text   
*Custom method*

- #### .chat.update()
Updates a message.  
See native api: <a href="https://api.slack.com/methods/chat.update" target="_blank">chat.update</a>

- #### .chat.updateByChannelName(name, newText, messageTimestamp, options = {})
Updates a message by channel name   
*Custom method*

- #### .chat.updateLastMessageByChannelName(name, newText, options = {})
Updates a message by channel name   
*Custom method*

- #### .chat.updateLastMessageStartingWithByChannelName(name, messageStartingText, newText, options = {})
Updates last message of a channel by channel name   
*Custom method*

### users

- #### .users.profile.list(limit = 20, presence = false, options = {})
Lists all users in a Slack team.
See native api: <a href="https://api.slack.com/methods/users.list" target="_blank">users.list</a>

- #### .users.getByUserName(name, ...options)
Get a user by user name.  
*Custom method*

- #### .users.getIdByUserName(name, ...options)
Get user id by user name.  
*Custom method*

- #### .users.profile.get(id, include_labels = true)
Retrieves a user's profile information.  
See native api: <a href="https://api.slack.com/methods/users.profile.get" target="_blank">users.profile.get</a>

- #### .users.profile.set(name, include_labels = true)
Set the profile information for a user.  
See native api: <a href="https://api.slack.com/methods/users.profile.set" target="_blank">users.profile.set</a>

### utils

- #### .utils.buildUrl(method)
Build the url for the request.   
*Custom method*

- #### .utils.post(method, body)
Post a request to the slack API.
*Custom method*

- #### .utils.handleError(fn)
Handle error globally.  
*Custom method*
