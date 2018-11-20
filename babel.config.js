module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
  plugins: [
    'babel-plugin-flow-react-proptypes',
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
}
