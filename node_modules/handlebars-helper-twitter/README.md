# {{tweet}} and {{follow}} [![NPM version](https://badge.fury.io/js/handlebars-helper-twitter.png)](http://badge.fury.io/js/handlebars-helper-twitter)

> Twitter handlebars helpers, for adding {{tweet}} and {{follow}} buttons to your web projects.

See [dev.twitter.com](https://dev.twitter.com/docs/tweet-button) for more information.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-twitter`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-twitter` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-twitter' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-twitter', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

## Usage

First, visit [dev.twitter](https://dev.twitter.com/docs/tweet-button) to copy/paste the necessary script into your templates. It looks like this (you probably shouldn't use this one, get the latest directly from twitter)

```html
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
```

Now that the helper is registered, and the necessary script is in your templates, you may begin using it in your templates.

```html
{{follow user="upstage" repo="upstage" type="star"}}
{{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team"}}
```

## Options

The following hash options may be passed to the helper, in the form of `foo="value"`:

### Tweet button

#### url
Type: `String`
Default: `http://assemble.io`

URL of the page to share.

#### via
Type: `String`
Default: `assemblejs`

Screen name of the user to attribute the Tweet to.

#### related
Type: `String`
Default: `jonschlinkert:Assemble core team`

Related accounts. Example:

```html
{{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team"}}
```

### Follow button

#### user
Type: `String`
Default: `assemblejs`

The Twitter username. Example: `jonschlinkert`.

#### color
Type: `String`
Default: `#0069D6`

Hex value to use for the link color.

#### count
Type: `String`
Default: `true`

Whether or not to show the number of followers.


## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.