// ES6: Function

'use strict';

function func1( name = '-' ) {
    console.log( 'func1:', `My name is ${name}` );
}

func1( 'Mike' );
func1();

function func2( ...args ) {
    console.log( 'func2:', args );
}

func2( 'a', 'b', 'c' );

function func3( var1, ...args ) {
    console.log( 'func3:', var1, args );
}

func3( 'a', 'b', 'c' );

function func4( var1, var2, var3 ) {
    console.log( 'func4:', var1, var2, var3 );
}

const letters = ['a', 'b', 'c'];

func4( ...letters );