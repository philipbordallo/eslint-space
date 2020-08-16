import { PluginDefinition } from './types';
import flattenRules from './flattenRules';
import stringifyRules from './stringifyRules';
import addReadMeLink from './addReadMeLink';


/**
 * Create redirects from all plugin rules
 */
async function createRedirects(plugins: PluginDefinition[]): Promise<string> {
  const rules = await flattenRules(plugins);
  const readMeRules = await addReadMeLink(rules);
  const stringifiedRules = await stringifyRules(readMeRules);

  return stringifiedRules;
}

export default createRedirects;
