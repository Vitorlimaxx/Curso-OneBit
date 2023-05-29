const numero = prompt("Insira o número desejado");
let resultado = " ";

for (let final = 1; final <= 20; final++) {
  resultado += " " + final + "*" + numero + "=" + numero * final + "\n";
}
alert("O resultado é" + numero + ":\n\n" + resultado);
