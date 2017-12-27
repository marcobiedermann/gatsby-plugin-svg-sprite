exports.modifyWebpackConfig = ({ config }, options = {}) => {
  config.loader('url-loader', {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]',
    },
  });

  config.loader('svg-sprite', {
    loader: 'svg-sprite-loader',
    test: /\.svg$/,
    query: options,
  });

  return config;
};
