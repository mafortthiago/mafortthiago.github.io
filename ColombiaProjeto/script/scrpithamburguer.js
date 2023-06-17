const hamburguer = document.querySelectorAll(".linha-hamburguer");
const nav = document.querySelector("aside>nav>ul");
let ativo = false;

function menu() {
  if (!ativo) {
    nav.style.display = 'flex';
    ativo = true;
  } else {
    nav.style.display = 'none';
    ativo = false;
  }
}

hamburguer.forEach((linha) => {
  linha.addEventListener('click', menu);
});
