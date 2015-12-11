// ES6: while `const` doesn't allow reference change, object can still be changed

'use strict';

function func() {
    const a = { x : 1 };

    console.log( 'a:', a );

    a.x = 2;

    console.log( 'a:', a );
}

func();
