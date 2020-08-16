/** { import('./types.js') } */

import { RuleDefinition } from './types';

/**
 * Add `#readme` to end of github markdown links
 */
async function addReadMeLink(rules: RuleDefinition[]): Promise<RuleDefinition[]> {
  return rules.map((rule) => {
    const { docsURL, path } = rule;

    const isGitHubMarkdownLink = docsURL.match(/^https?:\/\/github.com.+.md$/g)

    if (isGitHubMarkdownLink) {
      return {
        path,
        docsURL: `${docsURL}#readme`
      };
    }

    return rule;
  });
}

export default addReadMeLink;
