// ES6: `let` respects block scope, `var` doesn't

'use strict';

function func() {
    let a = 10;

    if ( a === 10 ) {
        let b = 10;
    }

    console.log( 'a:', a );
    console.log( 'b:', b );
}

func();
