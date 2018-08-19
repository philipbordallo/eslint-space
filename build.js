const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const plugins = require('./plugins.json');
const createRedirects = require('./lib/createRedirects');

const writeFileAsync = promisify(fs.writeFile);


const DIST_PATH = path.resolve(__dirname, 'dist');
const DIST_REDIRECTS_FILE = path.resolve(DIST_PATH, '_redirects');

(async () => {
  // Does the dist folder already exist? If not make it
  if (!fs.existsSync(DIST_PATH)){
    fs.mkdirSync(DIST_PATH);
  }

  // Create the redirects file
  const redirects = await createRedirects(plugins);
  writeFileAsync(DIST_REDIRECTS_FILE, redirects);
})();
