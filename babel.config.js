module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: 2 }],
        'babel-plugin-flow-react-proptypes',
    ],
}