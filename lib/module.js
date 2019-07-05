const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  const defaults = {
    css: true,
    theme: 'default'
  }
  const options = Object.assign({}, defaults, this.options.vueMaterial, moduleOptions)

  if (options.css) {
    switch (options.theme) {
      case null:
        break
      case 'default-dark':
        this.options.css.unshift('vue-material/dist/theme/default-dark.css')
        break
      case 'black-green-dark':
        this.options.css.unshift('vue-material/dist/theme/black-green-dark.css')
        break
      case 'black-green-light':
        this.options.css.unshift('vue-material/dist/theme/black-green-light.css')
        break
      default:
        this.options.css.unshift('vue-material/dist/theme/default.css')
    }
    this.options.css.unshift('vue-material/dist/vue-material.min.css')
  }

  const materialOptions = Object.assign({}, options)
  delete materialOptions.css
  delete materialOptions.theme

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'vue-material.js',
    options: materialOptions
  })
}

module.exports.meta = require('../package.json')
