const fs = require('fs');
const chalk = require('chalk');


const getNotes = function(){
    return "this is learn Node js";
}

const addNotes = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(notes){
        return notes.title == title || notes.body == body;
    })

    if(duplicateNotes.length === 0){
        notes.push(
            {
                title : title,
                body: body
            }
        );
        saveNode(notes);
        console.log('add the new');
    }else{
        console.log('note title or body teken!');
    }
}

const saveNode = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return [];
    }
}

const removeNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(notes){
        return notes.title !== title;
    });

    if(notes.length > notesToKeep.length){
        console.log(chalk.inverse.green('Note Remove!'));
        saveNode(notesToKeep);
    }else{
        console.log(chalk.inverse.red('No note found!'));
    }

}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
};