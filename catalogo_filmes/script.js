function preencherFicha(filme, dados) {
    let filmeContainer = document.getElementById('filme-container')

    let filmeEmCartaz = document.createElement('div')
    filmeEmCartaz.classList.add('filme-card')

    let titulo = document.createElement('h2')
    titulo.textContent = filme.titulo

    let resumo = document.createElement('p')
    resumo.textContent = filme.resumo

    let imagem = document.createElement('img')
    imagem.src = filme.figura
    imagem.alt = filme.titulo

    let classificacao = document.createElement('p')
    classificacao.textContent =
        'Classificação: ' + criarEstrelas(mediaEstrelas(filme.opinioes))

    let generos = document.createElement('p')
    generos.textContent = 'Gêneros: ' + filme.generos.join(', ')

    let titulosSemelhantes = document.createElement('p')
    titulosSemelhantes.textContent =
        'Títulos Semelhantes: ' +
        obterTitulosSemelhantes(filme.titulosSemelhantes, dados).join(', ')

    let elenco = document.createElement('p')
    elenco.textContent = 'Elenco: ' + filme.elenco.join(', ')

    let opinioes = document.createElement('p')
    opinioes.textContent = 'Opiniões: ' + extrairOpinioes(filme.opinioes)

    let faixaEtaria = document.createElement('div')
    faixaEtaria.classList.add('faixa-etaria')

    if (filme.classificacao <= 14) {
        faixaEtaria.classList.add('verde')
        faixaEtaria.textContent = 'Livre'
    } else if (filme.classificacao < 18) {
        faixaEtaria.classList.add('amarelo')
        faixaEtaria.textContent = '14+'
    } else {
        faixaEtaria.classList.add('vermelho')
        faixaEtaria.textContent = '18+'
    }

    filmeEmCartaz.appendChild(titulo)
    filmeEmCartaz.appendChild(resumo)
    filmeEmCartaz.appendChild(imagem)
    filmeEmCartaz.appendChild(classificacao)
    filmeEmCartaz.appendChild(generos)
    filmeEmCartaz.appendChild(titulosSemelhantes)
    filmeEmCartaz.appendChild(elenco)
    filmeEmCartaz.appendChild(opinioes)
    filmeEmCartaz.appendChild(faixaEtaria)

    filmeContainer.appendChild(filmeEmCartaz)
}
function mediaEstrelas(opinioes) {
    if (opinioes.length === 0) {
        return 0
    }

    let total = 0
    for (let i = 0; i < opinioes.length; i++) {
        total += opinioes[i].rating
    }

    return total / opinioes.length
}
function obterTitulosSemelhantes(ids, dados) {
    return ids.map((id) => {
        let filme = dados.find((item) => item.id === id)
        return filme ? filme.titulo : ''
    })
}
function criarEstrelas(rating) {
    let estrelas = ''

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            estrelas += '★'
        } else {
            estrelas += '☆'
        }
    }
    return estrelas
}
function extrairOpinioes(opinioes) {
    let opinioesText = opinioes.map((opiniao) => {
        let rating = opiniao.rating
        let descricao = opiniao.descricao
        return rating + ': ' + descricao
    })
    return opinioesText.join(', ')
}

function carregarDados() {
    let url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json'

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach((filme) => {
                preencherFicha(filme, data)
            })
        })
        .catch((error) => console.error(error))
}

carregarDados()
