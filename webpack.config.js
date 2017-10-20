const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?reload=true',
		'./client/src/index.js'
	],
	devtool: 'eval',	
	plugins: [
		//new CleanWebpackPlugin(['dist']),		
		/* new HtmlWebpackPlugin({
			template: __dirname + '/client/src/index_template.html',
			inject: 'body',
			filename: 'index.html'
		}), */
		new Webpack.NamedModulesPlugin(),
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NoEmitOnErrorsPlugin(),
		//new UglifyJSPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader?cacheDirectory=true'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/client/dist'),
		publicPath: '/'
	}
};