class mobileLista{
    constructor(mobileMenu, mobileUl, mobileLi){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.mobileUl = document.querySelector(mobileUl);
        this.mobileLi = document.querySelectorAll(mobileLi);
        this.classeAtiva = "desativa";
    }
    clicado(){
        if(this.classeAtiva == "desativa"){
            this.mobileUl.classList.remove("desativa")
            this.mobileUl.style.display = "flex";
            this.classeAtiva = "ativa";
           
        } else {
            this.mobileUl.classList.add("desativa");
            setTimeout(() => {
                this.mobileUl.style.display = "none";
            }, 300);
            this.classeAtiva = "desativa";
        }
    }
    clicarNoMenu(){
        this.mobileMenu.addEventListener("click", this.clicado.bind(this));
    } 
    iniciar(){
        if(this.mobileMenu){
            this.clicarNoMenu();
        }
        return this;
    }
}
const navMobile = new mobileLista(".hamburguer", ".menu", ".menu>li");
navMobile.iniciar();
