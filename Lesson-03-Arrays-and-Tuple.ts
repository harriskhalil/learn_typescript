/* here i will show you how to set types to arrays and tuples */

const NodeSolTeam :string[] =[
    'Amer',
    'Harris',
    'Umar',
    'Ahsan'
];
/*here you can see is the simple number type of an array*/
const ListOfNumbers :number[] = [1,2,3,4];


//the above statement is as same as this one
//the only difference here the below way will be use in future for generic which i will show in later lessons
// just remember it for being used in generics that's it
const numbers:Array<number> = [1,2,3,4,5];


/*
    if we have multiple datatype we can write it like this
    what will happen with this syntax :(string | number)[] we can add as much as strings and number in our array
 */
const StringOrNumber :(string | number)[] =[1,'harris',2,'Amer'];

/* Now i will show you Tuple
    Tuples are actually an array but the only difference is we have to define how many number of data we want in our array

    lets see first an example
 */

const tuple :[number, string] = [1,'haris'];
/*
    if you see the above example
    we have to define the datatype for each index here
    and we can enter only that much data which we will define in our type
 */