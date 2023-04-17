const gato = document.querySelector('.gato');
const banheira = document.querySelector('.banheira');
const aviso = document.querySelector('.fim-de-jogo');
const pontuacao = document.querySelector('h3');
const ppontos = document.querySelector('.pontuacao');
let pontos = 0;
let maiorpontuacao = 0;

const pular = () => {
    gato.classList.add('pulo');

    setTimeout(() => {
        gato.classList.remove('pulo');    
    },500);
}
const recomeçar = () => {
    location.reload();
}
const loop = setInterval(() =>{
    const posicaoBanheira = banheira.offsetLeft;
    const posicaoGato = +window.getComputedStyle(gato).bottom.replace('px','');
    pontos +=  Math.round(posicaoBanheira/300);
    pontuacao.innerHTML = `PONTUAÇÃO: ${pontos}`;
    if(posicaoBanheira <= 87 && posicaoBanheira > 0 && posicaoGato < 50){
        banheira.style.animation = 'none';
        banheira.style.left = `${posicaoBanheira}px`;

        gato.style.animation = 'none';
        gato.style.bottom = `${posicaoGato}px`;
        aviso.style.display = 'flex';
        clearInterval(loop);
        pontuacao.innerHTML = ``;
        if(pontos > maiorpontuacao){
            maiorpontuacao = pontos;
        }
        ppontos.innerHTML = `Sua pontuação foi: ${maiorpontuacao}`;
        document.addEventListener('click', recomeçar);
    }

}, 10);
document.addEventListener('keydown', pular);