// ES6: looping through array

'use strict';

const names = ['Mike', 'Kurt', 'Corey'];

for ( const [index,name] of names.entries() ) {
    console.log( 'index = ' + index + ' name = ' + name );
}



