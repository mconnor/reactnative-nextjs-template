// @generated: @expo/next-adapter@2.1.5
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/guides/using-nextjs.md
const path = require("path");
const { withExpo } = require('@expo/next-adapter')
// const withTM = require("next-transpile-modules")([
//   "react-native",
//   "react-native-web"
// ]);
const nextConfig = {
  projectRoot: __dirname,
  future: {
    webpack5: false
  },
  // For font support:
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader', // or directly file-loader
      include: path.resolve(
        __dirname,
        'node_modules/react-native-vector-icons'
      )
    })
    return config
  }
}

module.exports = withExpo(nextConfig)
