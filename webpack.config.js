const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	devtool: 'none',
	entry: {
		app: ['./src/js/site/app.js', './src/scss/site/main.scss'],
		admin: ['./src/js/admin/app.js', './src/scss/admin/main.scss']		
	},
	output: {	
		path: path.resolve(__dirname, 'public'),
		filename: 'js/[name].js'
	},	
	module: {
		rules: [			
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
				        options: {
				          presets: ['@babel/preset-env']
				        }
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[path][name].css',							
							context: 'src/scss'
						}
					},					
					{ loader: 'extract-loader' },
					{ 
						loader: 'css-loader',
						//options: { sourceMap: true }					
				    },
					{ 
						loader: 'postcss-loader',
					  	options: {	
							sourceMap: true,				  		
					    	plugins: () => [					    		
								require('cssnano')({ preset: 'default' }),
								require('autoprefixer')()
					    	]
					    		
					  	}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{ 
						loader: 'file-loader',					
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
				  	},
				]
			}
		]
	},	
	plugins: [
		// Copy the images folder and optimize all the images
		new CopyWebpackPlugin([{ from: 'src/images/' , to: 'images/'}]),
		new ImageminPlugin({ 
			test: /\.(jpe?g|png|gif|svg)$/i,
		})
	],
	watchOptions: {
		ignored: ['node_modules', 'public']
	},
	performance: {
		hints: false
	}
}