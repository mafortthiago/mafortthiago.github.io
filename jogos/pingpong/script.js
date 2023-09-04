const btnJogar = document.querySelector('#jogar')
const painelInicio = document.querySelector('.inicio');
const painelFinal = {
    painel: document.querySelector('.final'),
    titulo: document.querySelector('.titulo-painel-final'),
    resultado: document.querySelector('.resultado'),
    btnJogarNovamente: document.querySelector('#jogar-novamente')
}
painelFinal.btnJogarNovamente.addEventListener('click', function(){
    iniciar();
    main();
})
function iniciar(){
    jogoPausado = false;
    placar.jogador = 0;
    placar.computador = 0;
    bola.x = campo.w/2;
    bola.y = campo.h/2;
    bola.velocidade = 8;
    painelFinal.painel.style.display = "none"
}
let jogoPausado = false;


btnJogar.addEventListener('click', function(){
    painelInicio.style.display = "none";
    
    iniciar();
})
function exibeResultado(){
    painelFinal.painel.style.display = 'flex'
    if(placar.computador == 5){
        painelFinal.titulo.innerHTML = 'Você perdeu o jogo!'
    }else{
        painelFinal.titulo.innerHTML = 'Você ganhou o jogo!'
    }
    painelFinal.resultado.innerHTML = `Placar final: Jogador ${placar.jogador} X ${placar.computador} Computador`
    jogoPausado = true;
}
const canvas = document.querySelector("canvas");
            const ctxCanvas = canvas.getContext("2d");
            const larguraDaLinha = 15;
            const espacamentoX = 10;

            const mouse = {
                x: 0,
                y:0
            }
            const campo = {
                w:window.innerWidth,
                h:window.innerHeight,
                desenho: function(){
                    ctxCanvas.fillStyle = '#0077b6';
                ctxCanvas.fillRect(0, 0, this.w , this.h);
                },
            }
            const placar = {
                jogador: 0,
                computador: 0,
                pontoJogador: function(){
                    this.jogador++;
                    if(this.jogador == 5){
                        exibeResultado();
                    }
                },
                pontoComputador: function(){
                    this.computador++;
                    if(this.computador == 5){
                        exibeResultado();
                    }
                },
                desenho: function(){
                    ctxCanvas.font = "bold 72px relaway";
                    ctxCanvas.textAlign = "center";
                    ctxCanvas.textBaseline = "top";
                    ctxCanvas.fillStyle = "#ffffff";
                    ctxCanvas.fillText(this.jogador, campo.w / 4, 50);
                    ctxCanvas.fillText(this.computador, campo.w / 2 + campo.w / 4, 50);
                }
            }
            const linha = {
                w:15,
                h:campo.h,
                desenho: function(){
                    ctxCanvas.fillStyle = "#ffffff";
                    ctxCanvas.fillRect( campo.w / 2 - this.w /2, 0,this.w,this.h);
                }
            }
            const raqueteDaEsquerda = {
                x: espacamentoX,
                y: campo.h /2,
                w: linha.w,
                h: 200,
                velocidade: 5,
                _move: function(){
                    this.y = mouse.y;
                },
                _aumentarVelocidade: function(){
                    this.velocidade++;
                },
                desenho: function(){
                    ctxCanvas.fillStyle = "#ffffff";
                    ctxCanvas.fillRect(this.x,this.y,this.w,this.h);
                    this._move();
                }
            }
            const raqueteDaDireita = {
    x: campo.w - (2 * linha.w),
    y: campo.h / 2,
    w: linha.w,
    h: 200,
    sensibilidade: 0.01,
    limiteVelocidade: 4,

   _move: function() {
        const centroDaRaquete = this.y + this.h / 2;
        const diferenca = bola.y - centroDaRaquete;
        const fatorDeAjuste = 0.2;
        const movimento = diferenca * fatorDeAjuste + 5;
        const atrasoAleatorio = Math.random() * 300; 

        setTimeout(() => {
            this.y += movimento;
            this.y = Math.max(0, Math.min(campo.h - this.h, this.y));
        }, atrasoAleatorio);
    },

    _aumentarSensibilidade: function() {
        this.sensibilidade += 0.01;
    },

    _diminuirSensibilidade: function() {
        this.sensibilidade -= 0.01;
        this.sensibilidade = Math.max(0, this.sensibilidade);
    },

    _ajustarLimiteVelocidade: function(novoLimite) {
        this.limiteVelocidade = novoLimite;
    },

    _resetar: function() {
        this.x = campo.w - (2 * linha.w);
        this.y = campo.h / 2;
        this.sensibilidade = 0.01;
        this.limiteVelocidade = 4;
    },

    desenho: function() {
        ctxCanvas.fillStyle = "#ffffff";
        ctxCanvas.fillRect(this.x, this.y, this.w, this.h);
        this._move();
    },
};




            const bola = {
                x: campo.w /2,
                y: campo.h /2,
                velocidade: 9,
                directionX: 1,
                directionY: 1,
                _calcPosition: function(){
                    if(this.x > campo.w - this.raio - raqueteDaEsquerda.w - espacamentoX){
                        if(this.y + this.raio> raqueteDaDireita.y && this.y -this.raio < raqueteDaDireita.y + raqueteDaDireita.h){
                            this._reverseX();
                        }else{
                            placar.pontoJogador();
                            this._resetar();
                        }
                    }
                    if(this.x < this.raio + raqueteDaEsquerda.w + espacamentoX){
                        if(this.y + this.raio > raqueteDaEsquerda.y && this.y - this.raio < raqueteDaEsquerda.y + raqueteDaEsquerda.h){
                            this._reverseX();
                        }else{
                            placar.pontoComputador();
                            this._resetar();
                        }
                    }
                    if((this.y > campo.h - this.raio && this.directionY > 0) || (this.y- this.raio < 0 && this.directionY < 0)){
                        this._reverseY();
                    }
                },_reverseX: function(){
                    this.directionX *= -1;
                },
                _reverseY: function(){
                    this.directionY *= -1;
                },
                _aumentarVelocidade: function(){
                    this.velocidade += 1.3;
                },
                _resetar: function(){
                    this.x = campo.w/2;
                    this.y = campo.h/2;
                    this._reverseX();
                    this._aumentarVelocidade();
                    raqueteDaEsquerda._aumentarVelocidade();

                },
                _move: function(){
                    this.x += this.directionX * this.velocidade;
                    this.y += this.directionY * this.velocidade;
                },
                raio: 20,
                desenho: function(){
                    ctxCanvas.fillStyle = "#ffffff";
                    ctxCanvas.beginPath();
                    ctxCanvas.arc(this.x,this.y,this.raio,0, 2.0 * Math.PI,false);
                    ctxCanvas.fill();
                    this._calcPosition();
                    this._move();
                }
            }
            function configurar(){
                canvas.height = ctxCanvas.height = window.innerHeight;
                canvas.width = ctxCanvas.width = window.innerWidth;
            }

            function desenhar(){
                campo.desenho();
                linha.desenho();
                raqueteDaEsquerda.desenho();
                raqueteDaDireita.desenho();
                bola.desenho();
                placar.desenho();
               
            
            }
            window.animateFrame = (function(){
                return(
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback){
                        return window.setTimeout(callback, 1000/60)
                    }
                )
            })()
            function main() {
    if (!jogoPausado) {
        animateFrame(main);
        desenhar();
    }
}

            configurar();
            main();

            canvas.addEventListener('mousemove', function(e){
                mouse.x = e.pageX;
                mouse.y = e.pageY;
            })