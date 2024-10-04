 const student ={
  fullname:"shardha kharapra",
  marks:84.3,
  printmarls: function() {
    console.log("marks =" , this.marks);
  }
};

const employe ={
    calculate(){
        console.log("tax rate is 10%");
    }
}

const karanArjun={
    salary:50000,
    calculate(){
        console.log("tax rate is 20%");
    }
};

// proto type
karanArjun.__proto__ = employe;


// classes

class Toytacar{

    constructor(brand,mileage ){
        console.log("creating new object!");
        this.brand = brand;
        this.mileage = mileage;
    }
 start(){
    console.log("start");
 }
 stop(){
    console.log("stop");
 }

 setBrand(brand){
    this.brand = brand;
 }
}

let fortuner = new Toytacar("fortuner",10);

let lexus = new Toytacar("lexus",12);


// inheritance

class parent{
    hello(){
        console.log("hello!");
    }
}
class child extends parent{

}

let obj = new child();

class person {

     constructor(){
        this.species ="homo sapians";
     }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class engineer extends person {

    constructor(branch){
        super();// this is use to invoke the parent class constroctor
        this.branch = branch;
        
    }
    
    work(){
        super.eat();
        console.log("solve problems , build something");
    }
}
 
let engobj = new engineer("chemical engineer");


let sakshi = new engineer();
let p1 = new person();
console.log(p1);

let e1 = new engineer();
console.log(e1);

//super

// practing question 

let Data = "some secret information"
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("view data" , Data);
    }

}
 let student1 = new user("sakshi","sakshi@123");

 let student2 = new user ("neha","neah@123");


 class admin extends user{
    
    constructor(name,email){
        super(name,email);
        this.name = name;
        this.email = email;
    }
    editData(){
        Data= "some new value";
    }
 }



