hypot
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the square root of a sum of squares.

The square root of a sum of squares is defined as

<div class="equation" align="center" data-raw-text="h = \sqrt{a^2 + b^2}" data-equation="eq:hypot">
	<img src="" alt="hypot equation definition.">
	<br>
</div>


## Installation

``` bash
$ npm install math-hypot
```


## Usage

``` javascript
var hypot = require( 'math-hypot' );
```

#### hypot( a, b )

Computes the square root of a sum of squares.

``` javascript
var h = hypot( -5, 12 );
// returns 13
```

When `a` and `b` are both positive numbers, the result can be interpreted as the [hypotenuse][pythagorean-theorem] of a right triangle.

``` javascript
var h = hypot( 5, 12 );
// returns 13
```


## Examples

``` javascript
var hypot = require( 'math-hypot' );

var a;
var b;
var i;

for ( i = 0; i < 100; i++ ) {
	a = Math.round( Math.random()*100 );
	b = Math.round( Math.random()*100 );
	console.log( '%d, %d, %d', a, b, hypot( a, b ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-hypot.svg
[npm-url]: https://npmjs.org/package/math-hypot

[build-image]: http://img.shields.io/travis/math-io/hypot/master.svg
[build-url]: https://travis-ci.org/math-io/hypot

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/hypot/master.svg
[coverage-url]: https://codecov.io/github/math-io/hypot?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/hypot.svg
[dependencies-url]: https://david-dm.org/math-io/hypot

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/hypot.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/hypot

[github-issues-image]: http://img.shields.io/github/issues/math-io/hypot.svg
[github-issues-url]: https://github.com/math-io/hypot/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[pythagorean-theorem]: http://en.wikipedia.org/wiki/Pythagorean_theorem
