/*
In this lesson i will tell you the about some differences between interface and type Aliases


Let me show you the code first then ill explain it in a bit
 */


interface Person{
    id    :number;
    name  :string;
    age   :number;
}

type person = {
    id      :number;
    name    :string;
    age     :number;
}

/*
now you see i have made an interface and an type alias to give shape of an object
The main difference between interface and type is
Interface only is used to structure the objects you cannot take any thing else in it
on the other hand
you can use type litreals to give more different types
for example
 */

type coin = 'Head'|'Tail';

/*
something like this unlike interface  you can use type Literals for making different type of structure for your data
 */
const Person1 : Person = {
    id:     1,
    name:   'Harris',
    age:    23
}
// console.log({Person1})

const person1 :person = {
    id:     1,
    name:   'Another Harris',
    age:    23
}
// console.log({person1})

/*
                        Differences
* interface are guaranteed to be 'named' in error messages, whereas type aliases are not
 it means if you are using interfaces you will like to catch the errors more fast and efficiently
 on the other hand types are a little hard to debug



* interface cannot be used to rename primitives or literal types
* Type aliases cannot participate in declaration merging but interface can\

                        Key Points
*if you are working the API Interface are the best to pick
* you should use type alias for Union and intersection (i will explain about it in detail in  the next lesson)
* but for now see the code below i will try to give some initial knowledge about it

 */




/*
            UNIONS
  So these are the unions where you defined multiple data types
  for example if you are writing a function where you need more than data type
  like the data i am going to receive in my parameter could be string or specifically what type of string
  you can use literal types as Union

 */
type cards = 'Clubs'|'Diamond'|'Spades'|'Hearts'
const card : cards = 'Hearts';
// console.log(card)



/*
            Intersection
        For example you have defined two interfaces
        and now you need to get a new collection of data where you need the structure of
        both interfaces instead of creating a new interface you can use intersection for that
        it would be easier and more wise this way

        The example for intersection is given below

 */

interface TimeStamp {
    created_at :Date,
    updated_at :Date
}

type PresistedUser = Person & TimeStamp




const Presisted :PresistedUser = {
    id: 1,
    name: 'RisBot',
    age: 23,
    created_at: new Date(),
    updated_at: new Date()

}





/*

           Renaming Primitives

        interface cannot be used to rename primitives or literal types

        for example you want to use a datatype of string but creating your custom type you
        can do something like this



 */

type  CustomString = string;
const nice:CustomString = 'Some string '

interface some {
    name:CustomString,

}
const some :some ={
    name:'haris'
}
console.log(some.name)



