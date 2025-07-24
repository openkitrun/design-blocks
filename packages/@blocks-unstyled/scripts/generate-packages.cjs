const fs = require("fs-extra");
const path = require("path");

const rootPath = path.join(__dirname, "..");
const indexFilePath = path.join(rootPath, "src", "index.ts");
const rootDirOutputPath = path.join(__dirname, "..", "build/module");

const EXPORT_RE = /export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]\s*;?/g; // Regular expression to match export statements

const content = fs.readFileSync(indexFilePath, "utf8");
const componentNames = [...content.matchAll(EXPORT_RE)].map(([, name]) => name);

if (!fs.existsSync(rootDirOutputPath)) {
	fs.ensureDirSync(path.join(rootDirOutputPath));
}

function generatePackageJson(componentName) {
	return JSON.stringify(
		{
			name: `@design-blocks/unstyled/${componentName}`,
			type: "module",
			sideEffects: false,
			main: "./index.js",
			types: "./index.d.ts",
			exports: {
				"./package.json": "./package.json",
				".": {
					types: "./index.d.ts",
					default: "./index.js",
				},
			},
		},
		null,
		2,
	);
}

componentNames.forEach((name) => {
	const outputPath = path.join(rootDirOutputPath, name);

	fs.writeFileSync(
		path.join(outputPath, "package.json"),
		generatePackageJson(name),
	);
});
