let imoveis = [];
let menu = "";

do {
  menu = prompt(
    "Bem-vinde ao Cadastro de Imóveis!\n" +
      "Quantidade de imóveis: " +
      imoveis.length +
      "\n\n" +
      "Escolha uma opção:\n" +
      "1. Novo imóvel\n" +
      "2. Imóveis Salvos\n" +
      "3. Sair"
  );

  if (menu === "1") {
    const imovel = {};
    imovel.proprietario = prompt("Qual o nome do proprietário?");
    imovel.quartos = prompt(
      "Informe a quantidade de quartos em números arábicos"
    );
    imovel.banheiro = prompt(
      "Informe a quantidade de banheiros em números arábicos"
    );
    imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");
    let confirmacao = confirm(
      "Deseja salvar esse imóvel?\n" +
        "Proprietário: " +
        imovel.proprietario +
        "\n" +
        "Quartos: " +
        imovel.quartos +
        "\n" +
        "Banheiros: " +
        imovel.banheiro +
        "\n" +
        "Possui garagem? " +
        imovel.garagem
    );

    if (confirmacao) {
      alert("O imóvel foi criado com sucesso!");
      imoveis.push(imovel);
    } else {
      alert("Imóvel não adicionado. Voltando ao menu");
    }
  } else if (menu === "2") {
    for (let i = 0; i < imoveis.length; i++) {
      alert(
        "Imóvel " +
          (i + 1) +
          "\n" +
          "Proprietário: " +
          imoveis[i].proprietario +
          "\n" +
          "Quartos: " +
          imoveis[i].quartos +
          "\n" +
          3,
        "Banheiros: " +
          imoveis[i].banheiro +
          "\n" +
          "Possui garagem? " +
          imoveis[i].garagem
      );
    }
  }
} while (menu !== "3");
