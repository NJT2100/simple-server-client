const webpack =  require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: 'development',
    name: 'server',
    entry: path.join(CURRENT_WORKING_DIR, './server.js'),
    target: 'node',
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: 'server.generated.js',
        publicPath: '/dist',
        libraryTarget: 'commonjs2'
    },
    externals: ['react', nodeExternals()],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
}

module.exports = config