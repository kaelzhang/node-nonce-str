[![Build Status](https://travis-ci.org/kaelzhang/node-nonce-str.svg?branch=master)](https://travis-ci.org/kaelzhang/node-nonce-str)
[![Coverage](https://codecov.io/gh/kaelzhang/node-nonce-str/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/node-nonce-str)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-nonce-str?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-nonce-str)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/nonce-str.svg)](http://badge.fury.io/js/nonce-str)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/nonce-str.svg)](https://www.npmjs.org/package/nonce-str)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-nonce-str.svg)](https://david-dm.org/kaelzhang/node-nonce-str)
-->

# nonce-str

Generate a nonce str

## Install

```sh
$ npm i nonce-str
```

## nonce(length = 32, chars = nonce.CHARS)

Returns `String`

```js
import nonce, {CHARS} from 'nonce-str'

nonce(32)
// mq3GTllnJ0tMxLGeV0EoO8ZDIOjQX6td

console.log(CHARS)
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
```

## License

MIT
