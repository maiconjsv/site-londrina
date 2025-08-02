//scroll do header bars
const headerBar = document.querySelector('.headerBarOn')
    window.addEventListener('scroll', () =>{
        if(window.scrollY >190){
            headerBar.classList.add('headerBarOff')
        }
        else{
            headerBar.classList.remove('headerBarOff')
        }
    })

//Links internos
const discovery = document.querySelector('#descobrirButton')
const coisasPraFazer1 = document.querySelector('.swiper')
    discovery.addEventListener('click', () =>{
        coisasPraFazer1.scrollIntoView({behavior: "smooth"})
    })

//logica de link externo da seção Feiras
document.querySelector('#img2').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})
document.querySelector('#mapFeiras').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})