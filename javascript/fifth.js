// functions

const printhello = () =>{
    console.log("hello world!");
}

function countVowels(str){
    let count = 0;
    for(const char of str ){
        if(char ==="a" || char === "e"|| char === "i" || char === "o" || char === "u"){
            count++;
        }
        
    }
    console.log(count);
}


// for each loops

let arr= ["satna ","rewa","jhabalpur","panna"];
arr.forEach((val,idx,arr)=>
{
    console.log(val.toUpperCase(),idx,arr);
})


let num = [67 ,35,2,3,4,5,6];

let calculatesquare = (val)=>{
    console.log("squares", val * val);
}
 num.forEach(calculatesquare);

 // map functions

 let sum =[1,2,3,4,5,6];

 sum.map((val)=>{
    console.log(val * val);
 });

 let filter = [1,2,3,4,5,6,7,8,9,10];

 let evennumber = filter.filter((val) =>{
    return val % 2 !== 0;
 })
 console.log(evennumber);

 // reduce function

 const array1 =[1,2,3,4,5,6,7,8,9,10];

 let result = array1.reduce((result,curent)=>{
   return result < curent ? result : curent;
 });

 console.log(result);
 // practice questions

 let marks = [ 45,90,96,94,89,60,95,98,97];

 let toopers = marks.filter((mark)=>{
    return mark > 90;
 })

 console.log(toopers);

 let input = prompt("enter your number");

 let arr2 = [];
 for (let i = 1 ; i <= input ; i++){
    arr2[i-1]= i;
 }

 console.log(arr2);

let sum1 =  arr2.reduce((pre,cur)=>{
    return pre * cur;
 });

 console.log(sum1);
 