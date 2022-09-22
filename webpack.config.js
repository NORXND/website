const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		filename: 'main.[contenthash].js',
		publicPath: '/',
		assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
		chunkFilename: '[name].[contenthash].js',
	},
	devServer: {
		host: 'localhost',
		historyApiFallback: true,
		hot: true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[hash:10][ext][query]',
				},
			},
			{
				test: /\.(svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'icons/[name].[hash:10][ext][query]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[name].[contenthash].css',
		}),
		new CopyPlugin({
			patterns: ['public'],
		}),
	],
};
