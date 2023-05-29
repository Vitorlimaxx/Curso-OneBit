const turista = prompt("Qual o seu nome?");
let cidade = "";
let numerodecidadesvisitadas = 0;
let visitou = confirm("você ja visitou uma cidade?");

while (visitou == true) {
  let cidades = prompt("qual cidade?");
  cidade += " - " + cidades + "\n";
  numerodecidadesvisitadas++;
  visitou = confirm("você ja visitou outra?");
  if (visitou == false) {
    alert(
      "turista: " +
        turista +
        "\n numero de cidades: " +
        numerodecidadesvisitadas +
        "\n cidades visitadas:\n" +
        cidade
    );
  }
}
