const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
          hash: true,
          title: 'Webpack App',
          header: 'Credential check',
          body: 'Check your credentail\'s validity',
          metaDesc: 'creds desc meta',
          template: './src/index.html',
          filename: 'index.html',
          inject: 'body'
        })
      ],
    mode: 'development',
    output: {
        clean: true
    },
    devServer: {
        static: './dist',
        open: true
    }
    
};
