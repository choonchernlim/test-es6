// ES6: tagged template

'use strict';

let tvShow = 'mtv';
let name = 'jackass';

let upCase = function ( template,...expressions
)
{
    return template.reduce( ( accumulator, part, i ) = > {
            return accumulator + expressions[i - 1].toUpperCase() + part
        }
)
    ;
}
;

console.log( upCase `Hello ${tvShow}! My name is ${name}!` );




