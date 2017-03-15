import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const PRODUCTION = process.argv.includes('-p');
const outputPath = path.join(__dirname, 'dist');

const common = {
  entry: {
    bundle: ['./src/index.jsx'],
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

if (PRODUCTION) {
  module.exports = merge(common, {
    output: {
      path: outputPath,
      filename: '[name].[chunkhash].js',
    },
    plugins: [
      new ManifestPlugin(),
      new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest',
      }),
      new CleanWebpackPlugin([outputPath]),
    ],
  });
} else {
  module.exports = merge(common, {
    module: {
      rules: [
        { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            'react-hot-loader',
            'babel-loader',
          ],
        },
      ],
    },
  });
}

