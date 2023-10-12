const fs = require("fs-extra");
const path = require("path");

const rootSourceDir = path.join(__dirname, "..");
const rootDirOutputPath = path.join(__dirname, "..");
const indexFilePath = path.join(rootSourceDir, "src", "index.ts");

const content = fs.readFileSync(indexFilePath, "utf8");

const matches = content.match(/export \* from '\.\/(\w+)'/g);

const componentNames = matches
  ? matches.map((match) => match.match(/'\.\/(\w+)'/)[1])
  : [];

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
  const outputPath = path.join(rootDirOutputPath, name);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  fs.writeFileSync(
    path.join(outputPath, "package.json"),
    generatePackageJson(name)
  );
});
