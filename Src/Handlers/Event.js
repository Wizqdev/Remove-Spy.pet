// Importing Modules
const fs = require('fs');
const colors = require(`colors`);
const path = require("path");


async function loadEvents(dir, client, indent = 0){
    let files = fs.readdirSync(dir) 
    if((dir.split("/")[dir.split("/").length-2]) !== "Events") console.log(` ${''.repeat(indent)}Loading Events For: ${(dir.split("/")[dir.split("/").length-2])}`)
    for(const file of files) {
        if(fs.statSync(`${dir}/${file}`).isDirectory()) loadEvents(`${dir.slice(0, dir.length-1)}/${file}/`, client, indent+1)
        else {
            if(!file.startsWith("-") && file.endsWith(".js")) {
                let eventPath = path.join(process.cwd(), dir, file);
                const event = require(eventPath);
                event.runOnce ? client.once(event.name, (...args) => event.run(...args, client)) : client.on(event.name, (...args) => event.run(...args, client));
                console.log(` ${'  '.repeat(indent+1)}Loaded ${event.name}`.bold.yellow)
            }
            else {
                console.log(` ${''.repeat(indent+1)}Skipped ${file.slice(1)}`.bold.underline.orange)
            }
        }
    }
}

module.exports = async (client) => {
    await loadEvents("./Src/Events/", client) 
    console.log(` All Events Have Been Loaded!`.bold.green)
}


/* 
This Event Handler Was Made By @flaxeneel2 
His Github Like: https://github.com/flaxeneel2
*/