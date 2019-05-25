const chalk = require('chalk');
const notes = require('./session_2/note');
const yargs = require('yargs');


// Customize yargs
yargs.version('1.1.1');

// create add command
yargs.command({
    command: 'add',
    describe: 'add the note!',
    builder: {
        title:{
            describe: 'title the nite!',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(a){
        notes.addNotes(a.title, a.body);
    }
});

// create remove note
yargs.command({
    command: 'remove',
    describe: 'remove the note!',
    handler :{
        title : {
            describe: 'note remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(aa){
        notes.removeNotes(aa.title);
    }
});

// create Raed command
yargs.command({
    command: 'read',
    describe: 'Read the note!',
    handler: function(){
        console.log(chalk.bold.green.inverse('read the note!'));
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'List the note!',
    builder:{
        title : {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(aa){
        notes.addNotes(aa.title, aa.body);
    }
});

// command
yargs.parse()
// console.log(yargs.argv);














// const msg = getNotes();
// // console.log(msg);

// const command = process.argv[2];
// if(command === 'add'){
//     console.log(chalk.green.inverse("Adding Note!"));
// }else if(command === 'remove'){
//     console.log(chalk.red.inverse("Remove Note!"));
// }