// ES5: looping through array

'use strict';

var names = ['Mike', 'Kurt', 'Corey'];

for ( var i = 0; i < names.length; i++ ) {
    console.log( 'approach 1:', names[i] );
}

for ( var k in names ) {
    console.log( 'approach 2:', names[k] );
}