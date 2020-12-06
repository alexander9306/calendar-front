const plugins = [];

if (process.env.NODE_ENV === "development") {
  plugins.push("babel-plugin-typescript-to-proptypes");
}

module.exports = {
  // Required
  presets: ["babel-preset-gatsby"],
  plugins,
};
