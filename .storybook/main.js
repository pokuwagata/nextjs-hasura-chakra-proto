module.exports = {
  stories: ["../{pages,components}/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[name]__[local]--[hash:base64:5]" },
        },
      },
    },
  ],
};
