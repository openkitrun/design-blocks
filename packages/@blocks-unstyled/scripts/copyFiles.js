const fs = require("fs-extra");
const path = require("path");

const rootPath = path.join(__dirname, "..");
const rootDirOutputPath = path.join(__dirname, "..", "build");
const indexFilePath = path.join(rootPath, "src", "index.ts");

const content = fs.readFileSync(indexFilePath, "utf8");
const matches = content.match(/export \* from '\.\/(\w+)'/g);
const componentNames = matches
  ? matches.map((match) => match.match(/'\.\/(\w+)'/)[1])
  : [];

if (!fs.existsSync(rootDirOutputPath)) {
  fs.ensureDirSync(path.join(rootDirOutputPath));
}

/**
 * Generate new package.json to be published
 */
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
delete sharedPkgFormat.scripts;

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

fs.copySync(path.join(__dirname, "../build"), path.join(rootPath));
fs.removeSync(path.join(__dirname, "../build"));

function generatePackageJson(componentName) {
  return JSON.stringify(
    {
      sideEffects: false,
      module: `../module/${componentName}/index.js`,
      main: `../commonjs/${componentName}/index.js`,
      types: `../typescript/${componentName}/index.d.ts`,
    },
    null,
    2
  );
}

componentNames.forEach((name) => {
  const outputPath = path.join(rootPath, name);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  fs.writeFileSync(
    path.join(outputPath, "package.json"),
    generatePackageJson(name)
  );
});

const finalPkgFormat = JSON.parse(sharedPkg);
// biome-ignore lint/performance/noDelete: <explanation>
delete finalPkgFormat.scripts;

fs.writeFileSync(
  path.join(rootDirOutputPath, "package.json"),
  JSON.stringify(finalPkgFormat, null, 2)
);

fs.removeSync(path.join(__dirname, "../scripts"));
