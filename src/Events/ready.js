const discord = require('discord.js');
require('dotenv').config();

module.exports = {
	// name: 'ready',
	name: 'ready',
	once: true,
	execute() {
		console.log('The bot is online');
	},
};
