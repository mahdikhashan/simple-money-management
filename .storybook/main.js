const path = require("path");
const appWebpack = require(
  path.join(process.cwd(), "./config/webpack.config.js")
);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      ...[path.resolve(process.cwd(), "src")],
    ];

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...appWebpack().resolve.alias,
    };
    return config;
  },
};

export default config;
