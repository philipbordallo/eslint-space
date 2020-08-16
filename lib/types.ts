export type RuleDefinition = {
  docsURL: string,
  path: string,
}

export type PluginDefinition = {
  package: string,
  rules: RuleDefinition[]
}
