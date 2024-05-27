const fs = require('node:fs') // apartir de node 16 siempre poner el node delante 

const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size,
)


