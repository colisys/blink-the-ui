#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');

const rootPackagePath = path.join(rootDir, 'package.json');
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, 'utf8'));

const rootVersion = rootPackage.version;

const packagesDir = path.join(rootDir, 'packages');
const packages = fs.readdirSync(packagesDir);

let updatedPackages = 0;

for (const pkg of packages) {
  const pkgPath = path.join(packagesDir, pkg);
  const stat = fs.statSync(pkgPath);

  if (stat.isDirectory()) {
    const packageJsonPath = path.join(pkgPath, 'package.json');

    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      if (packageJson.version !== rootVersion) {
        packageJson.version = rootVersion;
        fs.writeFileSync(
          packageJsonPath,
          JSON.stringify(packageJson, null, 2) + '\n'
        );
        updatedPackages++;
      }
    }
  }
}
exec('git add packages/*/package.json');
