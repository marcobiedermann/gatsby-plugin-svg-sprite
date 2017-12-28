# gatsby-plugin-svg-sprite

[![npm version](https://badge.fury.io/js/gatsby-plugin-svg-sprite.svg)](https://badge.fury.io/js/gatsby-plugin-svg-sprite)
[![dependencies Status](https://david-dm.org/marcobiedermann/gatsby-plugin-svg-sprite/status.svg)](https://david-dm.org/marcobiedermann/gatsby-plugin-svg-sprite)

[svg-sprite](https://github.com/kisenka/svg-sprite-loader) plugin for Gatsby

## Installation

Install `gatsby-plugin-svg-sprite` via npm.

```sh
npm install gatsby-plugin-svg-sprite --save
```

Add `gatsby-plugin-svg-sprite` to your plugins in `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    'gatsby-plugin-svg-sprite',
  ],
};
```

## Usage

```js
import twitterIcon from './path/to/twitter.svg';

const Icon = () => (
  <svg>
    <use xlinkHref={`#${twitterIcon.id}`} />
  </svg>
);
```

## License

[MIT License](LICENSE)

Copyright (c) 2017 Marco Biedermann
