const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    handler : ()=>{
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command : 'list',
    describe : 'List your notes',
    handler : ()=>{
        console.log('Listing the notes')
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'Read the note',
    handler : ()=>{
        console.log('Read the note')
    }
})

yargs.parse()
