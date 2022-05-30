/*
Now lets now talk about any and Unknown datatype
in the previous lesson i showed you how we can  use unknown
like this
 */
var logger1 = function (something) {
    console.log(something);
};
// logger1('with unknown data type');
// logger1({datatype:'unknown data type'});
var logger2 = function (something) {
    console.log(something);
};
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
var logger2_2 = function (something) {
    console.log(something.toUpperCase());
};
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
var logger1_1_1 = function (something) {
    if (typeof something === "string") {
        console.log(something.toUpperCase());
    }
    else if (typeof something === "object") {
        console.log(something);
    }
};
var anyFoo = {
    prop1: 'hello world',
    prop2: { foo: 'bar' }
};
var unknownfoo = {
    prop1: 'hello world',
    prop2: { foo: 'bar' }
};
var unknownfoo_1 = {
    prop1: 'hello worldddddd',
    prop2: { foo: 'bar' }
};
if (typeof unknownfoo_1.prop1 === 'string') {
    console.log(unknownfoo_1.prop1);
}
// else if(typeof unknownfoo_1 ==='object'){
console.log(unknownfoo_1.prop2.foo);
// }
/*
that's how we use type casting to access the data in the object of if we specify the type unknown
 */ 
