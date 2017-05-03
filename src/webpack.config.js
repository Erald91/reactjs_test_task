module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/public/dist',
        publicPath: '/dist/',
        filename: 'application.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}