// let a = 80;
//let b = 20;
//console.log(a+b);
//console.log(a-b);
//console.log(a*b);
//console.log(a/b);
//console.log(a%b);
//let nombre = "Laura";
//let apellido = "Ocampo";
//console.log(nombre+apellido);
//let a = 10;
//a = 10+5;
//console.log(a);
// console.log(Math.E);
// console.log(Math.PI);
// let numero = 8.3;
// console.log(Math.abs(numero));
// console.log(Math.ceil(numero));
// console.log(Math.floor(numero));
// console.log(Math.pow(7,3));
// console.log(Math.random()*80);
// console.log(Math.round(Math.random()*80));
// // console.log(Math.sign(0)); //-1, 0, 1
// let numero = 0;
// //Condiciones simples
// if(numero>0){
//     console.log('${numero} es mayor que 0');
// }
// //Condicionales compuestos
// if(numero>0){
//     console.log('${numero} es mayor que 0');
// }else{
//     console.log('${numero} es menor que 0');
// }
// //Condicionales multiples
// if(numero>0){
//     console.log('${numero} es mayor que 0');
// }else if(numero<0){
//     console.log('${numero} es menor que 0');
// }else{
//     console.log('${numero} es igual a 0)');
// }
// Ordenar 3 números de mayor a menor
//posibilidades de orden
// abc = 123
// acb = 132
// bac = 213
// bca = 231
// cab = 312
// cba = 321
const numeros = document.getElementById("numeros");
const resultado = document.getElementById('resultado');

let a = prompt("Introduzca el primer número");
let b = prompt("Introduzca el segundo número");
let c = prompt("Introduzca el último número");

numeros.textContent = `Los números introducidos son ${a}, ${b}, ${c}`

if(a>b && a>c){
    if(b>c){
        resultado.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        resultado.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        resultado.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{
        resultado.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        resultado.textContent = `El orden es: ${c}, ${a}, ${b}`
    }else{
        resultado.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}