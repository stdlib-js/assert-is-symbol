<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isSymbol

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [symbol][mdn-symbol].



<section class="usage">

## Usage

```javascript
import isSymbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-symbol@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-symbol/tags). For example,

```javascript
import isSymbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-symbol@v0.0.9-esm/index.mjs';
```

#### isSymbol( value )

Tests if a value is a [symbol][mdn-symbol].

```javascript
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';

var bool = isSymbol( Symbol( 'beep' ) );
// returns true

bool = isSymbol( Object( Symbol( 'beep' ) ) );
// returns true
```

#### isSymbol.isPrimitive( value )

Tests if a `value` is a primitive [symbol][mdn-symbol].

```javascript
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';

var bool = isSymbol.isPrimitive( Symbol( 'beep' ) );
// returns true

bool = isSymbol.isPrimitive( Object( Symbol( 'boop' ) ) );
// returns false
```

#### isSymbol.isObject( value )

Tests if a `value` is a [`Symbol`][mdn-symbol] object.

```javascript
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';

var bool = isSymbol.isObject( Symbol( 'beep' ) );
// returns false

bool = isSymbol.isObject( Object( Symbol( 'boop' ) ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@esm/index.mjs';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';
import isSymbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-symbol@esm/index.mjs';

var bool;
if ( hasSymbolSupport() ) {
    bool = isSymbol( Symbol( 'beep' ) );
    // returns true
} else {
    console.log( 'Environment does not support symbols.' );
}
bool = isSymbol( 'beep' );
// returns false

bool = isSymbol( {} );
// returns false

bool = isSymbol( [] );
// returns false

bool = isSymbol( null );
// returns false

bool = isSymbol( void 0 );
// returns false

bool = isSymbol( true );
// returns false

bool = isSymbol( function foo() {} );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-symbol.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-symbol

[test-image]: https://github.com/stdlib-js/assert-is-symbol/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/assert-is-symbol/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-symbol/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-symbol?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-symbol.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-symbol/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-symbol/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-symbol/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-symbol/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-symbol/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-symbol/main/LICENSE

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
