const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './src/pages/UiPage/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                    cssnano(),
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ui Kit',
            template: './src/pages/UiPage/index.pug',
            filename: 'index.html',
        })/*,
        new HtmlWebpackPlugin({
            title: 'Hotels',
            template: './src/index.pug',
            filename: 'index1.html',
        })*/,
        new MiniCssExtractPlugin(),
    ]
}


/*
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: 'fonts',
            }
        }
    ]
*/