document.querySelector(".button").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
        title: "Aplicação Exemplo",
        text: "Essa é uma aplicação exemplo para desenvolvedores ",
        url: "https://github.com/",
      })
      .then(() => {
        console.log("Compartilhado com Sucesso");
      })
      .catch((error) => {
        console.log("Erro ao compartilhar", error);
      });
  }
});
