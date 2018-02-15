let mix = require('laravel-mix')
let webpack = require('webpack')
let process = require('process')


mix.setPublicPath('Assets/dist/')


mix.webpackConfig({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    })
  ]
})


mix.js('Assets/js/app.js', 'app.js')
  .sass('Assets/sass/app.scss', 'app.css')
  .extract(['vue', 'vuex', 'axios'])
