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