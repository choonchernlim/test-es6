// ES6: import

'use strict';

const nameLength4 = name => name.length === 4;
const names = ['Mike', 'Kurt', 'Corey'];

const _ = require( 'lodash' );
const result1 = _.filter( names, nameLength4 );

console.log( 'result1:', result1 );

import __ from 'lodash';
const result2 = __.filter( names, nameLength4 );

console.log( 'result2:', result2 );

import {filter} from 'lodash';
const result3 = filter( names, nameLength4 );

console.log( 'result3:', result3 );
