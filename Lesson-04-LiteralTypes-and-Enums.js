/*
    so in this lesson i will show you what literal types really
    you heard the word once in your life
    he literally said f*** off :D
    so what does that actually means is you friend told you what exact words the other person said

    this is the same case with literal types
    lets have a look on the example
 */
var hellowrold = 'helloworld';
// console.log(typeof hellowrold);
/*
    now if you have a look at your console you will see the type is string
    the value we declared here is helloworld
    we can change to any string and typestring wont give any error

    now if we want to extremely precise here that we just want helloworld not even helloworlds we
    will use LiteralTypes
*/
var HelloWorld = 'helloworld';
// console.log(HelloWorld);
/*
Now if you look at your console again you will now the type which will get shown is not string
it is HelloWorld
thats the difference we used const
we didnt just only assign the value which cannot be changed but also
we also its type that the type will aslo stay not a string but helloworld


let me show you one more example that how it is even working
*/
var filpCoin = function () { return Math.random() < 0.5 ? 'Head' : 'Tail'; };
// console.log(filpCoin());
/*
Now we wrote a function in which we want random heads and tails
and we are returning head and tail according to it
lets imagine you are writing this code and in the return the same words i.e Head and Tail
not even Heads and Tails

here the literal type will come in handy


that's how we will write the with literal by defining that type result we want
i.e :'Head'|'Tail'

 */
var filpsCoin = function () { return Math.random() < 0.5 ? 'Head' : 'Tail'; };
var FlipCoin = function () { return Math.random() < 0.5 ? 'Head' : 'Tail'; };
// console.log(FlipCoin());
/*Ok so now you know how to use literal types in the function*/
/*
Now i will tell you about the Enums
So Enums have similar concept as it is in php
all you have to do is define a set of named constants
which you can later use with some conditions

here is a basic example of enums
enums can be both numeric or string based
 */
var Numeric;
(function (Numeric) {
    Numeric[Numeric["HEARTS"] = 0] = "HEARTS";
    Numeric[Numeric["SPADES"] = 1] = "SPADES";
    Numeric[Numeric["DIAMOND"] = 2] = "DIAMOND";
    Numeric[Numeric["CLUBS"] = 3] = "CLUBS";
})(Numeric || (Numeric = {}));
var Index;
(function (Index) {
    Index[Index["HEARTS"] = 0] = "HEARTS";
    Index[Index["SPADES"] = 1] = "SPADES";
    Index[Index["DIAMOND"] = 2] = "DIAMOND";
    Index[Index["CLUBS"] = 3] = "CLUBS";
})(Index || (Index = {}));
var Suit;
(function (Suit) {
    Suit["HEARTS"] = "Hearts";
    Suit["SPADES"] = "Spades";
    Suit["DIAMOND"] = "Diamond";
    Suit["CLUBS"] = "Clubs";
})(Suit || (Suit = {}));
/*
as you can see that enums are very easy to use all you have to do is
type the keyword and put the data in it as i did above and
then you can use it in any function

 */
var SuitMeaning = function (some_parameter) {
    if (Suit.HEARTS === some_parameter)
        return 'i am returning heart';
    if (Suit.SPADES === some_parameter)
        return 'i am returning spade';
    if (Suit.DIAMOND === some_parameter)
        return 'i am returning diamond';
    if (Suit.CLUBS === some_parameter)
        return 'i am returning club';
};
var suitMeaning = function (suit) {
    if (suit === 'Hearts')
        return 'i am returning Hearts using literal types';
};
console.log(suitMeaning('Hearts'));
