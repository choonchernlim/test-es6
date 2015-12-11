// ES5: variable hoisting

'use strict';

function func() {
    var a = 10;

    if ( a === 10 ) {
        b = 10;
        var b;
    }

    console.log( 'a:', a );
    console.log( 'b:', b );
}

func();
