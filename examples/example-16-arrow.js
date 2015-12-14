// ES6: Arrow function

'use strict';

const arr = [5, 6, 13, 1, 18, 23];

let val1 = 0;
for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] < 10 ) {
        val1 += arr[i] * 2;
    }
}

console.log( 'Imperative:', val1 );

const val2 = arr
    .filter( function ( val ) {
        return val < 10;
    } ).map( function ( val ) {
        return val * 2;
    } ).reduce( function ( val1, val2 ) {
        return val1 + val2;
    } );

console.log( 'Functional:', val2 );

const val3 = arr
    .filter( val => val < 10 )
    .map( val => val * 2 )
    .reduce( ( val1, val2 ) => val1 + val2 );

console.log( 'Functional (Arrow):', val3 );

