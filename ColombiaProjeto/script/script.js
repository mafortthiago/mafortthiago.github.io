const galeriaDeimagens = document.querySelectorAll('.img-galeria');
galeriaDeimagens.forEach((imagem) => {
  imagem.addEventListener('mouseover', () => {
    galeriaDeimagens.forEach((OutraImagem) => {
      if (OutraImagem !== imagem) {
        OutraImagem.classList.add('img-inativa');
      }
    });
    imagem.classList.add('img-ativa');
  });

  imagem.addEventListener('mouseout', () => {
    galeriaDeimagens.forEach((OutraImagem) => {
      OutraImagem.classList.remove('img-inativa');
    });
    imagem.classList.remove('img-ativa');
  });
});
