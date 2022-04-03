import fs from 'node:fs';
import path from 'node:path';

import data from '../data.json';
import pkg from '../package.json';
import createRedirects from '../lib/createRedirects';


const DIST_PATH = path.resolve(__dirname, '..', 'dist');
const DIST_REDIRECTS_FILE = path.resolve(DIST_PATH, '_redirects');

/**
 * Check if a folder exists, if not create it!
 * @param folder Path of folder to check
 */
async function checkFolder(folder: string) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
}

async function run() {
  const version = `v${pkg.version.split('.')[0]}`;

  await checkFolder(DIST_PATH);
  await checkFolder(path.resolve(DIST_PATH, version));

  // Create the redirects file
  const redirects = await createRedirects(data.plugins);

  fs.promises.writeFile(DIST_REDIRECTS_FILE, redirects);

  fs.promises.copyFile('./data.json', path.resolve(DIST_PATH, version, 'data.json'));
  fs.promises.copyFile('./data.schema.json', path.resolve(DIST_PATH, version, 'data.schema.json'));
}

run().catch(console.error);
