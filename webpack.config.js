//webpack.config.js是一个commonJS规范的模块文件
//引入关联HTML和JS插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    //入口
    entry: './src/main.js',
    //测试服务器
    devServer: {
        contentBase: path.join(__dirname, './public'),
        //设置服务器根目录 
        port: 8080,
        contentBase: './src'
    },
    resolve: {
        // 别名
        alias: {
            '@': path.join(__dirname, './src'),
            '@@': path.join(__dirname, './src/components'),
            '~': path.join(__dirname, './src/pages')
        }
    },
    //加载器（JSX浏览器不识别，加载器使其识别）
    module: {

        rules: [
            //加载器列表，需要编译什么文件就添加一个加载器即可
            {
                //用于匹配文件（正则表达式）
                // include:'./src',
                test: /\.jsx?$/, //转义，匹配到后缀名为JS的文件都启用use加载器
                // include:'./src',
                use: [{
                    loader: 'babel-loader',
                    // options:{
                    //     presets:['@babel/preset-react'],
                    //     plugins:[
                    //         ['@babel/plugin-proposal-decorators',{legacy:true}]
                    //         ['@babel/plugin-proposal-class-properties',{loose: true}],
                    //     ]
                    // }
                }],
                include: path.join(__dirname, './src')
            },
            {
                // include:'./src',
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            //  // sass加载器
            {
                // include:'./src',
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    //让html和js关联起来（插件）
    plugins: [
        new HtmlWebpackPlugin({
            //以index.html做为模板创建html文件
            template: './public/template.html'
        })
    ]

}