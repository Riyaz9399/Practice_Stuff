// let btn1 = document.querySelector("button");

// btn1.addEventListener("click",(evt) =>{
//     console.log("button one was clicked handler -1");

// })
// btn1.addEventListener("click",() =>{
//     console.log("button one was clicked handler---2");
// })

// const handler3 = (evt) =>{
//     console.log("button one was clicked handler -3");

// }
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",() =>{
//     console.log("button one was clicked handler---4");
// })

// btn1.removeEventListener("click",handler3);


let mode = document.querySelector("#mode");
let currentmode = "light" // dark
let body = document.querySelector("body");

mode.addEventListener("click",() =>{
  if (currentmode === "light"){
    currentmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else {
    currentmode = "light";
    body.classList.add("light");
    body.classList.add("dark");
  }
  console.log(currentmode);
});