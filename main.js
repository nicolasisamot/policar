const btMenuHamburguer = document.getElementById("botao-menu-hamburguer");
const btFecharMenuHamburguer = document.getElementById(
  "botao-fechar-menu-hamburguer"
);
const iconeBtMenuHamburguer = document.querySelector(".botao-menu-hamburguer");
const menuLateral = document.querySelector(".menu-lateral");
const listaBtMenuLateral = document.querySelectorAll(
  ".lista-menu-lateral li a"
);

listaBtMenuLateral.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    if (menuLateral.classList.contains("display-none")) {
      removeMenuLateral();
    }
    if (menuLateral.classList.contains("display-block")) {
      adicionaMenuLateral();
    }
  });
});

btMenuHamburguer.addEventListener("click", (evento) => {
  if (menuLateral.classList.contains("display-none")) {
    removeMenuLateral();
  }
});

btFecharMenuHamburguer.addEventListener("click", (evento) => {
  if (menuLateral.classList.contains("display-block")) {
    adicionaMenuLateral();
  }
});

function removeMenuLateral() {
  menuLateral.classList.remove("display-none");
  menuLateral.classList.add("display-block");
  iconeBtMenuHamburguer.classList.add("display-none");
}
function adicionaMenuLateral() {
  menuLateral.classList.remove("display-block");
  menuLateral.classList.add("display-none");
  iconeBtMenuHamburguer.classList.remove("display-none");
}
