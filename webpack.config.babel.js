import LoadablePlugin from '@loadable/webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nodeExternals from 'webpack-node-externals'

const production = process.env.NODE_ENV === 'production'
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
function getConfig(target) {
    return {
        devtool: 'inline-source-map',
        mode: development ? 'development' : 'production',
        entry: `${__dirname}/src/client/main-${target}.js`,
        output: {
            path: `${__dirname}/dist/${target}/`,
            filename: production ? '[name]-[chunkhash:8].js' : '[name].js',
            publicPath: `/dist/${target}/`,
            libraryTarget: target === 'node' ? 'commonjs2' : undefined,
            chunkFilename: production ? '[name]-[contenthash:8].js' : '[name].js',
        },
        externals: target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,
        target,
        optimization: {
          moduleIds: 'named',
          chunkIds: 'named',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            caller: { target },
                        },
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new LoadablePlugin(),
            new MiniCssExtractPlugin({
                filename: production ? '[name]-[contenthash:8].css' : '[name].css',
            })
        ]
    }
}

export default [getConfig('web'), getConfig('node')]
