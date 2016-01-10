'use strict';

// MODULES //

var test = require( 'tape' );
var isInfinite = require( 'validate.io-infinite' );
var hypot = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof hypot === 'function', 'main export is a function' );
	t.end();
});

test( 'the function returns positive infinity if either input value is positive or negative infinity', function test( t ) {
	t.ok( isInfinite( hypot( Number.POSITIVE_INFINITY, 5 ) ), 'first argument is positive infinity' );
	t.ok( isInfinite( hypot( Number.NEGATIVE_INFINITY, 5 ) ), 'first argument is negative infinity' );
	t.ok( isInfinite( hypot( 5, Number.POSITIVE_INFINITY ) ), 'second argument is positive infinity' );
	t.ok( isInfinite( hypot( 5, Number.NEGATIVE_INFINITY ) ), 'second argument is negative infinity' );
	t.end();
});

test( 'the function returns `NaN` if either input value is NaN', function test( t ) {
	var h;

	h = hypot( NaN, 5 );
	t.notOk( h === h, 'first argument is NaN' );

	h = hypot( 5, NaN );
	t.notOk( h === h, 'second argument is NaN' );

	t.end();
});

test( 'the function returns `0` if both input values are `0`', function test( t ) {
	t.equal( hypot( 0, 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns the square root of a sum of squares', function test( t ) {
	t.equal( hypot( 3, 4 ), 5, '3,4 => 5' );
	t.equal( hypot( 3, -4 ), 5, '3,-4 => 5' );
	t.equal( hypot( -3, 4 ), 5, '-3,4 => 5' );

	t.equal( hypot( 8, 6 ), 10, '8,6 => 10' );
	t.equal( hypot( 8, -6 ), 10, '8,-6 => 10' );
	t.equal( hypot( -8, 6 ), 10, '-8,6 => 10' );

	t.equal( hypot( 5, 12 ), 13, '5,12 => 13' );
	t.equal( hypot( -5, 12 ), 13, '-5,12 => 13' );
	t.equal( hypot( 5, -12 ), 13, '5,-12 => 13' );
	t.end();
});


