const os = require('node:os')

console.log("Information about your S.0: ")
console.log("============================")
console.log("Name about your S.O:", os.platform())
console.log("Version about your S.O:", os.release())
console.log("Architecture about your S.O:", os.arch())
console.log("CPUs about your S.O:", os.cpus()) // vamos a poder escalar procesos en Node
console.log("Total memory: ", os.totalmem() / 1024 / 1024)
console.log("Total memory free: ", os.freemem() / 1024 / 1024)
console.log("Uptime :", os.uptime() / 60 / 60)
