const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        console.log(chalk.red.inverse('Note title taken!!!'));

        return;
    }

    const newNotes = [...notes, { title, body }];

    saveNotes(newNotes);
    console.log(chalk.green.inverse(`Note: ${title} added!!!`));
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);

    saveNotes(filteredNotes);

    filteredNotes.length !== notes.length &&
        console.log(chalk.green.inverse('Note removed!!!'));
    filteredNotes.length === notes.length &&
        console.log(chalk.red.inverse('No note found!!!'));
};

const listNotes = () => {
    console.log(chalk.green.inverse.bold('Your notes:\n'));
    const notes = loadNotes();

    notes.forEach((note) => console.log(chalk.bold(note.title)));
};

const readNote = (title) => {
    const notes = loadNotes();

    const foundNote = notes.find((note) => note.title === title);

    if (!foundNote) {
        console.log(chalk.red.inverse('No note found!!!'));

        return;
    }

    console.log(chalk.green.inverse.bold(foundNote.title));
    console.log(foundNote.body);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    } catch {
        return [];
    }
};

module.exports = { addNote, removeNote, listNotes, readNote };
