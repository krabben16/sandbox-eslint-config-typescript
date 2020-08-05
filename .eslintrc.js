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
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }]
  }
}
