/*
 * @Author:  
 * @Date: 2019-11-28 13:37:44 
 * @Last Modified by: wang
 * @Last Modified time: 2019-11-28 14:46:21
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
            style: 'css',
    }),
);