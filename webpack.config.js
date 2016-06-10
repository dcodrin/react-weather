module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            //Place aliases here
            //Example:
            //NameModule: 'path of own module to include'
            //NOTE: DO NOT USE ./
            MainNav: 'src/components/MainNav.jsx',
            Weather: 'src/components/Weather.jsx',
            About: 'src/components/About.jsx',
            Examples: 'src/components/Examples.jsx',
            WeatherForm: 'src/components/WeatherForm.jsx',
            WeatherMessage: 'src/components/WeatherMessage.jsx'
        },
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './public/',
            progress: true
        }
    },
    devtool: 'source-map'
};