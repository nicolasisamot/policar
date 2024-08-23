const btMenuHamburguer = document.getElementById("botao-menu-hamburguer");
const btFecharMenuHamburguer = document.getElementById(
  "botao-fechar-menu-hamburguer"
);
const iconeBtMenuHamburguer = document.querySelector(".botao-menu-hamburguer");
const menuLateral = document.querySelector(".menu-lateral");
const listaBtMenu = document.querySelectorAll(".lista-menu li a");
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

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const sectionRect = section.getBoundingClientRect();
  const scrollPosition =
    window.scrollY +
    sectionRect.top -
    (window.innerHeight / 2 - sectionRect.height / 2);

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}

listaBtMenu.forEach((botao, index) => {
  botao.addEventListener("click", (event) => {
    const sectionDestino = `section${index + 1}`;
    scrollToSection(sectionDestino);
  });
});

listaBtMenuLateral.forEach((botao, index) => {
  botao.addEventListener("click", (event) => {
    const sectionDestino = `section${index + 1}`;
    scrollToSection(sectionDestino);
  });
});
