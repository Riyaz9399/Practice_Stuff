//loops in JavaScript

console.log("hello world");
for(let i = 0; i < 10; i++){
    console.log("Hello world");
}
for(let count=1; count<=10; count++){
    console.log(count);
}
console.log("loop has ended");

// calculate sum of n munbers
let sum = 0;
let n = 100;
for(i = 1 ; i <= n; i++){
    sum = sum + i;
}
console.log(sum);

let number = 1 
while(number<=10){
    console.log(number);
    number++;
}
let name = "sakshi";
let count= 0;
for(let i of name){
    console.log("i =",i);
    count++;
}
console.log(count);

let student = {
    nickname:"sakshi_kushwaha", 
    age : 20,
    cgpa :7.5,
    isPass:true
}
for(let key in student){
    console.log("key =", key ," ", student[key]);
}
for(let even=0;even <= 100 ; even++){
    if(even % 2 != 0){
        console.log("even number=",even);
    }
    console.log("\n");
}

// let game_Number = "25";
// let userguest = prompt ("guest a number as your wish!");
// console.log(userguest);
// while(userguest !== game_Number){
//    userguest = prompt("you guest a wrong number please guest again");  
// }
// console.log("congratulation you entered a right number");

let sirname="Sakshikushwaha";
console.log(sirname.length);
console.log(sirname[0]);


// templates literels

let obj = {
    item : "pen",
    price : 10
};

let output = ` the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
let sentence = `This is a Template literials`;
console.log(sentence.toUpperCase());
console.log(sentence.trim());
console.log(sentence.slice(0));
console.log("this is a concat method" + sentence+output);
console.log(output.replace("cost","rupees"));

let str = "Ilovejs";
str = str.replace("I", "S");
console.log(str.charAt(0));


// practice question to generate a username

let enter_name = prompt("enter your full name without space");
let username = "@"+enter_name+enter_name.length;
console.log(username);