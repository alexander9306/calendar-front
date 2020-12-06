/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugins = [];

if (process.env.NODE_ENV === "development") {
  plugins.push("babel-plugin-typescript-to-proptypes");
}
const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
  plugins,
};

module.exports = require("babel-jest").createTransformer(babelOptions);
