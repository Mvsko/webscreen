//#▉#########################▶ Modules ◀########################▉#

const path = require('path');
const ps = require("prompt-sync");
const phantom = require("phantom");
const ConsoleTitle = require("node-bash-title");
var clc = require("cli-color");
var moment = require("moment");
const fs = require ("fs");
const prompt = ps({ sigint: true });

const { SETTINGS } = require('./App/config.js')
const terminal = require('./App/terminal.js')
const cb = clc.blueBright;
const cw = clc.whiteBright;
const cr = clc.redBright;

//#▉##########################▶ Code ◀#########################▉#

ConsoleTitle("Authentification en cours..")

console.clear()
const takeScreenshots = async(url) => {
    const pathfile = `./output/${path.parse(url).name}/screenshot.png`
    const pathhtml = `./output/${path.parse(url).name}/code.html`
    const instance = await phantom.create()
    const page = await instance.createPage()
    const status = await page.open(url)
    const content = await page.property("content");

    if (status === "success"){
        console.log(cb("Le site web " + path.parse(url).name + " a bien été enregistré dans " + pathfile))
        await page.render(pathfile)
        await fs.writeFile(pathhtml, content, function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
    } else {
        console.log(cr("Le site web " + path.parse(url).name + " n'a pas été enregistré correctement dans " + pathfile + " suite à une erreur !"))
        webscreen()
    }

    await instance.exit()
}

function webscreen() {
    let website = prompt(cb("Website: "))
    if (website.startsWith("http://") || website.startsWith("https://")) {
        try {
            takeScreenshots(website)
        } catch(err) {
            console.log(err)
        }
    } else {
        console.log(cr("[") + cw(` Error ${SETTINGS.ERROR.HTTP.CODE} - ` + website + " ") + cr("] ") + cw(moment().format("HH:mm:ss") + "h") + cr(" - ") + cw(SETTINGS.ERROR.HTTP.DESCRIPTION))
        webscreen()

    }
}

terminal()
webscreen()