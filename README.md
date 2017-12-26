# vue-gulp-template

> A full-featured Browserify + `vueify` setup with hot-reload.

> This template is Vue 2.0 compatible.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init rmknecht/vue-gulp-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: Browserify + `vueify` with proper config for source map & hot-reload.

- `npm run build`: Production build with HTML/CSS/JS.

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

### Customizations

You will likely need to do some tuning to suit your own needs:

- Install additional libraries that you need, e.g. `vue-router`, `vue-resource`, `vuex`, etc...

- Add your preferred CSS pre-processor, for example:

  ``` bash
  npm install less --save-dev
  ```

  Then you can do:

  ``` vue
  <style lang="less">
    /* write less! */
  </style>
  ```

- The dev build is served using [BrowserSync](https://www.browsersync.io/).

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
