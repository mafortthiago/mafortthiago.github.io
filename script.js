const cachorroQuente = {
    divCachorroQuente: document.querySelector(".cachorro-quente"),
    pao: document.querySelectorAll(".pao"),
    recheio: document.querySelector("#recheio")
};

const menu = {
    divMenu: document.querySelector(".menu"),
    divNav: document.querySelector(".nav-header"),
    cachorroQuente: cachorroQuente
};

function mudaMenu(){
    const estiloNav = window.getComputedStyle(menu.divNav);
    if(estiloNav.display === "none" || estiloNav.display === ""){
        menu.divNav.style.display = "flex";
    } else {
        menu.divNav.style.display = "none";
    }
}

cachorroQuente.divCachorroQuente.addEventListener("click", mudaMenu);
