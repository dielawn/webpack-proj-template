const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
        extensions: ['.js'],
        fallback: {
        },
    },
};
