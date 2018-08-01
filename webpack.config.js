const path = require("path");
const webpack = require("webpack");

module.exports = {

    mode: "development",

    // setting up the entry point
    entry: "./src/js/main.js",

    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules:[{
            test:/\.js?$/,
            exclude:/node_modules/,
            use:[{
                loader:"babel-loader",
                options:{
                    presets:["env"]
                }
            }]
        },
    {
        test:/\.css$/,
        use:[
            "style-loader",
            "css-loader"
        ]
    },
    {
        test:/\.(jpg | png)$/,
        use:[
            "file-loader",
            {
                loader: "image-webpack-loader",
                options:{
                    name:"[name].[ext]",
                    outputPath:"/img/",
                    publicPath:"/img/"
                }
            }
            
        ]
    }
]
    }
}