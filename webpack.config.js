/* eslint-disable no-tabs */

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					hotReload: true,
				},
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader', // injects styles into DOM
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// use `prependData` here if sass-loader version >= 8
							data: '@import "./src/styles/main";',
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
			{
				test: /\.css$/,
				oneOf: [
					// this matches `<style module>`
					{
						resourceQuery: /module/,
						use: [
							'vue-style-loader',
							{
								loader: 'css-loader', // turn css into commonjs
								options: {
									modules: true,
									localIdentName: '[local]_[hash:base64:5]',
								},
							},
						],
					},
					// this matches plain `<style>` or `<style scoped>`
					{
						use: ['vue-style-loader', 'css-loader', 'sass-loader'],
					},
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new StyleLintPlugin({
			files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
			fix: true,
		}),
	],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@services': path.resolve(__dirname, './services'),
		},
		extensions: ['.js', '.vue', '.json', '.ts'],
	},
};
