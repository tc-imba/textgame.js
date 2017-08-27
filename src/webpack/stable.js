const generator = require('./generate');

const vendors = [
    'react',
    'react-dom',
    'jquery',
    'bootstrap-loader',
    'font-awesome-webpack',
    'regenerator-runtime'
];
module.exports = generator.generate('stable', vendors);
