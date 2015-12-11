// ES6: Collection - Set vs Map

'use strict';

const names = new Set().add( 'Mike' ).add( 'Corey' ).add( 'Mike' );

console.log( names );

const nameMap = new Map().set( 'Mike', 1 ).set( 'Corey', 2 );

console.log( nameMap );
