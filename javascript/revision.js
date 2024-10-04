// use of node js to run the program 
// console.log("hello world");
// all about array 
// var arr  = [12,"true " , true , "sakshi",12.90];
// arr[0] = "sakshi";
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// console.log(arr[0]);
// console.log(arr.length);

// Inbuild java array methods
// var arr2 = [12,14,56,57]

// var pop = arr2.pop();
// console.log(pop);
// console.log(arr2);
// arr2.push(23,34,45);
// console.log(arr2);

// var shift = arr2.shift();
// console.log(shift);
// var unshift = arr2.unshift("12",12);

// console.log(arr2);

// objects in javascript

// var person = {
//   firstName :"Adam",
//   SecondName : "sumit",
//   age: 34,
//   ownerOfCar : false
// };
// console.log(person);
// // dot Notation
// console.log(person.age);

// //bracket notation 
// console.log(person["firstName"]);

// var cap = {
//     firstName : "Stever",
//     lastName : "rogers",
//     age : 120,
//     // array inside onject
//     friends :["Buckres","Bruce Banner","tony STark"],
//     // object inside odject
//     address :{
//         state : "madhaye pradesh",
//         city :{
//             name : "brokelyn",
//             pinCode : 468273,

//         }
//     }
// }
// console.log(cap.friends[0]);


// conditionals statements

// var myscores = 78;

// if(myscores > 90){
//     console.log("Yeh i earn my first badge");
// }
// else{
//     console.log("ohh no i lose it");
// }

// var grade = 90;

// if(grade >= 90 && grade <= 100){
//     console.log("A+");
// }
// else if(grade >= 80 && grade <= 90){
//     console.log("b+");
// }
// else if(grade >= 70 && grade <= 80){
//     console.log("c+");
// }
// else {
//     console.log("please try next time  you are fail !");
// }

// var a = "hello world";
//  for(let i = 0 ; i <= 100 ; i++){
//     console.log(i ,a);
//  }

// // yo have an array 
// var num = [2,3,4,5,6,7,8,9];
// for(let i = 0; i <= num.length-1 ; i++){
//     console.log(num[i] * num[i]);
// }

// while loop in javascript 

// let i = 0 ;
// while (i <= 10){
//     console.log("gappu");
//     i++;
// }
// // do while loop

// let num = 1 ;
// do {
//     console.log(num);
//     num++;
// }while(num >= 1);

// for in loop

// var num = [12,23,34,45,45,56,67,678];
// for (let i in num){
//     console.log(i , "= " , num[i]);
// }

// var colors = {
//     primary : "white",
//     secondary :" red",
//     tertiary : "yello",
//     danger : "dark array",

// }
// for(let color in colors){
//     console.log(color ,"->" , colors[color]);
// }

// for of loop in javascript 

// var scores = [90,45,78,98,78,68,98,78,87,90];

// for(var score of scores){
//     console.log(score);
// }

// var colors = ["red", "white", "green"];
// for(var [index, color] of colors.entries()){
//     console.log(index , "->" , color);

// }

// // string 
// var str = "sakshi";

// for (var s of str){
//     console.log(s);
// }

// let num1= 2;
// let num2= 02;
// if(num1===num2)
//  console.log("true");
// else
//  console.log("false");

// functions in javascripts 

// function greet(val){
//     console.log( val + " greet");
// }
// greet("hii");

//function in javascript with expression

// var add = function (a,b){
//   return a + b;
// }
// var sum = add;
// let result = sum(10,27);
// console.log(result);

// hosting in javascript
// console.log(a);
// greet();

// var a = "Hi";

// function greet(){
//     console.log("hello from scaler");
// }


// ES6 javascript 

// let and const keyword

// var a = 21;
// console.log(a);
// var a = 35;
// console.log(a);
// if(a === 35){
//     let b = 40;
//     console.log(b);
// }


// let varses var 

// var a = 20;
// var a = 35;

// let b = 30;

// console.log(a);
// console.log(b);

// if(true ){
//     let c = 50;
//     console.log(c);
// }
// let keyword has a block scope

// const a = 287;
// console.log(a);
// const d = 29;
// const pi = 3.14;
// console.log(pi);

// arrow function in javascript


// let test1 = a =>{
//     console.log(a + 2);
// }

// let test2 = function(a){
//     console.log(a * 2);
// }

// let test3 = (a,b)=>{
//     console.log(a + b);
// }

// test1(2);
// test2(2);
// test3(2,3);

// template literels 
// let sakshi = 89;
// console.log(`the ${sakshi} marks is sufficient for us`);


// dustruction of  array or with array 

// let arr = ["hii","I",,"am","Sakshi"];

// let [a,b,c,d,e] = arr;
// console.log(c);

// decstructering with objects

// let obj = {
//     name : "Adam",
//     age : 25,
//     address : {
//         country : "England",
//         city : "london"
//     },
//     gender :"male"
// }

// let {name : n ,age : a,address : {country},gender : gen} = obj;
// console.log(country);

// functional programming

// imperative code in javascript
// let a = 2;

// if(a % 2 == 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// declarative way code in javascript

// const checkforSquare = (x)=> ((x * x )% 2 == 0 ? true : false);  

// console.log(checkforSquare(2));

// impure function in javascript 

// var a = 10;
// function add(x){
//     console.log(x + a); 
//     a++;
// }
// add(2);// if this function is a pre function so that is called a pure function if is not 
// add(2);
// add(2);

// this is a pure function
// function addPure(x,a){
//  return a + x;
// }

// console.log(addPure(3,4),addPure(313,435),addPure(332,467));

// callBacks functions

// function printfirst(firstname, cd){
//     console.log(firstname);
//     cd("kushwaha");
// }
// printfirst("sakshi",printlast);

// function printlast(lastname,cb){
//     console.log(lastname);
//     cb("sakshi");

// }
// printlast("kushwaha" , printfirst)
// printlast("kushwaha");

// const isEven = (n) =>{
//     return n % 2 == 0;
// }

// let printEven = (EvenFu , num) => {
//     const isNumbereven = EvenFu(num);

//     console.log(`The ${num} is Even ${isNumbereven}`);
// }
// printEven(isEven, 9);


// HOF means (Higher order function)

    // let customerType = "Regular";
	// let  quantity = 2;
    // let  unitPrice = 10;
	// let  totalCost = 0;
	// let  discount = 5;
	// 	totalCost = unitPrice * quantity;
	// 	if (customerType == "Regular") {
	// 		totalCost = totalCost - (totalCost * discount / 100);
	// 		console.log("You are a regular customer and eligible for 5% discount");
	// 	}
	// 	console.log("Total cost: " + totalCost);



//  let arr = [1,2,3,4,5,6,7];
//  let squareofArr = [];
//  for(let i = 0 ; i <= arr.length-1 ; i++){
// 	squareofArr.push(arr[i] * arr[i]);
//  }
//  console.log(squareofArr);

	// map 
	// const num = [1,2,3,4,5,6,7];

	// const squareNum = num.map(function (n){
	// 	return n*n;
	// })
	// console.log(squareNum);

	// const transactions = [1000,2000,3000,4000,5000,600];
	// const intoDoller= 80 ;

	// const transactionsintoDoller = transactions.map(function (n){
	// 	return "$"+ n/intoDoller.toFixed(0);
	// })
	// console.log(transactionsintoDoller);

	// const transactionsintoDoller2 = transactions.forEach((amount) => {
	// 	console.log((amount/intoDoller).toFixed(0));
	// })
	// // console.log(transactionsintoDoller2);


	// find function 

// 	const transactions = [1000,234,768,76,-3413];

// 	let firstNegative = transactions.find( (n)=>{
//         return n<0;
// 	})

// console.log(firstNegative);


// let firstNegativeindex = transactions.findIndex( (n)=>{
// 	return n<0;
// })

// console.log(firstNegativeindex);

// // some 

// let example = [1,2,3,4,56,23,7,8,3];

// let someExe = example.some(function (n){
// 	return n > 0;
// })
// console.log(someExe);

// // every 

// let resultEvery =  example.every(function(n){
// 	return n > 0;
// })
// console.log(resultEvery);

//  filter HOF


// let number = [1,234,5,56,8,5,5,23,78];

// let even = [];

// for(let i = 0 ; i<= number.length-1 ; i++){
// 	if(number[i] % 2 == 0){
// 		even.push(number[i]);
// 	}
// }
// console.log(even);

// with the filter method

// let filterEven = number.filter(function (n) {
// 	return n % 2 == 0;
// })
// console.log(filterEven);

// reduce function in HOF

// let num = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// for(let i = 0 ; i < num.length ; i++){
// 	sum += num[i];
	
// }
// console.log(sum);

// let reduce = num.reduce(function (acc ,value) {
// 	return acc + value;
// },0)

// console.log(reduce);

// let product = num.reduce(function (acc ,value) {
// 	return acc * value;
// },1)
// console.log(product);


// channing in the HOF(Higher order function)


// let arr = [
// 	{name :"A" , age : 14 , gender : "M"},
// 	{name :"B" , age : 15 , gender : "F"},
// 	{name :"C" , age : 17 , gender : "M"},
// 	{name :"D" , age : 16 , gender : "F"},
// 	{name :"E" , age : 14 , gender : "M"},
// 	{name :"F" , age : 15 , gender : "F"},
// 	{name :"G" , age : 17 , gender : "M"},
// 	{name :"H" , age : 16 , gender : "F"},

// ]

// Age od All the Man (males)

// let Males = arr.filter(function (n){
// 	return n.gender == "M";
// }).map(function (n){
// 	return n.age;
// })

// console.log(Males);

// let agesOfMales = Males.map(function (n){
// 	return n.age;
// })
// console.log(agesOfMales);

// const transactions = [2343,-4564,675,345,456,-234,456];

// let totalAmount = transactions.filter(function (n) {
// 	return n > 0;
// }).reduce(function (acc,values){
//   return acc+ values;
// },0)
// console.log(totalAmount);

// object oriented programming language

// this keyword

// "use strict" // use for make the all typeChecking in your code

// a = 10;
// console.log(a);

// demonstration of this keyword in non strict mode

// console.log(this); // Empty object

// function displayThis(){
// 	console.log(this);
// }
// displayThis();

// let obj = {
// 	name :"sakshi",
// 	age :34,
// 	myFun : function(){
// 		console.log(this.age);
// 	}
// }

// obj.myFun();

// let obj2 = {
// 	name :"sakshi",
// 	age :34,
// 	myFun1 : function(){
// 		function myfun2(){
// 			console.log(this);
// 		}
// 		 myfun2();
// 	}
// }

// obj2.myFun1();

// demonstration of this keyword in the strict mode

// "use strict"

// console.log(this);

// function myfun(){
// 	console.log(this);
// }
// myfun();

// let obj = {
// 	myfun :function myfun1(){
// 		console.log(this);
// 	}

// }
// obj.myfun();


// let obj2 = {
// 	myfun1 :function myfun2(){
// 		function myfun3(){
// 			console.log(this);
// 		}
// 		myfun3();
// 	}

// }
// obj2.myfun1();

// demonstration of this keyword in browser using non strict mode

// console.log(this);

// let myfunction = ()=>{
// 	console.log(this);
// }

// myfunction();

// let obj = {
// 	myfun : function(){
// 		console.log(this)
// 	}
// }
// obj.myfun();

// let obj2 = {
// 	myfun1 : function(){
// 		function myfun2(){
// 			console.log(this);
// 		}
// 		 return myfun2();
// 	}
// }

// obj2.myfun1();

// demonstration of this keyword in the browser with help of "use strict keyword"

// "use strict"
// console.log(this);

// let myfunction = ()=>{
// 	console.log(this);
// }

// myfunction();

// let obj = {
// 	myfun : function(){
// 		console.log(this)
// 	}
// }
// obj.myfun();

// let obj2 = {
// 	myfun1 : function(){
// 		function myfun2(){
// 			console.log(this);
// 		}
// 		 return myfun2();
// 	}
// }

// obj2.myfun1();


// constructor in javascript

// normal object
// let car1 = {
// 	name :"X4",
// 	company : "Bmw",
// 	red: "red"
// }

// function createCar(_name , _company , _color){
//  this.name = _name;
//  this.company = _company;
//  this.color = _color;

//  this.drive = function(){
//    console.log(`I am driving the ${this.name} which color is ${this.color}`)
//  }
// }
// let car1 = new createCar('X4',"BMW","Red");
// let car2 = new createCar('S-class',"MERCEDIES","Black");
// console.log(car1,car2);
// car2.drive();

// classes in javascript 

// class person{
// 	constructor(_name , _age) {
// 		this.name = _name;
// 		this.age = _age;
// 	}
// 	welcome(){
// 		console.log(`Welcome ${this.name}!`);
// 	}
// }

// let person1 = new person("sakshi",19);
// let person2 = new person("priyam",20);
// let person3 = new person("harsh",23);
// let person4 = new person("Krish",24);
// let person5 = new person("anshika",19);

// person1.welcome()
// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4)
// console.log(person5);


// classical inheritance

// class person{
// 	constructor(_name,_age){
// 		this.name = _name;
// 		this.age = _age;
// 	}
// 	welcome (){
// 		console.log(`welcome ${this.name}`);
// 	}
// }
// class Teacher extends person{
// 	constructor(_name, _age,_classStrength){
// 		super(_name,_age);
// 		this.classstrength = _classStrength;
// 	}
// 	test(){
// 		super.welcome();
// 	}

// }
// class student extends person{
// 	constructor(_name, _age,_classStrength, _cgpa){
// 		super(_name,_age);
// 		this.classstrength = _classStrength;
// 		this.cgpa = _cgpa;
// 	}
// 	test(){
// 		super.welcome();
// 	}

	
// }

// let person1 = new person("Adum" , 28);
// console.log(person1);
// let teacher1 = new Teacher("sakshi",34,123);
// console.log(teacher1);
// teacher1.test();

// let student1 = new student("sakshi",19,678,8.0);
// console.log(student1);
// student1.test();

// polymorphisum

// class animal {
// 	sound(){
// 		console.log("animal make a simple sound");
// 	}
// }
// class Dog {
// 	sound(){
// 		console.log("Dog Barks");
// 	}
// }
// class Cat {
// 	sound(){
// 		console.log("Cat Mews");
// 	}	
// }

// let animal1 = new animal()
// animal1.sound();
// let tommy = new Dog();
// tommy.sound();
// let pessy = new Cat();
// pessy.sound();

// encapulation in javascript

// function person(_name, _age){
// 	let name  = _name;
// 	this.age = _age;

// 	this.getName = function(){
// 		return name;
// 	}
// }

// let person1 = new person("Adam",25);
// console.log(person1.getName());



// prototye in javascript
// let myObj = {};
// console.log(myObj);



// let person1 = {
// 	name : "Sakshi",
// 	age : 20,

// }
// console.log(person1);
// console.log(person1.hasOwnProperty("sakshi"));

// // constructor function 

// function person(_name,_age){
// 	this.name = _name;
// 	this.age = _age;
// }

// let person2 = new person("stive",27);
// console.log(person2);

// function person(_name , _age){
// 	this.name = _name;
// 	this.age = _age;
	// this.getNameAndage = function(){
	// 	console.log(`I am ${this.name} and my age is ${this.age} years old`);
	// }
	
// }

// person.prototype.getNameAndage = function(){
// 	console.log(`I am ${this.name} and my age is ${this.age} years old`);
// }

// let person1 = new person("sakhsi",20);
// console.log(person1);
// person1.getNameAndage();


// let person2 = new person("kajal",20);
// console.log(person1);
// person1.getNameAndage();

// call Apply and Bind

// let person1 = {
// 	firstName :"steve",
// 	lastName : "Rogers",
// 	age : 102,

// 	printDetails : function(){
// 		console.log(`I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
// 	}
// }


// let person2 = {
// 	firstName :"Tony",
// 	lastName : "Stark",
// 	age : 45,

	// printDetails : function(){
	// 	console.log(`I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
	// }

// }
// person1.printDetails();

// let printDetails = function(city){
// 		console.log(`I am ${this.firstName} ${this.lastName} and I am ${this.age} years old I am from ${city}`);
// 	}


// call method use to call the function which is declare in another object and this object wants to acces this with thiskey values which is given my the onject itself
// printDetails.call(person2,"NewYork");

// Apply methods

// printDetails.apply(person2,["NewYork"]); 

// Bind Methods


// let myfunction = printDetails.bind(person2,"NewYork");
// console.log(myfunction);
// myfunction();


/// synchronous in javascript
// const fs = require("fs");
// console.log("first line");

// const data_1 = file1.readFileSync("file1.txt");

// console.log("The data of file 1 -> "+data_1);


// const data_2 = file1.readFileSync("file2.txt");

// console.log("The data of file 2 -> " +data_2);

// fs.readFile("file1.txt", call1);

// function call1(err,data){
// 	if(err){
// 		console.log("error");
// 	}
// 	console.log("file 1 ->" + data);
// 	fs.readFile("file2.txt", call2);
// }




// function call2(err , data){
// 	if(err){
// 		console.log("error");
// 	}
// 	console.log("file 2 ->" + data);
// 	fs.readFile("file3.txt", call3);
// }




// function call3(err , data){
// 	if(err){
// 		console.log("error");
// 	}
// 	console.log("file 3 ->" + data);
// }

// console.log("last Line");

// set time out funtion 
// console.log("Before");
// function greet(){
// 	console.log("Hii  Form this Time out ");
// }

// setTimeout(greet , 5000);
// console.log("After");


// let time = setInterval(function() {
// 	console.log(greet);
// }, 1000);

// setTimeout(function(){
// 	clearInterval(time);
// },3000);

// promises in javascript


// let mypromise = new Promise (function ( resolve,reject){
// 	const a = 4
// 	const b = 6
// 	setTimeout(()=>{
// 		if(a == b){
// 			resolve("The values are equal");
// 		}
// 		else {
// 			reject("The values are not equal");
// 		}
// 	},3000);
// })
// // pending state
// // console.log(mypromise);

// // fulfilled - then method
// // consuming you promises
// mypromise.then(function(result){
// 	console.log(result);// resolve or fullfilled state
// })

// mypromise.catch((error)=>{
// 	console.log(error);// reject or error
// })

// Question for promises 

// function placeorder(drink){
// 	return new Promise (function (resolve, reject){
// 		if(drink == "Coffee"){
// 			resolve("Order of coffee is received");
// 		}
// 		else{
// 			reject("your Order is rejected");
// 		}
// 	})
// }

// function processingOrder(order){
//    return new Promise(function(resolve){
// 		console.log("order is being processed ");
// 		resolve(`Your ${order} and it is served`);
//    })
// }

// placeorder("Coffee").then(function(orderPlaced){
// 	console.log(orderPlaced);
// 	let orderISProcessed = processingOrder(orderPlaced);
// 	return orderISProcessed;
// }).then(function(resolve){
// 	console.log(resolve);
// }).catch(function(rej){
// 	console.log(rej);
// })

// this is called a channing of promises


// this is a easy way to write a promises
// Async Await -- keywords

// async function serverOrder(){
// 	try{
// 		let orderPlaced =await  placeorder("Coffee");
// 	console.log(orderPlaced);
// 	let processedOrder = await processingOrder(orderPlaced);
// 	console.log(processedOrder);

// 	}
// 	catch(err){
// 		console.log(err);
// 	}
	
// }

// serverOrder();



// Shallow copy

// Spread Operator {...}

// let firstperson = {
// 	name : "Sakshi",
// 	age : 23,

// 	address : {
// 		city: "satna",
// 		State : "Madhaya Pradesh"
// 	}
// }
// let secondPerson = {...firstperson} ;
// firstperson.address.city = "Khanwar";

// firstperson.name = "priyam"
// console.log(firstperson);
// console.log(secondPerson);

// deep copy 

// using the JSON.parse and JSON.stringify


// let firstperson = {
// 	name : "sakshi",
// 	age : 34,
// 	address :{
// 		city : "satna",
// 		State : "Madhaya pradesh"
// 	}

// }
// let secondperson = JSON.parse(JSON.stringify(firstperson));
// // console.log(firstperson);
// firstperson.address.city = "Kanwaar";
// console.log(firstperson);
// secondperson.name = "priyam";
// console.log(secondperson);


// closours in javascript 

// function test(){
// 	let a = 2;
// 		function test1(){
// 			console.log(a);
// 		}
// 		return test1;
// }

// let fun = test();
// console.log(fun);
// fun();

// function greet(){
// 	let name = "Steve"
// 	let age = 57
// 	function displayName(){
//       console.log( "Hii" + name);
// 		 function displayage(){
// 			console.log("My age is "+ age  + " And my Name is " + name);
// 		 }
// 		 return displayage;
// 	}
// 	return displayName;
// }

// let greet1 = greet();

// let greet2 = greet1();
// console.log(greet2)
// greet2();



// curring function in javascript 
// it is basically the same as a closoures but with some parameters in the function and inside function also

// let sum = (x,y)=>{
// 	console.log(x+y);
// }
// sum(1234356756,7698745234);


// let sum1 = (x)=>{
// 	 return (y)=>{
// 		console.log(x+y);
// 	 }
// }

// let result = sum1(67);
// console.log(result);
// result(3);


// NUll //undefined and not a number
// let a ;
// console.log(a); // undefined


// let arr = [1,2,,3];
// console.log(arr[2]);// undefined

// function sum(a,b){
// 	let c = a + b;
// 	// return c; // undefined
// }

// console.log(sum(2,4));

// let myLife = null;
// console.log(myLife);

// console.log(typeof({}),typeof([]));
// let a = 3;
// let b = "sakshi"
// let c = true;
// let arr = [];
// let obj = {};
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(arr));
// console.log(typeof(obj));

let arr = [1,23,4,5,667];
let a = 3
console.log(Array.isArray(a));

