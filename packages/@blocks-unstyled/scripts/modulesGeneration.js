const fs = require("fs");
const path = require("path");

const rootSourceDir = path.join(__dirname, "..");
const rootDirOutput = path.join(__dirname, "..");
const indexFilePath = path.join(rootSourceDir, "src", "index.ts");

const content = fs.readFileSync(indexFilePath, "utf8");

const matches = content.match(/export \* from '\.\/(\w+)'/g);

const componentNames = matches
  ? matches.map((match) => match.match(/'\.\/(\w+)'/)[1])
  : [];

function generatePackageJson(componentName) {
  return JSON.stringify(
    {
      name: `${componentName}`.toLowerCase(),
      private: true,
      sideEffects: false,
      module: `../dist/module/${componentName}/index.js`,
      main: `../dist/commonjs/${componentName}/index.js`,
      types: `../dist/typescript/${componentName}/index.d.ts`,
    },
    null,
    2
  );
}

componentNames.forEach((name) => {
  const outputPath = path.join(rootDirOutput, name);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  fs.writeFileSync(
    path.join(outputPath, "package.json"),
    generatePackageJson(name)
  );
});

const gitignoreContent = componentNames.map((name) => `/${name}`).join("\n");
fs.writeFileSync(path.join(rootDirOutput, ".gitignore"), gitignoreContent);

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log("Modules generation completed");
