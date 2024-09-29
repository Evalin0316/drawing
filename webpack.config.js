
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    resolve: {
      // `extensions` is required, if `allowJs` is set in tsconfig
          extensions: ['.ts', '.tsx', '.js'],
          plugins: [
              new TsconfigPathsPlugin({
                  configFile: 'tsconfig.json',
                  extensions: ['.ts', '.js'],
              }),
          ],
    }

}