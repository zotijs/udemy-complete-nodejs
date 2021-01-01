const yargs = require('yargs');

const { addNote, removeNote, listNotes, readNote } = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// create add command
// run: node app.js add --title="My Title" --body="My Body"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        addNote(argv.title, argv.body);
    },
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        removeNote(argv.title);
    },
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        listNotes();
    },
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        readNote(argv.title);
    },
});

yargs.parse();

// add, remove, list notes
