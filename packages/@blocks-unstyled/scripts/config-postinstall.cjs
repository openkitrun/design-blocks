const fs = require("fs-extra");
const path = require("path");

const rootDirOutputPath = path.join(__dirname, "..");

const sharedPkg = fs.readFileSync("./package.json", "utf-8");
const sharedPkgFormat = JSON.parse(sharedPkg);
const currentScripts = sharedPkgFormat.scripts;

sharedPkgFormat.scripts = {
	...currentScripts,
	postinstall: "node ./scripts/copyFiles.js",
};

fs.writeFileSync(
	path.join(rootDirOutputPath, "package.json"),
	JSON.stringify(sharedPkgFormat, null, 2),
);
