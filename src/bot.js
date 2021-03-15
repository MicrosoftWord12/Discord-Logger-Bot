const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const PREFIX = '!';
const commandName = '';
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach((handler) => {
	require(`./Handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);

// client.on('message', (message) => {
// 	if (message.author.bot || !message.content.startsWith('!')) return;
// 	const args = message.content.slice(PREFIX?.length).split(/ +/);
// 	const command = args.shift()?.toLowerCase();

// 	try {
// 		const commandFile = require(`./Commands/${command}`);
// 		commandFile.run(client, message, args, commandName);
// 	} catch (e) {
// 		console.log(e);
// 		return;
// 	}
// });

// client.on('ready', () => {
// 	console.log('Bot is ready');

// 	checkForCommandFiles();
// 	checkForEventFiles();
// });

// client.login(process.env.TOKEN);

// function checkForCommandFiles() {
// 	const files = fs.readdirSync('./src/Commands/');
// 	if (files.length === 0) console.log('There is probably no file/files');
// 	files.forEach((file) => {
// 		if (file.endsWith('.ts') || file.endsWith('.js')) {
// 			console.log(`File ${files} loaded`);
// 			console.log(`Loaded ${files.length}`);
// 		}
// 	});
// }

// function checkForEventFiles() {
// 	const eventFiles = fs.readdirSync('./src/Events');
// 	for (const file of eventFiles) {
// 		const event = require(`./src/Events/${file}`);
// 		console.log(`File ${file} loaded`);
// 		console.log(`Loaded ${file.length}`);
// 		if (event.once) {
// 			client.once(event.name, (...args) => event.run(...args, client));
// 		} else {
// 			client.on(event.name, (...args) => event.run(...args, client));
// 		}
// 	}
// }
