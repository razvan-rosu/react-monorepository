/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../packages/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
