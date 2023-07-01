<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# char2dtype

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the [data type][@stdlib/ndarray/dtypes] string associated with a provided [single letter character abbreviation][@stdlib/ndarray/base/dtype-char].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
char2dtype = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-char2dtype@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var char2dtype = require( 'path/to/vendor/umd/ndarray-base-char2dtype/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-char2dtype@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.char2dtype;
})();
</script>
```

#### char2dtype( \[ch] )

Returns the [data type][@stdlib/ndarray/dtypes] string associated with a provided [single letter character abbreviation][@stdlib/ndarray/base/dtype-char].

```javascript
var out = char2dtype( 'd' );
// returns 'float64'

out = char2dtype( 'i' );
// returns 'int32'
```

If provided an unknown or unsupported [single letter character abbreviation][@stdlib/ndarray/base/dtype-char], the function returns `null`.

```javascript
var out = char2dtype( '(' );
// returns null
```

If not provided a [data type][@stdlib/ndarray/dtypes] string, the function returns an object mapping [single letter character abbreviations][@stdlib/ndarray/base/dtype-char] to [data type][@stdlib/ndarray/dtypes] strings.

```javascript
var out = char2dtype();
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-char@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-char2dtype@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var chars;
var out;
var i;

chars = [
    dtypeChar( 'float64' ),
    dtypeChar( 'float32' ),
    dtypeChar( 'int8' ),
    dtypeChar( 'uint8' ),
    dtypeChar( 'uint8c' ),
    dtypeChar( 'int16' ),
    dtypeChar( 'uint16' ),
    dtypeChar( 'int32' ),
    dtypeChar( 'uint32' ),
    dtypeChar( 'binary' ),
    dtypeChar( 'generic' ),
    '('
];

for ( i = 0; i < chars.length; i++ ) {
    out = char2dtype( chars[ i ] );
    console.log( '%s => %s', chars[ i ], out );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-char2dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-char2dtype

[test-image]: https://github.com/stdlib-js/ndarray-base-char2dtype/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-char2dtype/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-char2dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-char2dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-char2dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-char2dtype/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-char2dtype/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-char2dtype/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-char2dtype/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-char2dtype/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-char2dtype/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd

[@stdlib/ndarray/base/dtype-char]: https://github.com/stdlib-js/ndarray-base-dtype-char/tree/umd

</section>

<!-- /.links -->
