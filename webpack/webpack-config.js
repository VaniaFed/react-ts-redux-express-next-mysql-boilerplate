const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['awesome-typescript-loader']
            }
        ]
    },
    resolve: {
        extensions: [
            '.webpack.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.sass',
            '.scss',
            '.css'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            CLIENT_SIDE_RENDERING: true
        })
    ]
};
