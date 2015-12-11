// ES6: object literal

'use strict';

let age = 10;

let person1 = {
    first    : 'Donkey',
    last     : 'Kong',
    age      : age,
    toString : function () {
        return `My name is ${this.first} ${this.last} and I'm ${this.age} years old.`;
    }
};

console.log( 'Person1:', person1.toString() );

let person2 = {
    first : 'Donkey',
    last  : 'Kong',
    age   : age,
    toString () {
        return `My name is ${this.first} ${this.last} and I'm ${this.age} years old.`;
    }
};

console.log( 'Person2:', person2.toString() );

let person3 = {
    first : 'Donkey',
    last  : 'Kong',
    age,
    toString () {
        return `My name is ${this.first} ${this.last} and I'm ${this.age} years old.`;
    }
};

console.log( 'Person3:', person3.toString() );




