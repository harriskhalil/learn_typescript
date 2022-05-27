"use strict";
/*

    decalring  simple types
    Lesson 1 strict typing

 */
var greeting = 'hello world';
/*that's how we declare types on number*/
var year = 1233;
/*that's how we declare types on function */
var addtwonumber = function (a, b) { return a + b; };
/*or you can write it this way */
var AddTwoNumbers = function (a, b) {
    return a + b;
};
/*
    if you want to use return object in the function you can use type something like this

    (id :number) here you are just passing the parameters and the type of parameter with it

    :{id :number} here you are defining the return type means those values which you are going to get in the return
    you have to write all the values here so you can get all the values it is called strict typing
*/
var GetUserById = function (id) { return ({
    id: id,
}); };
/*  for example if you want to display the result associated with the id
    you can do it like this
    when you call this function which i did below all you have to do is
*/
var example1GetUserById = function (id) { return ({
    id: id,
    name: 'haris',
    age: 23,
}); };
/*now you can get the results from this object like this*/
var result = example1GetUserById(1);
console.log(result);
/*  and you can access the objects present in like this */
result.id;
result.name;
result.age;
/*
    now here if you want to save the result you can pass the parameter as i did below then
    in the return statement where i write the console.log you can do stuff according to the need
 */
var save_result = function (result) { return console.log({ result: result }); };
/*
    now here all you are doing is calling the function i.e save_result()
    in the parameter you are passing the  result variable which is calling our previous function in which we are passing the id
    and in return we are receiving our object

*/
console.log(save_result(result));
//# sourceMappingURL=tt.js.map