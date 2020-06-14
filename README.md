![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Spacer Tool for Editor.js

Spacer Tool for the [Editor.js](https://editorjs.io).

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev @veryard/spacer
```

Include module at your application

```javascript
const Spacer = require('@editorjs/spacer');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    spacer: Spacer,
  }

  ...
});
```

## Config Params

This Tool has no config params

## Output data

This Tool returns empty object.

```json
{
    "type" : "spacer",
    "data" : {}
}
```
