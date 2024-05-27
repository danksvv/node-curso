const fs = require('node:fs')

const text = fs.readFileSync('./file.txt', 'utf8')

console.log(text)



