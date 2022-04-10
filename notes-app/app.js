const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize yargs version

yargs.version('1.1.0');

// create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Body Description',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		console.log('Title: ' + argv.title);
		console.log('Body: ' + argv.body);
	},
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing a new note...');
	},
});
yargs.command({
	command: 'list',
	describe: 'Listing all notes',
	handler: function () {
		console.log('Listing all notes...');
	},
});
yargs.command({
	command: 'read',
	describe: 'Reading a specific note',
	handler: function () {
		console.log('Reading a note...');
	},
});

// add, remove, read, list

yargs.parse();
