# NUXT VUE-MATERIAL

> Add [vue-material](https://github.com/vuematerial/vue-material) Material Component Framework.

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

# License 

MIT