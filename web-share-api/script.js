const myButton = document.querySelector(".button")

const shareData = {
  title: "Eros Mariano - WebSite",
  text: "Eros Mariano, desenvolvedor Front-End, usando Web Share API",
  url: "https://www.erosmariano.com.br/",
};

myButton.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (error) {
    console.log("Deu erro", error)
  }
});
