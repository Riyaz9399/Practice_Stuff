let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";

newbtn.style.backgroundColor = "red";
newbtn.style.color = "black";

document.querySelector("body").prepend(newbtn);

let para = document.querySelector("p");
console.log(para);
