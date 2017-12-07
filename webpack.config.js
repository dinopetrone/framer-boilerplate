var webpack = require("webpack");
var path = require("path");

var config = {
    context: path.join(__dirname, 'src'),

    entry: {
        "app": "./app.ts",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[id].chunck.[ext]"
    },

    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig.json'
                }
            },
            { test: /\.coffee$/, loader: "coffee-loader" }
        ]
    },

    externals: {
        Framer: 'Framer'
    },

    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", "web.js", ".ts", ".tsx", ".js", ".coffee"],
        modules: ["node_modules", "vendor", "src/modules"]
    },
}

module.exports = config
