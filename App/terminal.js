var moment = require("moment");
const ConsoleTitle = require("node-bash-title");
const { SETTINGS } = require('./config.js')
var clc = require("cli-color");

module.exports = function terminal() {

if (SETTINGS.USER.NAME === ""){
    var username = "undefined"
    } else {
    var username = SETTINGS.USER.NAME
}

console.log(clc.redBright(`                                                 
                                             888                                                     
                                             888                                                     
                                             888                                                     
                        888  888  888 .d88b. 88888b. .d8888b  .d8888b888d888 .d88b.  .d88b. 88888b.  
                        888  888  888d8P  Y8b888 "88b88K     d88P"   888P"  d8P  Y8bd8P  Y8b888 "88b 
                        888  888  88888888888888  888"Y8888b.888     888    8888888888888888888  888 
                        Y88b 888 d88PY8b.    888 d88P     X88Y88b.   888    Y8b.    Y8b.    888  888 
                         "Y8888888P"  "Y8888 88888P"  88888P' "Y8888P888     "Y8888  "Y8888 888  888 
                                                                             
                                                                                                                 `))
console.log()
console.log(clc.redBright(`                                             Welcome on ` + clc.whiteBright(SETTINGS.APP.NAME + ` (${SETTINGS.APP.VERSION})`)))
console.log()
console.log(clc.redBright(`                                                 User: ` + clc.whiteBright(username)))
console.log(clc.redBright(`                                                    Rank: ` + clc.whiteBright(SETTINGS.USER.RANK)))

console.log(clc.redBright(`________________________________________________________________________________________________________________________`))
console.log()
ConsoleTitle(`[${moment().format("HH:mm:ss") + "h"}] ${SETTINGS.USER.RANK} -/ ${username}`)
}