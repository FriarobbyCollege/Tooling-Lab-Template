const path = require('path');

module.export = {
    entry: './resources/scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};