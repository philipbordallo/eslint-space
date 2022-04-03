import { PluginDefinition } from './types';
import flattenRules from './flattenRules';
import toRedirectString from './toRedirectString';
import addReadMeLink from './addReadMeLink';


/**
 * Create redirects from all plugin rules.
 */
async function createRedirects(plugins: PluginDefinition[]): Promise<string> {
  const rules = await flattenRules(plugins);
  const readMeRules = await addReadMeLink(rules);
  const stringifiedRules = await toRedirectString(readMeRules);

  return stringifiedRules;
}

export default createRedirects;
