const fs = require("fs-extra");
const path = require("path");

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log("Preparing publish... codea");

const rootDirOutputPath = path.join(__dirname, "..", "build");

// if (!fs.existsSync(rootDirOutputPath)) {
//   fs.ensureDirSync(path.join(rootDirOutputPath));
// }

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

sharedPkgFormat.scripts = {
  postinstall:
    "node ./scripts/copyFiles.js && node ./scripts/modulesGeneration.js",
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
  path.join(rootDirOutputPath, "package.json"),
  JSON.stringify(sharedPkgFormat, null, 2)
);

fs.copySync(
  path.join(__dirname, "../README.md"),
  path.join(rootDirOutputPath, "README.md")
);

fs.copySync(
  path.join(__dirname, "../src"),
  path.join(rootDirOutputPath, "src")
);

//fs.copySync(path.join(__dirname, "../build"), path.join(rootDirOutputPath));

// fs.removeSync(path.join(__dirname, "../src"));
// fs.removeSync(path.join(__dirname, "../CHANGELOG.md"));
// fs.removeSync(path.join(__dirname, "../package.json"));
// fs.removeSync(path.join(__dirname, "../README.md"));

//fs.copySync(rootDirOutputPath, path.join(__dirname, ".."));
//fs.removeSync(rootDirOutputPath);
//fs.moveSync(path.join(rootDirOutputPath), path.join(__dirname, ".."));
//fs.removeSync(path.join(__dirname, "../build"));
