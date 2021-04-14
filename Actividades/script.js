// var n1 = 1
// var n2 = 3

// //función con parámetros declarada//

// function sumar(n1, n2){
//     alert(n1 + n2)
// }
// //función mandada a llamar//
// sumar(n1, n2)

function sumar() {
    var n1 = parseInt(prompt("Ingresa un número"))
    var n2 = parseInt(prompt("Ingresa otro número"))
    
    n1 === n2 ? alert("PEZ") : alert(n1 + n2)
}
