const chalk = require("chalk")
const { demandOption } = require("yargs")
const yargs = require("yargs")
const note = require("./notes.js")


yargs.version("1.1.0")

//Create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) { //missed the argv!
        note.addNote(argv.title,argv.body)

    }
})

//Create remove command
yargs.command({
   command: "remove",
   builder: {
       title: {
           describe: "Note title",
           demandOption: true,
           type: "string"
       }
   },
   description: "Remove a note",
   handler(argv){
       note.removeNote(argv.title)
   } 
})

yargs.command({
    command: "list",
    description: "List notes",
    handler(){
        console.log("Listing notes")
        note.listNotes();
    }
})

yargs.command({

    command: "read",
    description: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(vargs){
        console.log("Reading a note")
        note.readNote(vargs.title)
    }
})

yargs.parse()
//console.log(yargs.argv)