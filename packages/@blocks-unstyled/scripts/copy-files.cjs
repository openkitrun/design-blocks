const fs = require("fs-extra");
const path = require("path");

const rootPath = path.join(__dirname, "..");
const rootDirOutputPath = path.join(__dirname, "..", "build");
const indexFilePath = path.join(rootPath, "src", "index.ts");

const EXPORT_RE = /export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]\s*;?/g; // Regular expression to match export statements

const content = fs.readFileSync(indexFilePath, "utf8");
const componentNames = [...content.matchAll(EXPORT_RE)].map(([, name]) => name);

if (!fs.existsSync(rootDirOutputPath)) {
	fs.ensureDirSync(path.join(rootDirOutputPath));
}

/**
 * Generate new package.json to be published
 */
// const sharedPkg = fs.readFileSync("./package.json", "utf-8");
// const sharedPkgFormat = JSON.parse(sharedPkg);
// sharedPkgFormat.exports = {
//   "./package.json": "./package.json",
//   ".": {
//     types: "./typescript/index.d.ts",
//     import: "./module/index.js",
//     require: "./commonjs/index.js",
//   },
// };

// sharedPkgFormat.main = "commonjs/index.js";
// sharedPkgFormat.module = "module/index.js";
// sharedPkgFormat.types = "typescript/index.d.ts";

// delete sharedPkgFormat.scripts;
// delete sharedPkgFormat.files;
// delete sharedPkgFormat.devDependencies;
// delete sharedPkgFormat["react-native-builder-bob"];

// fs.writeFileSync(
//   path.join(rootDirOutputPath, "package.json"),
//   JSON.stringify(sharedPkgFormat, null, 2)
// );

// fs.copySync(
//   path.join(__dirname, "../README.md"),
//   path.join(rootDirOutputPath, "README.md")
// );

// fs.copySync(
//   path.join(__dirname, "../src"),
//   path.join(rootDirOutputPath, "src")
// );

// fs.copySync(path.join(__dirname, "../build"), path.join(rootPath));
// fs.removeSync(path.join(__dirname, "../build"));

// function generatePackageJson(componentName) {
// 	return JSON.stringify(
// 		{
// 			name: `@design-blocks/unstyled/${componentName}`,
// 			sideEffects: false,
// 			main: "./index.js",
// 			types: "./index.d.ts",
// 			exports: {
// 				"./package.json": "./package.json",
// 				".": {
// 					types: "./index.d.ts",
// 					default: "./index.js",
// 				},
// 			},
// 		},
// 		null,
// 		2,
// 	);
// }

componentNames.forEach((name) => {
	const outputPath = path.join(rootPath, name);

	if (!fs.existsSync(outputPath)) {
		fs.copySync(
			path.join(rootDirOutputPath, `module/${name}`),
			path.join(outputPath),
		);
		fs.copySync(
			path.join(rootDirOutputPath, `typescript/${name}`),
			path.join(outputPath),
		);
	}

	// fs.writeFileSync(
	// 	path.join(outputPath, "package.json"),
	// 	generatePackageJson(name),
	// );
});

// remove files
fs.removeSync(path.join(__dirname, "../scripts"));
fs.removeSync(path.join(__dirname, "../build"));
fs.removeSync(path.join(__dirname, "../package.json"));
