const Nome_veiculo = prompt("Insira o nome do primeiro veiculo");
let Velocidade_veiculo = parseInt(
  prompt("Insira a velocidade do primeiro veiculo")
);
const Nome_veiculo2 = prompt("Insira o nome do segundo veiculo");
let Velocidade_veiculo2 = parseInt(
  prompt("Insira a velocidade do segundo veiculo")
);

if (Velocidade_veiculo < Velocidade_veiculo2) {
  alert("O veiculo mais rápido é o " + Nome_veiculo2);
} else if (Velocidade_veiculo2 < Velocidade_veiculo) {
  alert("O veiculo mais rápido é o " + Nome_veiculo);
} else {
  alert("As velocidades são iguais: " + Velocidade_veiculo);
}
