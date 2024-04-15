const fs = require("fs")

function readFs() {
  fs.readFile('file.txt', "utf-8", (err, data) => {
    console.log(data)
  })
}
readFs()

function writeFile() {
  fs.writeFile('file.txt', "I am writing into the file", (err) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log("File is written successfully")
      console.log(fs.readFileSync('file.txt', 'utf-8'))
    }
  })
}

writeFile()