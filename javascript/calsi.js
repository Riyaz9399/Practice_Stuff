function add(a,b){
    console.log(a + b);
}
function mul(a,b){
    console.log(a * b);
}
function mod(a,b){
    console.log(a % b);
}
function sub(a,b){
    console.log(a - b);
}
function div(a,b){
    console.log(a / b);
}

module.exports = {
    addition :add,
    multiplication : mul,
    modules : mod,
    subtraction : sub,
    division : div
}