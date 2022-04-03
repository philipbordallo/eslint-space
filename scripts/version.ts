import fs from 'fs';

import pkg from '../package.json';
import data from '../data.json';


async function run() {
  const newData = {
    ...data,
    version: pkg.version,
  };

  fs.promises.writeFile('../data.json', JSON.stringify(newData, null, 2));
}

run().catch(console.error);

