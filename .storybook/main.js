const removeCSSLoaders = (config) => {
  const result = {
    ...config,
    module: {
      rules: config.module.rules.filter(
        (rule) => rule.test.toString() !== "/\\.css$/"
      ),
    },
  };

  return result;
};

const addCSSModulesLoaders = (config) => {
  const result = {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  };

  return result;
};

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: ["@storybook/addon-viewport/register"],
  webpackFinal: async (config, { configType }) => {
    const withoutCSSLoaders = removeCSSLoaders(config);
    const withCSSLoaders = addCSSModulesLoaders(withoutCSSLoaders);

    return withCSSLoaders;
  },
};
