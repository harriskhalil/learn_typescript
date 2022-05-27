"use strict";
// decalring  simple types
var greeting = 'Harris';
var yera = 1233;
//that's how we declare types on number
var addtwonumber = function (a, b) { return a + b; };
//or you can write it this way
var AddTwoNumbers = function (a, b) {
    return a + b;
};
// if you want to use return object in the function you can use type something like this
// (id :number) here you are just passing the parameters
//:{id :number} here you are defining the return type means those values which you are going to get in the return
//you have to write all the values here so you can get all the values it is called strict typing
var GetUserById = function (id) { return ({
    id: id,
}); };
//for example if you want to display the result associated with the id
//you can do it like this
var example1GetUserById = function (id) { return ({
    id: id,
    name: 'haris',
    age: 23,
}); };
//now you can get the results from this object like this
var result = example1GetUserById(1);
// console.log(result);
// and you can access the objects present in like this
// result.id;
// result.name;
// result.age;
var saveresult = function (result) { return console.log({ result: result }); };
//
console.log(saveresult(result));
//# sourceMappingURL=tt.js.map