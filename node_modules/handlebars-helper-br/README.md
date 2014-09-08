# {{br}} [![NPM version](https://badge.fury.io/js/handlebars-helper-br.png)](http://badge.fury.io/js/handlebars-helper-br)

> Adds `<br>` tags to generated HTML. Great for prototyping.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-br`.

## Register the helper

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "handlebars-helper-br": "*"
  },
  "keywords": [
    "handlebars-helper-br"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-br' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-br', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

## Usage

With the helper registered, you may now begin using it in your templates.

```html
{{br 5}}
```

Renders to:

```html
<br>
<br>
<br>
<br>
<br>
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](http://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.