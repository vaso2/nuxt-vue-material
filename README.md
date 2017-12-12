# NUXT VUE-MATERIAL
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-vue-material/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-vue-material)
[![npm](https://img.shields.io/npm/dt/nuxt-vue-material.svg?style=flat-square)](https://npmjs.com/package/nuxt-vue-material)

> Plugin to join nuxt and [vue-material](https://github.com/vuematerial/vue-material) framework.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup
- Add `nuxt-vue-material` dependency using npm to your project
- Add `nuxt-vue-material` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    'nuxt-vue-material'
  ],

  vueMaterial: {
    theme: 'default-dark'
  }
}
```

## Module options

### `css`
- Default: `true`
Adds `vue-material.min.css` and theme css to the start of `options.css[]`

### `theme`
- Default: `default`
Adds default vue-material theme

## License

[MIT License](./LICENSE)

Copyright (c) Galley Web Production