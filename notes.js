const chalk = require('chalk')
const fs = require('fs')

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your notes: "))
    notes.forEach(
        (note) => console.log(note.title)
        )
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger 
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    if (notes.length>notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed, title: " + title))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("Title note found: " + title))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    noteToRead = notes.find(note => note.title == title)
    if (noteToRead){
        console.log(chalk.green.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse("Title not found: " + title))
    }
}

const saveNotes = (notes)  => {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", notesJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}