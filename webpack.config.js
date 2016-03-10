var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
	    "jquery-ui-themes": "./index.js",
        "dependencies": ['jquery', 'jquery-ui-bundle']
    },
    output: {
        libraryTarget: "var",
        library: "jQueryUIThemes",
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "../dist/"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "dependencies",
            filename: "vendor.bundle.js"
        }),
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false
        })
    ],

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    }
};
