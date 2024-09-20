const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use:[MiniCssExtract.loader,'css-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ]
    },
   
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            title: 'Webpack app',
        }),
        new MiniCssExtract({
            filename:'style.css',
            ignorerOrder:false,
        }),

            new CopyPlugin({
                patterns:[
                    {from:'src/assets/', to: 'assets/'}
                ]
            }),

        
    ],
};

