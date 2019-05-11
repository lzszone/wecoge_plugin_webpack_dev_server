const installer = async (i, id, getPackages, getDeps) => {
  return id(['webpack-dev-server'])
}

const pkg = {
  config: {
    devServer: {
      contentBase: 'dist',
      port: 9000,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true
    }
  },
  executor: installer
}

module.exports = pkg;