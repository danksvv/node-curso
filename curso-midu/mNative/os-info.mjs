import { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os"
// other alternative 
// import os from 'node:os'

console.log("Information about your S.0: ")
console.log("============================")
console.log("Name about your S.O:", platform())
console.log("Version about your S.O:", release())
console.log("Architecture about your S.O:", arch())
console.log("CPUs about your S.O:", cpus()) // vamos a poder escalar procesos en Node
console.log("Total memory: ", totalmem() / 1024 / 1024)
console.log("Total memory free: ", freemem() / 1024 / 1024)
console.log("Uptime :", uptime() / 60 / 60)
