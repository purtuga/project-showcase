#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const cwd = process.cwd();
const packageJsonFile = require(path.join(cwd, "package.json"));
const readline = require('readline');

console.log(`
--------------------------
 Setup Project Showcase
--------------------------
 Project: ${packageJsonFile.name}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`
 Project Showcase will be added to this project.
 Continue? Y|n  `, answer => {
    answer = String(answer).trim().toLowerCase();
    if (answer === "y" || !answer) {
        runSetup();
    }
    else {
        console.log(`
Aborted. Nothing done!`);
        process.exit(0);
    }
});


function runSetup () {
    if (!fs.existsSync(path.join(cwd, "showcase"))) {
        console.log(" --> setting up /showcase directory");
        setupShowcaseAtProjectRoot();
    }

    if (fs.existsSync(path.join(cwd, "my.dev"))) {
        console.log(" --> setting up /my.dev/showcase.html for dev.");
        setupShowcaseInDevFolder();
    }

    console.log("\n DONE!\n--------------------------\n");
    process.exit();
}


function setupShowcaseAtProjectRoot() {
    fs.mkdirSync(path.join(cwd, "showcase"));
    const createShowcaseFor = new Function(
        "package",
        "return `" + fs.readFileSync(path.join(__dirname, "templates", "showcase.index.js"), "utf8").replace(/\`/g, "\\`") + "`;"
    );
    fs.writeFileSync(path.join(cwd, "showcase", "index.js"), createShowcaseFor(packageJsonFile));
}

function setupShowcaseInDevFolder () {
    const createShowcaseFor = new Function(
        "package",
        "return `" + fs.readFileSync(path.join(__dirname, "templates", "showcase.dev.html"), "utf8").replace(/\`/g, "\\`") + "`;"
    );
    fs.writeFileSync(path.join(cwd, "my.dev", "showcase.html"), createShowcaseFor(packageJsonFile));
}

