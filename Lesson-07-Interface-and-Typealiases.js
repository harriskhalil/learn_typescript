/*
In this lesson i will tell you the about some differences between interface and type Aliases


Let me show you the code first then ill explain it in a bit
 */
/*
something like this unlike interface  you can use type Literals for making different type of structure for your data
 */
var Person1 = {
    id: 1,
    name: 'Harris',
    age: 23
};
// console.log({Person1})
var person1 = {
    id: 1,
    name: 'Another Harris',
    age: 23
};
var card = 'Hearts';
var Presisted = {
    id: 1,
    name: 'RisBot',
    age: 23,
    created_at: new Date(),
    updated_at: new Date()
};
var nice = 'Some string ';
var some = {
    name: 'haris'
};
console.log(some.name);
