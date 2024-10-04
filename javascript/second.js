//Conditional Statements

//let a = 10;
//let b = 2;

// unery operator 
// console.log(a % b );
// console.log(a**b );
// console.log(a != b);
// console.log(a == b);
//  a++;
// console.log(a++);
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(b++);
// console.log(b++)
// console.log(++b);

// assinment operator

// let a = 5 ;
// let b = 2;
// a -= 4;


// console.log(a);
// console.log(a *= b);


// comperision operator

let a = 5;
let b = 3;

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a <= b, a >= b);

// logical operator 

let condtion1 = a > b ;
let condition2 = a >= b;
console.log( condtion1 && condition2);

console.log(!( a == b));

// conditional mode

let mode = "light mode";
let color ;
if (mode === "darkmode"){
    color = "black";
    console.log(color);
}

if(mode == "light mode"){
    color = "white";
    console.log(color);
}

else {
    console.log("enter your differnt colour");
}



let age = 25 ;
if(age >= 18){
    console.log("you can vote");
}
else {
    console.log(" you can not vote!")
}

// odd and even
let number;
for (let number = 1 ; number <= 100 ; number++){
    if(number % 2 == 0){
        console.log(number , "even number");
    }
    else{
        console.log(number, "odd number");
    }
}

if (age < 18){
    console.log("you are not adult you can not vote");
}
else if (age >= 18){
    console.log("you are audult and you can vote !");
}
else {
    console.log("you can vote and take it sirecely")

}

if(mode == "light mode"){
    console.log(mode);
}

// ternary operator 

let result = age == 18 ? "you can vote " :"you can not vote";

console.log(result);

// practice question 

// let num = prompt("enter a number ");
// if(num % 3 == 0){ 
//     console.log(num, "number is a multipal of three");
// }
// else {
//     console.log("enter another number");
// }

let grade ;
let score = 56;
if(score >=  90 && score <= 100  ){
    grade = "A";
}
else if(score >= 70 && score <= 89){
    grade = " B";
}
else if(score >= 60 && score <= 69 ){
    grade = " C";
}
else if( score >= 50 && score <= 59){
    grade = " D";
}
else {
    console.log(" you are in E grade Do hard work");

}
console.log("according to your marks your grade", grade);