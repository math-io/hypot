'use strict';

// MODULES //

var isInfinite = require( 'validate.io-infinite' );
var isnan = require( 'validate.io-nan' );
var sqrt = require( 'math-sqrt' );
var abs = require( 'math-abs' );


// HYPOT //

/**
* FUNCTION: hypot( a, b )
*	Computes the square root of the sum of squares.
*
* @param {Number} a - input value
* @param {Number} b - input value
* @returns {Number} square root of the sum of squares
*/
function hypot( a, b ) {
	var tmp;
	var r;
	if ( isInfinite( a ) || isInfinite( b ) ) {
		return Number.POSITIVE_INFINITY;
	}
	if ( isnan( a ) || isnan( b ) ) {
		return NaN;
	}
	if ( a === 0 && b === 0 ) {
		return 0;
	}
	a = abs( a );
	b = abs( b );
	if ( a > b ) {
		tmp = a;
		a = b;
		b = tmp;
	}
	r = a / b;
	return b * sqrt( 1 + r*r );
} // end FUNCTION hypot()


// EXPORTS //

module.exports = hypot;
