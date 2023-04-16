const gato = document.querySelector('.gato');
const banheira = document.querySelector('.banheira');
const aviso = document.querySelector('.fim-de-jogo');

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
    if(posicaoBanheira <= 87 && posicaoBanheira > 0 && posicaoGato < 50){
        banheira.style.animation = 'none';
        banheira.style.left = `${posicaoBanheira}px`;

        gato.style.animation = 'none';
        gato.style.bottom = `${posicaoGato}px`;
        aviso.style.display = 'flex';
        clearInterval(loop);
        document.addEventListener('click', recomeçar);
    }

}, 10);
document.addEventListener('keydown', pular);