const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const clientConfig = require('../webpack.config');

module.exports = function setUpDevServer(app) {
	clientConfig.entry.app = [
		'webpack-hot-middleware/client',
		clientConfig.entry.app,

	];

	clientConfig.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	);
	const clientCompiler = webpack(clientConfig);

	app.use(webpackDev(clientCompiler, {
		stats: {
			colors: true,
		},
	}));

	app.use(webpackHot(clientCompiler));
};
