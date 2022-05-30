/*
Now lets now talk about any and Unknown datatype
in the previous lesson i showed you how we can  use unknown
like this
 */




const logger1 = (something : unknown) :void => {
    console.log(something)
}
// logger1('with unknown data type');
// logger1({datatype:'unknown data type'});

const logger2  = (something :any) :void => {
    console.log(something)
}

// logger2('with any data type');
// logger2({datatype:'any data type'})




/*
Now in the upper example if we compare both functions everything is working fine
lets just take it to one step further
 */


/*
Now if you look at the below code you will notice that i tried to convert the data to uppercase
it will work with the string but as soon as we pass the object it will throw an error
because we the type became different
 instead of using any if we use Unknown
 we will get a typescript error on our ide . It means Unknown allows us to take anything but doesnot allow us to access anything
 unless we do further checking
 */


const logger2_2 = (something : any) :void => {
    console.log(something.toUpperCase())
}
// logger2_2('with unknown data type');
// logger2_2({datatype:'unknown data type'});



// const logger1_1 = (something : unknown) :void => {
//     console.log(something.toUpperCase())
// }
// logger1_1('with unknown data type');
// logger1_1({datatype:'unknown data type'});

/*
so we what we need to do it we need to narrow it down for us
like this
This way we can prevent error
so what unknown is doing is preventing us from error and we all we need to do
is put more type safety while using unknown to prevent ourselves from errors
 */



const logger1_1_1 = (something : unknown) :void => {
    if (typeof something === "string"){
        console.log(something.toUpperCase())
    }else if(typeof something === "object"){
        console.log(something)
    }
}
// logger1_1_1('with unknown data type');
// logger1_1_1({datatype:'unknown data type'});




/*
Especially when you are migrating from old code base to new or putting typescript in the existing project
you should prefer to use unknown instead of any to save yourself from bugs .


Lets take one more step further and see where unknown gets tricky ^^

 */


type anyType = {prop1: any, prop2: any}

const anyFoo : anyType = {
    prop1:'hello world',
    prop2:{foo:'bar'}
}
// console.log(anyFoo.prop2.foo)

/*
Now what i am trying to show you here is
i have created a type which has props in it and then created an Object
and assigned those props some values
now if you look at the code again and see your console you will see the result but what if
you add after something after the .foo you wont get any errors but in the console you will
so typescript didnt not throw any error but it should
so how can we can overcome this is?
lets have a look
 */

type unknownType = {prop1: unknown, prop2 :unknown};
const unknownfoo : unknownType = {
    prop1:'hello world',
    prop2:{foo:'bar'}
}
// console.log(unknownfoo.prop2.foo)

/*
ah here now we got our error which i was talking about
it wont let us access the object . In order to access it we have to do more type casting in order to access our object

so type casting is dangerous to do but necessary in our case we tell type script we are trying to access this datatype using  "as" keyword l
lets have look
 */

type unknownType_1   = {prop1: unknown, prop2 :unknown};
const unknownfoo_1 : unknownType_1 = {
    prop1:'hello worldddddd',
    prop2:{foo:'bar'}
}
if (typeof unknownfoo_1.prop1 ==='string'){
    console.log(unknownfoo_1.prop1)
}

console.log((unknownfoo_1.prop2 as {foo :unknown}).foo)
/*
that's how we use type casting to access the data in the object of if we specify the type unknown
 */