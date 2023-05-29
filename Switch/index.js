let metros = parseInt(prompt("Insira a quantidade em metros:"));
const opção = prompt(
  "Escolha uma medida de escolha: ex: mm, cm, dm, dam, hm e km"
);
let resultado = 0;

switch (opção) {
  case "mm":
    resultado = metros / 0.001;
    alert("O resultado é " + resultado + " Mm");
    break;
  case "cm":
    resultado = metros / 0.01;
    alert("O resultado é " + resultado + " Cm");
    break;

  case "dm":
    resultado = metros / 0.1;
    alert("O resultado é " + resultado + " Dm");
    break;

  case "dam":
    resultado = metros * 0.1;
    alert("O resultado é " + resultado + " Dam");
    break;

  case "hm":
    resultado = metros * 0.01;
    alert("O resultado é " + resultado + " Hm");
    break;

  case "km":
    resultado = metros * 0.001;
    alert("O resultado é " + resultado + " Km");
    break;
  default:
    alert("Opção inválida.");
}
