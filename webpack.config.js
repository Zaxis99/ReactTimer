var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProgressPlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
            Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
            Countdown: path.resolve(__dirname, 'app/components/Countdown.jsx'),
            CountdownForm: path.resolve(__dirname, 'app/components/CountdownForm.jsx'),
            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
            Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
            Timer: path.resolve(__dirname, 'app/components/Timer.jsx')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};