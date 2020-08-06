/**
 * eslint-config-standard
 * "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": false }]
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ],
  rules: {
    // X = index.vue の '"created" is called'

    // "quotes": "warn"
    // => 適用されるルールは ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": false }]
    // Xは単一引用符で囲まれているので警告は発生しない

    // "quotes": ["error", "double"]
    // => 適用されるルールは ["error", "double"]
    // Xは二重引用符で囲まれておらず、かつavoidEscape=falseなのでエラーが発生する

    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }]
    // => 適用されるルールは ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }]
    // Xは二重引用符で囲まれていないが、avoidEscape=trueなのでエラーは発生しない
  }
}
