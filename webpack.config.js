var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')

const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === 'production'

var entry = PRODUCTION
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
      ]

// This is just for backup (it has a default config)
const uglifyJsConfig = {
    comments: true,
    mangle: false,
    compress: {
        warnings: true
    }
}
var plugins = PRODUCTION
    ? [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style-[contenthash:10].css'),
        new HTMLWebpackPlugin({ template: 'index-template.html' })
      ]
    : [ new webpack.HotModuleReplacementPlugin() ]

// Injecting global variables into source code
plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
)

// If production, class names will be hashed with 10 characters
// If development, it will give the file path and className
const cssIdentifier = PRODUCTION ? '[HASH:BASE64:10]' : '[path][name]---[local]'
const cssLoader = PRODUCTION
    ? ExtractTextPlugin.extract({ use: 'css-loader?localIdentName=' + cssIdentifier })
    : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier] // style-loader comes first!

module.exports = {
    externals: {
        'jquery': 'jQuery'
    },
    devtool: 'source-map', // to see the actual es6 code in chrome dev tools
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/, // every js file will be transpiled
            loaders: ['babel-loader'],
            exclude: '/node_modules'
        }, {
            test: /\.(png|jpg|gif)$/, // every png, jpg, gif
            loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'], //https://github.com/webpack-contrib/url-loader this will short img file name and convert a 10KB files into base64 img tag
            exclude: '/node_modules'
        }, {
            test: /\.css$/, // every css
            loaders: cssLoader,
            exclude: '/node_modules'
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: PRODUCTION ? '' : '/dist/',
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    }
}
