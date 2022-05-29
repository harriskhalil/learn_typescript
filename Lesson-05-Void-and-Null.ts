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
const Logger = (something:unknown ) :void =>  {
    console.log(something)
}

// const a  = Logger('i am logging a string');
// console.log({a});

/*
so now if you run this function and see the console you will see
the functions does run and we saw our console  which will show this result
i am logging a string
 {a: undefined}

but it didnt return anything
the proof is we stored our function in a variable a and we can see it shows undefined
if the function return the value it should get store in that variable
so that is void type
 */



/*
Now lets talk about NUll type
lets just first create an interface of user
 */
interface Userr{
    id : number;
    email :string;
    full_name : string|null;
    full_age : string|null;
}
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
const CreateUser = (email :string) :Userr => ({
    id: 1,
    email,
    full_name: null,
    full_age: null
})
// const user = CreateUser('haris@nodesol.com');
// console.log({user});
/*
what if in the above CreateUser function we dont want any property for example
we dont want the age property  what we can do is we can remove it from the function and
in our interface we will use  ?  before the :
let me show you how
here is an interface
 */
interface Userrr{
    id : number;
    email :string;
    full_name : string|null;
    full_age ?: string|null;
}
/*
And here we just removed it from the function and it will not return any error
as the question mark is stating that data can be undefined or null type
 */
const CreateUserr = (email :string) :Userrr => ({
    id: 1,
    email,
    full_name: null,
})

const userr = CreateUserr('haris@nodesol.com');
console.log({userr});



/*
This is all for void and null type
 */
























