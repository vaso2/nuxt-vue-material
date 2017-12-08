const path = require('path')

const defaults = {
    css: true,
    theme: 'default'
}

module.exports = function (moduleOptions) {
    const options = Object.assign({}, defaults, this.options.vueMaterial, moduleOptions)

    if (options.css) {
        switch (options.theme) {
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

    // Remove module options
    const materialOptions = Object.assign({}, options)
    delete materialOptions.css
    delete materialOptions.theme

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'vue-material.js',
        options: {
            materialOptions: materialOptions
        }
    })
}

module.exports.meta = require('./package.json')
