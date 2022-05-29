/*
    so in this lesson i will show you what literal types really
    you heard the word once in your life
    he literally said f*** off :D
    so what does that actually means is you friend told you what exact words the other person said

    this is the same case with literal types
    lets have a look on the example
 */

let hellowrold  ='helloworld';
console.log(typeof hellowrold);

/*
    now if you have a look at your console you will see the type is string
    the value we declared here is helloworld
    we can change to any string and typestring wont give any error

    now if we want to extremely precise here that we just want helloworld not even helloworlds we
    will use LiteralTypes
*/

const HelloWorld = 'helloworld'
// console.log(HelloWorld);
/*
Now if you look at your console again you will now the type which will get shown is not string
it is HelloWorld
thats the difference we used const
we didnt just only assign the value which cannot be changed but also
we also its type that the type will aslo stay not a string but helloworld


let me show you one more example that how it is even working
*/


const filpCoin = () => Math.random() < 0.5 ?'Head':'Tail';
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

const filpsCoin = ():'Head'|'Tail' => Math.random() < 0.5 ?'Head':'Tail';
// console.log(filpsCoin());


/*
 or to make literal type we can take it one more step ahead
 we can use TYPE keyword to define your type in it
 in this way if you have to use a specific type again and again you wont have to write it again and again
 type is very similar to interface
 now i will show you how to write type

 or more simpler words types is alias for defining different types
 */
type Flip ='Head'|'Tail';

const FlipCoin = ():Flip => Math.random() < 0.5 ?'Head':'Tail';
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

enum Numeric{
    HEARTS=0,
    SPADES=1,
    DIAMOND=2,
    CLUBS=3,
}
enum Index{
    HEARTS,
    SPADES,
    DIAMOND,
    CLUBS,
}

enum Suit{
    HEARTS='Hearts',
    SPADES='Spades',
    DIAMOND='Diamond',
    CLUBS='Clubs',
}
/*
as you can see that enums are very easy to use all you have to do is
type the keyword and put the data in it as i did above and
then you can use it in any function

 */

const SuitMeaning = (some_parameter:Suit) =>{
    if (Suit.HEARTS=== some_parameter) return 'i am returning heart';
    if (Suit.SPADES === some_parameter)return 'i am returning spade';
    if (Suit.DIAMOND === some_parameter)return 'i am returning diamond';
    if (Suit.CLUBS === some_parameter)return 'i am returning club';
}

/*
The only Problem with enums is lets take a live example
for example if you are using an input feild and now you want the data from input to make a matching with enum
thats not possible
enums can only get enums as i did in the console.log below

you cannot do something like this
console.log(SuitMeaning('HEARTS'))
it will give an error as enums only accept enums

 */

// console.log(SuitMeaning(Suit.HEARTS))

/*
but there is one way around which is you can use type literals
lets take an example again
 */
type Suits = 'Hearts'|'hearts'|'HEARTS'|'Spades'|'Diamond'|'Club';
const suitMeaning = (suit:Suits) => {
    if (suit==='Hearts')return'i am returning Hearts using literal types';

}
// console.log(suitMeaning('Hearts'))
/*
Thats how you can use types instead of literals
 */
















