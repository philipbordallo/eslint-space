/**
 * Add `#readme` to end of github markdown links
 *
 * @param {Array} rules
 * @returns {Promise} A promised array of rules
 */
async function addReadMeLink(rules) {
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

module.exports = addReadMeLink;
