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
    //links do carrocel principal
document.getElementById('slide1Button').addEventListener('click', () =>{
    document.getElementById('eventos').scrollIntoView({behavior: "smooth"})
})

document.getElementById('slide6Button').addEventListener('click', () =>{
    document.getElementById('feiras').scrollIntoView({behavior: "smooth"})
})



//lógica eventos
document.getElementById('saberMaisExpo').addEventListener('click', () =>{
    window.open("https://expolondrina.com.br/", "_blank")
})

//logica de link externo da seção Feiras
document.querySelector('#img2').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})
document.querySelector('#mapFeiras').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})