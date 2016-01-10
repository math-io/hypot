'use strict';

var hypot = require( './../lib' );

var a;
var b;
var i;

for ( i = 0; i < 100; i++ ) {
	a = Math.round( Math.random()*100 );
	b = Math.round( Math.random()*100 );
	console.log( '%d, %d, %d', a, b, hypot( a, b ) );
}
