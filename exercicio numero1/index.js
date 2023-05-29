const nome = prompt("Nome do usuario");
const sobrenome = prompt("Sobrenome do usuario");
const Campo = prompt("Campo de Estudo");
const ano = prompt("ano de nascimento");

alert(
  "cadastro concluido\n" +
    "\nnome completo " +
    nome +
    " " +
    sobrenome +
    "\ncampo de estudo " +
    Campo +
    "\nidade: " +
    (2023 - ano)
);
