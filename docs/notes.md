Notes
===

The standard approach to calculating the hypotenuse is subject to overflows.

``` javascript
var a2 = a * a;
var b2 = b * b;
var h = Math.sqrt( a2 + b2 );
```

For a sufficiently large `a` or `b`, calculating the square will overflow resulting in an infinite result.

``` javascript
var a2 = 1e154 * 1e154;
var b2 = 1e154 * 1e154;
var h = Math.sqrt( a2 + b2 );
// returns +infinity
```

An alternative [approach][blog] is numerically stable and avoids this problem. This approach is implemented here.

``` javascript
var h = hypot( 1e308, 1e308 );
// returns ~1.4142e308
```



[blog]: http://www.johndcook.com/blog/2010/06/02/whats-so-hard-about-finding-a-hypotenuse/
