// ES6: Destructuring a.k.a. pattern matching

'use strict';

const names = ['Mike', 'Kurt', 'Corey'];

const [first, , third, , fifth = '-'] = names;

console.log( `First = ${first} and Third = ${third} and Fifth = ${fifth}` );

const person = {
    shipping : {
        street : 'Main Street'
    },
    billing  : {
        street : '2nd Street'
    }
};

const {shipping} = person;

console.log( shipping );

const {shipping : localVar} = person;

console.log( 'Using variable:', localVar );

const {shipping : {street : var1} , billing: {street: var2}} = person;

console.log( var1 + ' and ' + var2 );

function displayShippingStreet( {shipping: {street}} ) {
    console.log( street );
}

displayShippingStreet( person );
