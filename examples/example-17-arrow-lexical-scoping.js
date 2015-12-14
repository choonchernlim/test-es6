// ES6: `this` is a lexical scoping

'use strict';

function func1() {
    let self = this;

    setTimeout( function growUp() {
        console.log( self === this );
    }, 1000 );
}

func1();

function func2() {
    let self = this;

    setTimeout( () => {
        console.log( self === this );
    }, 1000 );
}

func2();

