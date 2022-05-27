/* Lesson 2 using of interface

 in the above example if you see the types i.e :{id :number,name :string ,age :number}
 we have to do this again and again now in order to save ourselves from this hectic typing Interface comes in

defining interface  */
/*you can define interface like this and now ill show you how to do the previous coding in a simpler way
  now as you see we have defined our type easily and we dont have to define it like this :{id :number,name :string ,age :number}  */
var example1progressGetUserById = function (id) { return ({
    id: id,
    name: 'harris',
    age: 23
}); };
var getBookById = function (id) { return ({
    id: id,
    name: 'First book',
    releaseDate: new Date()
}); };
/* now here we have just call the function like this */
var Userprogress1 = example1progressGetUserById(1);
var Bookprogress = getBookById(1);
/* and here we created another function and in the parameter we called our previous fucntion
which will return the object and and aslo defined the type with it */
var save_result_progress1 = function (resultprogress1) { return console.log({ resultprogress1: resultprogress1 }); };
console.log(save_result_progress1(Userprogress1));
var save_book = function (BookProgress) { return (console.log({ BookProgress: BookProgress })); };
console.log(save_book(Bookprogress));
