const path = require('path');

module.exports = {
  entry: './src/index.js', // Point d'entrée de ton application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'bundle.js', // Nom du bundle généré
  },
  module: {
    rules: [
      {
        test: /.(js)$/, // Les fichiers à transpiler
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Utilisation de babel-loader
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // Extensions à résoudre automatiquement
  },
};