const btMenuHamburguer = document.getElementById("botao-menu-hamburguer");
const btFecharMenuHamburguer = document.getElementById(
  "botao-fechar-menu-hamburguer"
);
const iconeBtMenuHamburguer = document.querySelector(".botao-menu-hamburguer");
const menuLateral = document.querySelector(".menu-lateral");

btMenuHamburguer.addEventListener("click", (evento) => {
  if (menuLateral.classList.contains("display-none")) {
    menuLateral.classList.remove("display-none");
    menuLateral.classList.add("display-block");
    iconeBtMenuHamburguer.classList.add("display-none");
  }
});

btFecharMenuHamburguer.addEventListener("click", (evento) => {
  if (menuLateral.classList.contains("display-block")) {
    menuLateral.classList.remove("display-block");
    menuLateral.classList.add("display-none");
    iconeBtMenuHamburguer.classList.remove("display-none");
  }
});
