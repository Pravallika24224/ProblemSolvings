// Read a file, remove all the extra spaces and write it back to the same file.

const fs = require("fs")

function fileCleaner() {
  fs.readFile('file.txt', 'utf-8', (err, data) => {
    var newString = data.replace(/\s+/g,' ').trim();
    fs.writeFile('file.txt', newString, 'utf-8', (err) => {
      if(err) {
        console.log(err)
      }
      else {
        console.log("File is written successfully")
        console.log(fs.readFileSync('file.txt', 'utf-8'))
      }
    })
  })
}

fileCleaner()