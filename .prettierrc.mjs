/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  arrowParens: "always",
  plugins: [`prettier-plugin-lint-md`],
};

export default config;
