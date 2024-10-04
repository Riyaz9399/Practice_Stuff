Console = "name";
console.log(Console);
isFollow = true;
totalPrice = 234.3;
let fullname = "sakshi kushawah";
console.log(fullname);
let sirname = "kushwaha";
console.log(sirname);
let semester = "3rd";
console.log(semester);
semester = "4th";
console.log(semester);
const pie = 3.14;
// let a ;
// console.log(a);


//scope
{
    let firstname = "sakshi ";
    console.log(firstname);
}
{
    let firstname = "vinu";
    console.log(firstname);
}
//data types 

//primative data types 
//number 
number = 23;
console.log(number);
console.log(typeof number);

//string
// name = "apna collage";
// console.log(name);
// console.log(typeof name);

//boolean
//undefined 
//null

// big int 
value = 234345;
console.log(value);
console.log(typeof value);

const student = {
    fullname : "sakshi",
    age : 23,
    Cgpa : 8.23,
    ispass :true,
}
student["age"] = student["age"] + 1;
student.fullname = student.fullname + " " + "kushwaha";

console.log(student.fullname);
console.log(student.age);
console.log(student.Cgpa);
console.log(student.ispass);


// practice questions

const product = {
    productname : " ball pen",
    productprice : 234.2,
    rating : 4,
    isdeal : true,

}

console.log(product.productname);
console.log(product.productprice);
console.log(product.rating);
console.log(product.isdeal);

// question second 

const profile = {
    username : " sonakshi__kushwaha",
    post : 23,
    bio : "good mind great heart small circle",
    isfollow : true,
    password : "7024207516",
    profilename : "sakshi kushwaha"
}

console.log(typeof(profile["profilename"]));