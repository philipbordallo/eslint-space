const flattenRules = require('./flattenRules');
const stringifyRules = require('./stringifyRules');
const addReadMeLink = require('./addReadMeLink');

/**
 * Build the rules
 *
 * @param {Array} plugins
 * @returns {Promise} A promise to return a string
 */
async function createRedirects(plugins) {
  const rules = await flattenRules(plugins);
  const readMeRules = await addReadMeLink(rules);
  const stringifiedRules = await stringifyRules(readMeRules);

  return stringifiedRules;
}

module.exports = createRedirects;
