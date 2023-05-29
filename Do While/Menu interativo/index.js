let opcao = 5;

do {
  opcao = prompt(
    "Seja Bem-vindo(a)\n" +
      "\nEscolha uma opção:" +
      "\n1- ser Coloridinho" +
      "\n2- ser sapatão" +
      "\n3- ser bissexual" +
      "\n4- ser trans" +
      "\n5- ENCERRAR"
  );

  switch (opcao) {
    case "1":
      alert("Você é um coloridinho");
      break;
    case "2":
      alert("Você é um arrombadinho");
      break;
    case "3":
      alert("Você é um coloridinho");
      break;
    case "4":
      alert("Você é um coloridinho");
      break;
  }
} while (opcao < 5);
alert("Sistema encerrado");
{
}
