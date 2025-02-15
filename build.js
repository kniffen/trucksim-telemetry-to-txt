import { execSync } from 'node:child_process';

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
const outputFileName = `dist/${name}_${version}.exe`;

execSync(`tsc`);
execSync(`pkg dist/main.js --target node18-win-x64 --output ${outputFileName}`, { stdio: 'inherit' });

console.log(`Build completed for version ${version}: ${outputFileName}`);