const fs = require("fs-extra");
const path = require("path");

const rootDirOutputPath = path.join(__dirname, "..");

fs.copySync(path.join(__dirname, "../build"), path.join(rootDirOutputPath));
