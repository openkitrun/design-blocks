const fs = require("fs-extra");
const path = require("path");

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log("Preparing publish... codea");

const rootDirOutput = path.join(__dirname, "..", "build-temp");

if (!fs.existsSync(rootDirOutput)) {
  fs.ensureDirSync(path.join(rootDirOutput));
}

const sharedPkg = fs.readFileSync("./package.json", "utf-8");
const sharedPkgFormat = JSON.parse(sharedPkg);
sharedPkgFormat.exports = {
  "./package.json": "./package.json",
  ".": {
    types: "./typescript/index.d.ts",
    import: "./module/index.js",
    require: "./commonjs/index.js",
  },
};
sharedPkgFormat.main = "commonjs/index.js";
sharedPkgFormat.module = "module/index.js";
sharedPkgFormat.types = "typescript/index.d.ts";
// biome-ignore lint/performance/noDelete: <explanation>
delete sharedPkgFormat.files;
// biome-ignore lint/performance/noDelete: <explanation>
delete sharedPkgFormat.devDependencies;
// biome-ignore lint/performance/noDelete: <explanation>
delete sharedPkgFormat.bundlesize;
// biome-ignore lint/performance/noDelete: <explanation>
delete sharedPkgFormat["react-native-builder-bob"];

fs.writeFileSync(
  path.join("./build-temp", "package.json"),
  JSON.stringify(sharedPkgFormat, null, 2)
);

fs.copySync(
  path.join(__dirname, "../README.md"),
  path.join(rootDirOutput, "README.md")
);

fs.copySync(path.join(__dirname, "../src"), path.join(rootDirOutput, "src"));

fs.copySync(path.join(__dirname, "../build"), path.join(rootDirOutput));

fs.moveSync(path.join(rootDirOutput), path.join(__dirname, ".."));
fs.removeSync(path.join(__dirname, "../build"));
