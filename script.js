const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
const clickFora = document.querySelector('.principal')

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
});
 
clickFora.addEventListener('click', () => {
  menu.classList.remove('menu-lateral--ativo');
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    menu.classList.remove('menu-lateral--ativo')
  }
})

// Voltar topo

const voltarTopo = document.querySelector(".btn");

const btnVisivel = () => {
  if (window.scrollY > 1600) {
    voltarTopo.style.visibility = "visible";
  } else {
    voltarTopo.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisivel();
});

voltarTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
