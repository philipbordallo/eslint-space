/**
 * Combine and flattern all the rules
 *
 * @param {Array} plugins
 * @returns {Promise} A promised array of rules
 */
async function flattenRules(plugins) {
  return plugins.reduce((collection, plugin) => {
    const { rules } = plugin;

    return collection.concat(rules);
  }, []);
}

module.exports = flattenRules;
