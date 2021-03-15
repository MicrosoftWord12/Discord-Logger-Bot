const fs = require('fs');

module.exports = (client, Discord) => {
	const files = fs.readdirSync('./src/Commands').filter((file) => file.endsWith('.js'));
	console.log(`Command loaded: ${files.length}`);
	console.log(`Command Names: ${files}`);
	for (const file of files) {
		const command = require(`../Commands/${file}`);
		if (command.name) {
			client.commands.set(command.name, command);
		} else {
			continue;
		}
	}
};
