/*  1- requerimos path para manejar las rutas y saber donde estamos, este modulo ya viene con node.js
    2- requerimos o instanciamos los plugin que instalemos.
*/
const path = require('path');
const HtmlWwbpackPlugin = require('html-webpack-plugin');
const MiniCssEtractPlugin = require('mini-css-extract-plugin');

/* creamos un nuevo modulo que vamos a exportar con esta configuracion */

module.exports = {
  //entrada
  entry: './src/index.js',

  /*aqui es donde vamos a guardar nuestros archivos resultantes, cuando hagamos la compilacion*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  /* aqui vamos a resolver las extenciones que vamos a utilizar para el proyecto*/
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  /*ahora vamos a crear un modulo con las reglas necesarias para el proyecto, para que los archivos sean leidos
    debemos recordar que hay que implementar expresiones regulares.
    */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css|.scss$/i,
        use: [MiniCssEtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  /*aqui vamos a añadir los plugins que necesitemos, instanciandolos*/
  plugins: [
    new HtmlWwbpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssEtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],

};

