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

document.getElementById('slide2').addEventListener('click', () =>{
    document.getElementById('ecoTurismo').scrollIntoView({behavior: "smooth"})
})

document.getElementById('slide6Button').addEventListener('click', () =>{
    document.getElementById('feiras').scrollIntoView({behavior: "smooth"})
})



//lógica eventos
document.getElementById('saberMaisExpo').addEventListener('click', () =>{
    window.open("https://expolondrina.com.br/", "_blank")
})

//lógica ecoturismo
document.getElementById('palink').addEventListener('click', () =>{
    window.open("https://turismo.sapopema.pr.gov.br/atracao/detalhe/30/pico-agudo-/", "_blank")
})
document.getElementById('apcLink').addEventListener('click', () =>{
    window.open('https://codel.londrina.pr.gov.br/index.php/pontos-turisticos/rurais.html', "_blank")
})
document.getElementById('pmgLink').addEventListener('click', () =>{
    window.open("https://www.iat.pr.gov.br/Pagina/Parque-Estadual-Mata-dos-Godoy-PEMG", "_blank")
})
document.getElementById('patLink').addEventListener('click', () =>{
    window.open("https://portal.londrina.pr.gov.br/unidades-de-conservacao/parque-municipal-arthur-thomas", "_blank")
})
document.getElementById('ptjLink').addEventListener('click', () =>{
    window.open("https://www.instagram.com/toca_do_jacare/", "_blank")
})

//logica de link externo da seção Feiras
document.querySelector('#img2').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})
document.querySelector('#mapFeiras').addEventListener('click', () =>{
    window.open("https://feiraslondrina.com.br/fair", "_blank")
})