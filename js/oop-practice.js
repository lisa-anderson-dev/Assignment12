// STEP 1

/*
function Cat() {

}

const Dog = function() {

}
*/

// STEP 2

/*
const shadow = new Cat();
const guinness = new Dog();
*/

// STEP 3

/*
const Animal = function() {
    this.init = function() {
        console.log('The Animal has been created');
    }
}
*/

// STEP 4

/*
const Animal1 = function(msg) {
    this.msg = msg;
    this.init = function() {
        console.log(this.msg);
    }
}
*/

// STEP 5

/*
const Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
*/

// STEP 6

/*
for (const property in new Animal()) {
    console.log(property);
}
*/

// STEP 7

/*
Animal.prototype.speak = function() {
    if (this.type === 'dog') {
        return `The ${this.color} dog is barking!`;
    } else if (this.type === 'cat') {
        return `The ${this.color} cat is meowing!`;
    }
}

const bailey = new Animal('dog', 'Pomeranian', 'white', 12, 20);
console.log(bailey.speak());

const toonces = new Animal('cat', 'American Shorthair', 'black and white', 8, 15);
console.log(toonces.speak());
*/

// STEP 8

/*
const Animal = function(type, breed, color, height, length) {
    let _type = type;
    let _breed = breed;
    let _color = color;
    let _height = height;
    let _length = length;

    let checkType = function() {
        return _type === 'dog' ? 'dog' : 'cat';
    }

    this.speak = function() {
        return `The ${checkType()} has made a noise!`;
    }
}

const bailey = new Animal('dog', 'Pomeranian', 'white', 12, 20);
console.log(bailey.speak());

const toonces = new Animal('cat', 'American Shorthair', 'black and white', 8, 15);
console.log(toonces.speak());
*/

// STEP 9

String.prototype.findWords = function(word) {
    const regex = new RegExp('\\b' + word + '\\b', 'ig')
    alert(`"${word}" was found ${this.match(regex) ? this.match(regex).length : 0} time(s).`);
}

let str = 'Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where\'s the peck of pickled peppers Peter Piper picked?';
str.findWords('peter')