import { PluginDefinition, RuleDefinition } from './types';


/**
 * Combine and flatten all the rules.
 */
async function flattenRules(plugins: PluginDefinition[]): Promise<RuleDefinition[]> {
  return plugins.reduce((collection, plugin) => {
    const { rules } = plugin;

    return collection.concat(rules);
  }, []);
}

export default flattenRules;
