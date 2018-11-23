#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const cwd = process.cwd();
const buildUtils = require("@purtuga/project-base/lib/build.utils.js");
const packageJsonFile = require(path.join(cwd, "package.json"));

if (!packageJsonFile.buildFileName) {
    Object.defineProperty(packageJsonFile, "buildFileName", {
        configurable: true,
        value: buildUtils.parsePackageName(packageJsonFile.name)
    });
}



module.exports = function run () {
    if (fs.existsSync(path.join(cwd, "my.dev"))) {
        console.log(" --> setting up ./my.dev/showcase.html for dev.");
        setupShowcaseInDevFolder();
    }

    console.log("\n DONE!\n--------------------------\n");
};

function setupShowcaseInDevFolder () {
    const createShowcaseFor = new Function(
        "package",
        "return `" + fs.readFileSync(path.join(__dirname, "templates", "showcase.dev.html"), "utf8").replace(/\`/g, "\\`") + "`;"
    );
    fs.writeFileSync(path.join(cwd, "my.dev", "showcase.html"), createShowcaseFor(packageJsonFile));

    const devIndexJsFile = path.join(cwd, "my.dev", "index.js");

    // If the `my.dev` folder has a `index.js` file, then see if we need to add imports for the showcase
    if (fs.existsSync(devIndexJsFile)) {
        let writeUpdate = false;
        let devIndexJs = fs.readFileSync(devIndexJsFile, "utf8");
        let origDevIndexJs = devIndexJs;

        if (!/import .*\.\.\/showcase/.test(devIndexJs)) {
            writeUpdate = true;
            devIndexJs = `import "../showcase/index.js";
${ devIndexJs }
`;
        }

        if (!/import .*project-showcase/.test(devIndexJs)) {
            writeUpdate = true;
            devIndexJs = `import "@purtuga/project-showcase/src/import.js";
${ devIndexJs }
`;
        }

        if (writeUpdate) {
            // Back current
            fs.writeFileSync(devIndexJsFile + `.backup.${Date.now()}`, origDevIndexJs);

            // write new
            fs.writeFileSync(devIndexJsFile, devIndexJs);
        }
    }

    // If the `my.dev` folder has an index.html file, then see if we have to add a link to the showcase
    const devIndexHtmlFile = path.join(cwd, "my.dev", "index.html");

    if (fs.existsSync(devIndexHtmlFile)) {
        let writeUpdate = false;
        let devIndexHtml = fs.readFileSync(devIndexHtmlFile, "utf8");
        let origDevIndexHtml = devIndexHtml;

        if (!/showcase\.html/.test(devIndexHtml)) {
            writeUpdate = true;
            devIndexHtml = devIndexHtml.replace("</body>", `
<p><a href="showcase.html" style="display: inline-block; padding: 1em; border: 1px solid lightgrey;">Showcase</a></p>
</body>`)
        }

        if (writeUpdate) {
            // Back current
            fs.writeFileSync(devIndexHtmlFile + `.backup.${Date.now()}`, origDevIndexHtml);

            // write new
            fs.writeFileSync(devIndexHtmlFile, devIndexHtml);
        }
    }
}

