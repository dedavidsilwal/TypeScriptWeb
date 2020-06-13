const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, agrs) => {
    const isProdMode = !!(env && env.prod);
    console.log("Prodmode " + isProdMode);

    return {
        mode: isProdMode ? 'production' : 'development',
        entry: {
            app: './TypeScripts/app.ts'        
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve('./wwwroot/js'),
            devtoolModuleFilenameTemplate: (info) => "/" + info.resourcePath
        },
        module: {
            rules: [
                { test: /\.ts$/, use: 'ts-loader' },
                { test: /\.html$/, use: 'html-loader' },
                {
                    test: /\.scss$/, use: [
                        //'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devtool: isProdMode ? '' : 'source-map'
    }
}