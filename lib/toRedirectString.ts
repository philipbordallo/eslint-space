import { RuleDefinition } from './types';


const AUTO_COMMENT = '# THIS IS AN AUTO-GENERATED FILE\n\n';

/**
 * Transform all rules into a redirect string.
 */
async function toRedirectString(rules: RuleDefinition[]): Promise<string> {
  return rules.reduce((collection, rules) => {
    const { path, docsURL } = rules;

    return collection.concat(`/${path}  ${docsURL}  302\n`);
  }, AUTO_COMMENT);
}

export default toRedirectString;
