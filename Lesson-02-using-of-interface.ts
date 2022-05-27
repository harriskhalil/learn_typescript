/* Lesson 2 using of interface

 in the above example if you see the types i.e :{id :number,name :string ,age :number}
 we have to do this again and again now in order to save ourselves from this hectic typing Interface comes in

defining interface  */

interface User  {
    id :number,
    name :string,
    age :number,
}
interface Book{
    id :number;
    name: string;
    releaseDate:Date;
}
/*you can define interface like this and now ill show you how to do the previous coding in a simpler way
  now as you see we have defined our type easily and we dont have to define it like this :{id :number,name :string ,age :number}  */
const example1progressGetUserById = (id :number) :User =>({
    id,
    name:'harris',
    age:23
})

const getBookById = (id:number) :Book => ({
    id,
    name:'First book',
    releaseDate:new Date(),
});
/* now here we have just call the function like this */
const Userprogress1 :User = example1progressGetUserById(1);
const Bookprogress :Book = getBookById(1);
/* and here we created another function and in the parameter we called our previous fucntion
which will return the object and and aslo defined the type with it */
const save_result_progress1= (resultprogress1 :User)=> console.log({resultprogress1});
console.log(save_result_progress1(Userprogress1));

const save_book =(BookProgress :Book)=>(console.log({BookProgress}));
console.log(save_book(Bookprogress));
