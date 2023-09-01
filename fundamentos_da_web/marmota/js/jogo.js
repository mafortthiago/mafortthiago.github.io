const tela = document.querySelector(".score");
const divs = document.querySelectorAll(".hole");

divs.forEach((div) => {//
  div.addEventListener("click", function () {//
    if (div.classList.contains("up")) {//
      let pontos = parseInt(tela.textContent);//
      pontos++;
      tela.textContent = pontos;//
      div.classList.remove("up");//
    }
  });
});

setInterval(function () {//
  const numdiv = Math.trunc(Math.random() * 6) + 1;
  const div = document.querySelector(`.hole${numdiv}`);
  div.classList.add("up");

  setTimeout(function () {
    div.classList.remove("up");
  }, 1000);
}, 1000);
