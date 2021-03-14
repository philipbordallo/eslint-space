import fs from 'fs';
import path from 'path';

import data from './data.json';
import createRedirects from './lib/createRedirects';

const DIST_PATH = path.resolve(__dirname, 'dist');
const DIST_REDIRECTS_FILE = path.resolve(DIST_PATH, '_redirects');


async function run() {
  // Does the dist folder already exist? If not make it
  if (!fs.existsSync(DIST_PATH)) {
    fs.mkdirSync(DIST_PATH);
  }

  // Create the redirects file
  const redirects = await createRedirects(data.plugins);

  fs.promises.writeFile(DIST_REDIRECTS_FILE, redirects);

  fs.promises.copyFile('./data.json', path.resolve(DIST_PATH, 'data.json'));
  fs.promises.copyFile('./data.schema.json', path.resolve(DIST_PATH, 'data.schema.json'));
}

run().catch(console.error);
