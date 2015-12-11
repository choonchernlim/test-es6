// ES6: `const` doesn't change reference, use `const` whenever it is possible

'use strict';

function func() {
    const a = 10;

    console.log( 'a:', a );

    a = 20;

    console.log( 'a:', a );
}

func();
