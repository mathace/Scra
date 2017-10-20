const path = require('path');
const express = require('express');
const server = express();

(function() {
	const Webpack = require('webpack');
	const DevMiddleware = require('webpack-dev-middleware');	
	const HotMiddleware = require('webpack-hot-middleware');	
	const WebpackConfig = require('./webpack.config');
	const Compiler = Webpack(WebpackConfig);

	server.use(DevMiddleware(Compiler, {
		noInfo: true,
		publicPath: WebpackConfig.output.publicPath
	}));

	server.use(HotMiddleware(Compiler));
	
})();

server.use(express.static('client/dist'));

// Serve the files on port 3000.
server.listen(3000, function () {
	console.log('Server listening on port 3000!\n');
});
