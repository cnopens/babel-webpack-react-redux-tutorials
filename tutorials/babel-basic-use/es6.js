//./node_modules/.bin/babel es6.js -o compiled.js
//For Windows:
//1. cd node_modules/.bin
//2. babel ../../es6.js -o compiled.js

//For Linux:
//./node_modules/.bin/babel es6.js -o compiled.js

const square = n => n * n;

const mixin = (...input) => Object.assign({}, ...input);

const a = {
    name: "sunqun",
    age: 28
};
const { name } = a;