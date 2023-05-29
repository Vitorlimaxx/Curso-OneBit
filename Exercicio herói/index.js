const nome_pers1 = prompt("Insira o nome do personagem um");
let poder_ataque = parseInt(prompt("Insira o poder de ataque"));
const nome_pers2 = prompt("Insira o nome do personagem dois");
let pontos_vida = parseInt(prompt("Insira os pontos de vida"));
let poder_defesa = parseInt(prompt("Insira o poder de defesa"));
const escudo = confirm("Há escudo?");
let dano = 0;

if (poder_ataque < poder_defesa && escudo == false) {
  dano = poder_ataque - poder_defesa;
} else if (poder_ataque < poder_defesa && escudo == true) {
  dano = (poder_defesa - poder_ataque) / 2;
} else {
  dano = 0;
}
let vida_final = pontos_vida - dano;
alert(
  "O dano causado foi de " +
    dano +
    " e a vida final do personagem de defesa foi " +
    vida_final
);
alert(
  "O personagem " +
    nome_pers1 +
    " tem um poder de ataque " +
    poder_ataque +
    "\n O personagem " +
    nome_pers2 +
    " está com o total de " +
    vida_final +
    " pontos de vida"
);
