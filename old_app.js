ret_str = getNotes()
console.log(ret_str)
console.log(chalk.green("Success!"))
console.log(chalk.red.bold.inverse("Inverse and bold but red."))


console.log(process.argv)
const command = process.argv[2] 

if (command === "add") {
    console.log("calling add")
} else if (command === "remove") {
    console.log("calling remove")
}
// const add = require("./utils.js")

// const sum = add(4,-2)

// console.log(sum)

//const fs = require('fs')
//fs.writeFileSync('notes.txt', "My name is Jeanne.")
//fs.appendFileSync('notes.txt', " I am learning Node.js.")
