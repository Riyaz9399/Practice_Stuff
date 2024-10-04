const URL ="https://random.dog/woof.json";



const getFacts = async()=>{
    let response=  await fetch(URL);
    console.log(response);
    console.log("IN json format");
    let data = await (response).json();
    console.log(data);
    
}

getFacts();


