/*
In this chapter we will cover the types of void null and undefined
so the first one is void
The void type is which doesn't return anything
lets have a look
 */
// const logger = (something ) :void =>  {
//     console.log(something)
// }
/*
if you have uncomment the above line of code you will se we are facing an error
i.e Parameter 'something' implicitly has any type
we can get rid of this error with just giving the parameter a type of any or unknown
dont worry ill cover any and unknown later in the next chapter
but for now just go along the ride with me ^^
 */
/*
now i just added the the type unknown and now
lets just return the Logger function and see what will happen
 */
var Logger = function (something) {
    console.log(something);
};
/*
so i assigned null type to name and age
what i am trying to say to property name and age is
A User could have or have not name and age
just like laravel where we use nullable
it is similar to that
 */
/*
Lets take a real life example as we have created an interface of user
now suppose we want to create an account of user after accepting the email
we can do it like this

Now the example i created a function where we will recieve data
as we know we will hit some api and in return we will get this data from there in the form of an object
right now i just did some hard coding  to show how the result will be displayed
*/
var CreateUser = function (email) { return ({
    id: 1,
    email: email,
    full_name: null,
    full_age: null
}); };
/*
And here we just removed it from the function and it will not return any error
as the question mark is stating that data can be undefined or null type
 */
var CreateUserr = function (email) { return ({
    id: 1,
    email: email,
    full_name: null
}); };
var userr = CreateUserr('haris@nodesol.com');
console.log({ userr: userr });
