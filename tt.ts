// decalring  simple types

const greeting :string= 'Harris'
//that's how we declare types on number
const year :number= 1233;

//that's how we declare types on function
const addtwonumber = (a :number, b :number) :number => a+b;

//or you can write it this way

const AddTwoNumbers = function (a :number,  b :number) :number {
    return a+b;
}

// if you want to use return object in the function you can use type something like this

// (id :number) here you are just passing the parameters and the type of parameter with it

//:{id :number} here you are defining the return type means those values which you are going to get in the return
//you have to write all the values here so you can get all the values it is called strict typing


const GetUserById = (id :number) :{id :number} =>  ({
    id,
})



//for example if you want to display the result associated with the id
//you can do it like this
//when you call this function which i did below all you have to d
const example1GetUserById = (id :number) :{id :number,name :string ,age :number} =>  ({
    id,
    name:'haris',
    age:23,
})

//now you can get the results from this object like this

const result =example1GetUserById(1);
// console.log(result);

// and you can access the objects present in like this
// result.id;
// result.name;
// result.age;


//now here if you want to save the result you can pass the parameter as i did below then
// in the return statement where i write the console.log you can do stuff according to the need
const save_result = (result :{id : number, name :string, age :number} ) => console.log({result})
//now here all you are doing is calling the function i.e save_result()
// in the parameter you are passing the  result variable which is calling our previous function in which we are passing the id
// and in return we are receiving our object
console.log(save_result(result));










