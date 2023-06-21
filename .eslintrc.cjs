/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-console": "warn",
    semi: "error",
    "no-extra-semi": "error",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-duplicate-imports": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-unreachable": "error",
    camelcase: "error",
    "spaced-comment": "error",
    "dot-notation": "error",
    "no-var": "error",
    eqeqeq: "warn",
    "no-param-reassign": "error",
  },
};
