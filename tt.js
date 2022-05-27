"use strict";
/*

    decalring  simple types
    Lesson 1 strict typing

 */
// const greeting :string= 'Harris'
/*that's how we declare types on number*/
// const year :number= 1233;
/*that's how we declare types on function */
// const addtwonumber = (a :number, b :number) :number => a+b;
/*or you can write it this way */
// const AddTwoNumbers = function (a :number,  b :number) :number {
//     return a+b;
// }
/*
    if you want to use return object in the function you can use type something like this

    (id :number) here you are just passing the parameters and the type of parameter with it

    :{id :number} here you are defining the return type means those values which you are going to get in the return
    you have to write all the values here so you can get all the values it is called strict typing
*/
// const GetUserById = (id :number) :{id :number} =>  ({
//     id,
// })
/*  for example if you want to display the result associated with the id
    you can do it like this
    when you call this function which i did below all you have to do is
*/
// const example1GetUserById = (id :number) :{id :number,name :string ,age :number} =>  ({
//     id,
//     name:'haris',
//     age:23,
// })
/*now you can get the results from this object like this*/
// const result =example1GetUserById(1);
// console.log(result);
/*  and you can access the objects present in like this */
// result.id;
// result.name;
// result.age;
/*
    now here if you want to save the result you can pass the parameter as i did below then
    in the return statement where i write the console.log you can do stuff according to the need
 */
// const save_result = (result :{id : number, name :string, age :number} ) => console.log({result})
/*
    now here all you are doing is calling the function i.e save_result()
    in the parameter you are passing the  result variable which is calling our previous function in which we are passing the id
    and in return we are receiving our object

*/
// console.log(save_result(result));
/* Lesson 2 using of interface

 in the above example if you see the types i.e :{id :number,name :string ,age :number}
 we have to do this again and again now in order to save ourselves from this hectic typing Interface comes in

defining interface  */
// interface User  {
//     id :number,
//     name :string,
//     age :number,
// }
/*you can define interface like this and now ill show you how to do the previous coding in a simpler way
//  now as you see we have defined our type easily and we dont have to define it like this :{id :number,name :string ,age :number}  */
// const example1progressGetUserById = (id :number) :User =>({
//     id,
//     name:'harris',
//     age:23
// })
/* now here we have just call the function like this */
// const resultprogress1 :User = example1progressGetUserById(1);
/* and here we created another function and in the parameter we called our previous fucntion
which will return the object and and aslo defined the type with it */
// const save_result_progress1= (resultprogress1 :User)=> console.log({resultprogress1});
// console.log(save_result_progress1(resultprogress1));
var greeting = 'hello';
//# sourceMappingURL=tt.js.map