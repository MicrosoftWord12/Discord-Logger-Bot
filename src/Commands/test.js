const { Client, Message } = require('discord.js');

module.exports = {
	name: 'test',
	description: 'test',
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {string[]} args
	 */
	async execute(client, message, args) {
		message.channel.send('This is a test');
	},
};
