class Relogio {
    constructor(min,hr,seg){
        this.seg = document.querySelector(seg);
        this.min = document.querySelector(min);
        this.hr = document.querySelector(hr);
    }
    getTime(){
        const time = new Date();
        return time;
    }
    getHora(){
        return (360/12) * this.getTime().getHours();
    }
    getMinutos(){
        return (360/60) * this.getTime().getMinutes();
    }
    getSegundos(){
        return (360/60) * this.getTime().getSeconds();
    }
    rotate(){
        setInterval(()=>{
            this.seg.style.transformOrigin = "center bottom";
            this.seg.style.transform = `rotate(${this.getSegundos()}deg)`;
            this.min.style.transformOrigin = "center bottom";
            this.min.style.transform = `rotate(${this.getMinutos()}deg)`;
            this.hr.style.transformOrigin = "center bottom";
            this.hr.style.transform = `rotate(${this.getHora()}deg)`;
    },1000);
}
}

class ModoClaro{
    constructor(img,main,botao){
        this.img = document.querySelector(img);
        this.main = document.querySelector(main);
        this.botao = document.querySelector(botao);;
    }
    mudaCor(){
        this.botao.addEventListener("click",() => {
        if(getComputedStyle(this.main).backgroundColor == "rgb(9, 0, 17)"){
            
                this.main.style.backgroundColor = `rgb(241, 241, 241)`;
                this.main.style.color = `rgb(9, 0, 17)`;
                this.img.style.backgroundImage = `url("./src/img/fundo-claro.png")`;
                this.img.style.boxShadow = `0px 0px 66px 21px rgb(241, 241, 241)`;
                this.botao.style.backgroundColor = `rgb(241, 241, 241)`;
                this.botao.textContent = "Modo noite";
            }else{
            
                this.main.style.backgroundColor = `rgb(9, 0, 17)`;
                this.main.style.color = `rgb(93, 75, 93)`;
                this.img.style.backgroundImage = `url("./src/img/fundo-relogio.png")`;
                this.img.style.boxShadow = `0px 0px 66px 21px rgba(51,22,51,1)`;
                this.botao.style.backgroundColor = `rgb(9, 0, 17)`;
                this.botao.textContent = "Modo dia";
            
        }
    });
    }
    }

const r = new Relogio("#minutos","#horas","#segundos");
r.rotate();
const c = new ModoClaro(".relogio-section","main",".botao");
c.mudaCor();