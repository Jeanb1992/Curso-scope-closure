//variables
var a; // declarando
var b = 'b';//declaramos y asignamos
b = 'bb'; // reasignar valor
var a ='aa'// redeclaracion


//global scope
var fruit = 'apple';  //global
console.log(fruit);
function bestfruit() {
    console.log(fruit);
}
bestfruit();


function countries(){
    country = 'colombia' //asignacion
    console.log(country);
}
countries();
console.log(country);