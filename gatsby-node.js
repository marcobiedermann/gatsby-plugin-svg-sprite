exports.onCreateWebpackConfig = ({ actions, loaders }, options = {}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
          use: [
            loaders.url({
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
            }),
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve('svg-sprite-loader'),
              options,
            },
          ],
        },
      ]
    }
  });
};
