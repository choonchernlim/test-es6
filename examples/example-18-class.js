// ES6: class, function, static, super, constructor

'use strict';

var Es5Car = function ( name ) {
    this.name = name;

    this.toString = function () {
        return `I have a ${this.name}`;
    }
};

var es5Car = new Es5Car( 'Honda' );

console.log( es5Car.toString() );

class Es6Car {
    constructor( name ) {
        this.name = name;
    }

    toString() {
        return `I have a ${this.name}`;
    }
}

const es6Car = new Es6Car( 'Toyota' );

console.log( es6Car.toString() );

class NumberUtil {
    static isGreaterThan( a, b ) {
        return a > b;
    }
}

console.log( NumberUtil.isGreaterThan( 1, 2 ) );

class Animal {
    constructor( name ) {
        this.name = name;
    }

    speak() {
        console.log( this.name + ' makes a noise.' );
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log( this.name + ' barks.' );
    }
}

new Dog( 'Doberman' ).speak();