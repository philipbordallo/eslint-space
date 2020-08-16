import fs from 'fs';
import path from 'path';

import plugins from './plugins.json';
import createRedirects from './lib/createRedirects';

const DIST_PATH = path.resolve(__dirname, 'dist');
const DIST_REDIRECTS_FILE = path.resolve(DIST_PATH, '_redirects');


async function run() {
  // Does the dist folder already exist? If not make it
  if (!fs.existsSync(DIST_PATH)){
    fs.mkdirSync(DIST_PATH);
  }

  // Create the redirects file
  const redirects = await createRedirects(plugins);

  fs.promises.writeFile(DIST_REDIRECTS_FILE, redirects)
}

run().catch(console.error)
