const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.postcss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.js'),
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
