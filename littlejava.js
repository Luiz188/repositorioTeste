let ladoA = prompt("Digite o lado A");
let ladoB = prompt("Digite o lado B");

let calculo = ladoA * ladoB;

document.getElementById("valor1").innerHTML = ladoA;
document.getElementById("valor2").innerHTML = ladoB;

document.getElementById("resultado").innerHTML = calculo;