// synchornous programming

// console.log("sakshi");
// console.log("hello");
// console.log("kushwaha");

//Asynchoronous programming


// function hello(){
//     console.log("hello");
// }


// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() =>{
//     console.log("hello");
// },2000);
// console.log("four");
// console.log("five");

// function sum(a,b){
//  console.log(a + b);
// }

// function calculate(a , b , sumCallback){
//     sumCallback(a ,b);
// }

// calculate(1,2,(a , b) =>{
//  console.log(a +b);
// });

// const name = () => {
//     console.log("sakshi");
// }
// setTimeout(name,4000);

// callback hell

// nesting 

// let age = 19;
// if(age>= 18){
//  if(age >=60){
//     console.log("senior");
//  }
//  else{
//     console.log("middle");
//  }
// }
// else {
//     console.log("child");
// }

// for(let i = 0 ; i<=5; i++){
//     let str = "";
//     for(let j = 0; j<=5; j++){
//     str = str + j;
//     }
//     console.log(i,str);
// }


// function getData (dataID,getnextData){ 
//    return new Promise((reject,resolve)=>{
//     setTimeout(() =>{
//         console.log("data = ", dataID);
//         if(getnextData) {
//             getnextData();
//         }
//     },2000);
//    })
// }

 // callback hell nestedcall backs stacts below one another forming a primid structure
//console.log("data 1..");
// getData(1, () => {
// console.log("data 2..");
//  getData(2,() =>{
// console.log("data 3..");
//     getData(3 ,() =>{
// console.log("data 4..");
//         getData(4);
//     });
//  });
// });


//promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     reject(" some error ouccur");
// });

// function getData (dataID){ 
//     return new Promise((resolve,reject)=>{
//      setTimeout(() =>{
//          console.log("data = ", dataID);
//          resolve("success");
//      },2000);
//     })
//  }

//  async function getAlldata (){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
//     console.log("getting data6...");
//     await getData(6);
    
 //}

 // real example of promise channing

//  getData(1)
//  .then((res) =>{
//     return getData(2);
//  })
//  .then((res) =>{
//     return getData(3);
//  })
//  .then((res) =>{
//     console.log(res);
//  })

//  getData(1).then((res)=>{
//     console.log(res);
//      return getData(2).then((res) =>{
//         console.log(res);
//     })
//  })

// const getPromise = () =>{
//    return new Promise((resolve,reject) =>{
//         console.log(" I am a promise");
//         resolve("success");
//        // reject("network  error");
//     });
// }

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fullFilled",res);
// });

// promise.catch((err) =>{
//   console.log("rejected",err);
// })

//promises channing

// function asyncFunc1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("some data ...");
//             resolve("success");
//         },4000);
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("some data ...");
//             resolve("success");
//         },4000);
//     })
// }

// console.log("feaching data 1...");
// asyncFunc1().then((res) =>{
//     console.log("featching data 2...");
//  asyncFunc2().then((res) =>{
//     });
// })

// async and await 

// async function hello(){
//     console.log("hello");
// }

function api(){
    return new Promise ((resolve,reject) =>{
       setTimeout(() =>{
        console.log("wheather data");
        resolve(200);
       },2000)
    });
}

(async function(){
    await api();
    await api();
    await api();
    await api();
    await api();
    await api();
    await api();
    await api();  
})();

// IIFE 

