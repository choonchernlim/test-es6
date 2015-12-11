/**
 * Configuration for Gulp tasks.
 */

'use strict';

var externalLibs = ['lodash'];

module.exports = {
    browserify : {
        externalLibs  : externalLibs,
        bundleConfigs : [
            {
                entries    : 'demo/app.js',
                dest       : 'demo/',
                outputName : 'app.out.js',
                paths      : ['./node_modules']
            }
        ]
    }
};