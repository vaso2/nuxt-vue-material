# NUXT VUE-MATERIAL
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-vue-material/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-vue-material)
[![npm](https://img.shields.io/npm/dt/nuxt-vue-material.svg?style=flat-square)](https://npmjs.com/package/nuxt-vue-material)

> Plugin to join nuxt and [vue-material](https://github.com/vuematerial/vue-material) framework.

## Setup
- Add `nuxt-vue-material` dependency using npm to your project
- Add `nuxt-vue-material` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    ['nuxt-vue-material', {
      theme: 'default-dark',
      components: ['MdDrawer', 'MdRadio', 'MdMenu', 'MdContent', 'MdList', 'MdButton', 'MdToolbar',]
    }],
  ]
  /* OR like this:
  modules: [
    'nuxt-vue-material'
  ],
  vueMaterial: {
    theme: 'default-dark'
  }*/
}
```

## Module options

### `css`
- Default: `true`
Adds `vue-material.min.css` and `theme` css to the start of `options.css[]`

### `theme`
Sets vue-material theme
- Default: `default`
- Options: `default`, `default-dark`, `black-green-dark`, `black-green-light`
<br/>
Pass `null` to disable theme in case you're going to use custom one

### `components`
Load only selected components. Will load all framework if empty
- Default: `[]`
##Changelog
[Release Notes](./CHANGELOG.md)

## License
MIT, made by [**Galley Web Production**](https://galley.online/)
