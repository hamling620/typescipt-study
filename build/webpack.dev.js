module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: '../dist',
        port: 3000,
        open: true,
    }
}