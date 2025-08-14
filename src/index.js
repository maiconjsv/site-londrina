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
//interações do header
const translateIcon = document.getElementById('translate')
const tis =  document.querySelector('.translates')
const bgTr = document.querySelector('.bgTr')
const hb = document.querySelector('.hb')
const closeBar = document.getElementById('closeBar')
    translateIcon.addEventListener('click', () =>{
        tis.classList.add('trOn')
        bgTr.classList.add('bgTrOn')
    })
   bgTr.addEventListener('click', () =>{
        tis.classList.remove('trOn')
        bgTr.classList.remove('bgTrOn')
   })
   document.getElementById('menuButton').addEventListener('click', () =>{
        hb.classList.add('hbOn')
   })
   closeBar.addEventListener('click', () =>{
    hb.classList.toggle('hbOn')
   })

//Links internos
const discovery = document.querySelector('#descobrirButton')
const swiperDesktop = document.getElementById('swiperDesktop')
const discoveryDesktop = document.querySelector('#descobrirDesktop')
const coisasPraFazer1 = document.querySelector('.swiper')
    discovery.addEventListener('click', () =>{
        coisasPraFazer1.scrollIntoView({behavior: "smooth"})
    })
    discoveryDesktop.addEventListener('click', () =>{
        swiperDesktop.scrollIntoView({behavior:"smooth"})
    })
    //links do carrocel principal
document.getElementById('slide1Button').addEventListener('click', () =>{
    document.getElementById('eventos').scrollIntoView({behavior: "smooth"})
})

document.getElementById('slide2Button').addEventListener('click', () =>{
    document.getElementById('ecoTurismo').scrollIntoView({behavior: "smooth"})
})

document.getElementById('slide4Button').addEventListener('click', ()=>{
    document.getElementById('h1familial').scrollIntoView({behavior:"smooth"})
})

document.getElementById('slide5Button').addEventListener('click', ()=>{
    document.getElementById('historiaEmuseus').scrollIntoView({behavior:"smooth"})
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


//Função para a seção do swiper, mas para pc





//Tradução do index
const idiomas = {
    br:{
        logopc:"O que fazer em Londrina?",
        entrarEmContato:"Entrar em contato",
        contribuir: "Contribuir",
        sobreLondrina:"Sobre Londrina", 
        h2HeaderLogo:"O que fazer em Londrina?",
        descobrirButton:"Descobrir",
        h1EventosHeader:"Eventos",
        slideButton:"Descobrir",
        h1EcoturismoHeader:"Ecoturismo",
        h1PraFamiliaHeader:"Pra Familia",
        h1HistoriaeMuseusHeader:"História e museus",
        h1FeirasHeader:"Feiras",
        p01:"Um dos maiores eventos agropecuários da América Latina",
        iconEx1:"Gastronomia",
        iconEx2:"Shows",
        iconEx3:"Negócios",
        iconEx4:"Exposições",
        p02:"O evento acontece a 6 décadas e é um espaço aberto para o público de todas as idades, contendo desde shows sertanejos marcantes até exposição de animais, tecnologia agricola, praça de alimentação com todo tipo de comida e oportunidade de negócios.",
        saberMaisExpo:"Saber Mais",
        maisEventos:"Mais eventos marcados",
        p03:"Clique no que preferir para saber mais",
        p04:"Ou você pode acompanhar todos eventos locais pelo site Visite Londrina",
        h1Ecoturismo:"Ecoturismo em Londrina",
        p05:"Caminhadas, trilhas, pesca e camping?",
        p06:"O ponto mais alto do Paraná, localizado a 135km de Londrina",
        palink:"Saber mais",
        p07:"Uma enorme cachoeira de 116 metros de altura que se encontra a 76km de Londrina",
        apcLink:"Saber mais",
        h4Parquegodoy:"Parque mata dos Godoy",
        p08:"Um parque repleto de trilhas por dentro de uma floresta sub-tropical a 18km de Londrina ",
        pmgLink:"Saber mais",
        h4ParqueMAT:"Parque municipal Arthur Thomas",
        p09:"Um parque urbano de 85 hectares que está localizado dentro da cidade ",
        patLink:"Saber mais",
        h4pesqueiro:"Pesqueiro Toca do Jacaré",
        p10:"A 13km de Londrina se encontra um famoso pesqueiro na modalidade pesque-page",
        ptjLink:"Saber mais",
        h1familial:"Os melhores lugares para familia",
        p11:"Um local perfeito para passear tranquilamente e fazer piquenique",
        p12:"Um local seguro e espaçoso repleto de natureza em volta",
        h1museuscul:"Museus e cultura",
        p13:"Explore a história de Londrina e mergulhe na cultura local",
        h3museusHL:"Museu Histórico de Londrina",
        smallFM:"Foto do museu histórico",
        p14:" O Museu Histórico de Londrina Padre Carlos Weiss foi inaugurado no dia 18 de setembro de 1970, na antiga Faculdade de Filosofia, Ciências e Letras de Londrina. <br> A partir de 1974, o museu é anexado à UEL como órgão suplementar, estando vinculado ao Centro de Letras e Ciências Humanas da universidade. Em 10 de dezembro de 1986 o museu passa a ocupar o prédio que outrora pertencia à segunda estação ferroviária de Londrina, cedido pela Prefeitura. <br> O edifício do hoje Museu Histórico apresenta linhas arquitetônicas caracteristicamente ecléticas.",
        smallfW:"Fonte: Wikipédia",
        h3maL:"Museu da Arte de Londrina",
        smallfma:"Foto do Museu da Arte",
        p15:"O Museu de Arte de Londrina é um museu brasileiro no município de Londrina, no Paraná. <br> Foi criado pelo decreto nº 172 em 12 de maio de 1993, data em que foi inaugurado. A exposição de inauguração exibiu a escultura A Eterna Primavera, de Auguste Rodin, e também obras dos artistas Menotti Del Pichia e Vitor Brecheret[1]. <br>O prédio que abriga o museu fica na região central de Londrina, na rua Sergipe, e é tombado pelo Patrimônio Histórico e Artístico. Foi projetado em 1952 pelo arquiteto João Batista Vilanova Artigas e era usado como terminal rodoviário da cidade até 1988, quando o terminal mudou de lugar.",
        h1cFeiras:"Conheça as feiras",
        pFeira1:"Nada como se perder em um feira recheada de sensações e sabores",
        pFeira2:"Acesse o link a baixo e descubra as melhores feiras em Londrina",
        mapFeiras:"Mapa de feiras",
        oqfl:"O que fazer em Londrina?",
        termU:"Termos de uso",
        p16:"Desenvolvido por"
    },
    en:{
        logopc:"What to do in Londrina?",
        entrarEmContato:"Contact us",
        contribuir: "Contribute",
        sobreLondrina:"About Londrina", 
        h2HeaderLogo:"What to do in Londrina?",
        descobrirButton:"Discover",
        h1EventosHeader:"Events",
        slideButton:"Discover",
        h1EcoturismoHeader:"Ecotourism",
        h1PraFamiliaHeader:"For the family",
        h1HistoriaeMuseusHeader:"History and museums",
        h1FeirasHeader:"Fairs",
        p01:"One of the largest agricultural events in Latin America",
        iconEx1:"Gastronomy",
        iconEx2:"Shows",
        iconEx3:"Business",
        iconEx4:"Exhibitions",
        p02:"The event has been running for 6 decades and is an open space for people of all ages, featuring everything from popular country music shows to animal exhibitions, agricultural technology, a food court with all kinds of food, and business opportunities.",
        saberMaisExpo:"Learn more",
        maisEventos:"More upcoming events",
        p03:"Click on what you prefer to know more",
        p04:"Or you can follow all local events on the Visite Londrina website",
        h1Ecoturismo:"Ecotourism in Londrina",
        p05:"Hiking, trails, fishing, and camping?",
        p06:"The highest point in Paraná, located 135km from Londrina",
        palink:"Learn more",
        p07:"A huge 116-meter-high waterfall located 76km from Londrina",
        apcLink:"Learn more",
        h4Parquegodoy:"Mata dos Godoy Park",
        p08:"A park full of trails within a sub-tropical forest 18km from Londrina",
        pmgLink:"Learn more",
        h4ParqueMAT:"Arthur Thomas Municipal Park",
        p09:"An urban park of 85 hectares located inside the city",
        patLink:"Learn more",
        h4pesqueiro:"Toca do Jacaré Fishing Spot",
        p10:"13km from Londrina there is a famous 'catch and pay' fishing spot",
        ptjLink:"Learn more",
        h1familial:"The best places for the family",
        p11:"A perfect place for a peaceful walk and a picnic",
        p12:"A safe and spacious place full of nature around",
        h1museuscul:"Museums and culture",
        p13:"Explore the history of Londrina and dive into local culture",
        h3museusHL:"Londrina Historical Museum",
        smallFM:"Photo of the historical museum",
        p14:"The Padre Carlos Weiss Historical Museum of Londrina was inaugurated on September 18, 1970, at the former Faculty of Philosophy, Sciences, and Letters of Londrina. <br> From 1974, the museum was attached to UEL as a supplementary body, linked to the university's Center for Letters and Human Sciences. On December 10, 1986, the museum moved to the building that once belonged to Londrina's second railway station, ceded by the City Hall. <br> The building of today's Historical Museum presents characteristically eclectic architectural lines.",
        smallfW:"Source: Wikipedia",
        h3maL:"Londrina Art Museum",
        smallfma:"Photo of the Art Museum",
        p15:"The Londrina Art Museum is a Brazilian museum in the municipality of Londrina, in Paraná. <br> It was created by decree nº 172 on May 12, 1993, the date it was inaugurated. The inaugural exhibition displayed the sculpture The Eternal Spring, by Auguste Rodin, as well as works by the artists Menotti Del Pichia and Vitor Brecheret[1]. <br> The building that houses the museum is in the central region of Londrina, on Sergipe street, and is listed as Historical and Artistic Heritage. It was designed in 1952 by the architect João Batista Vilanova Artigas and was used as the city's bus terminal until 1988, when the terminal moved.",
        h1cFeiras:"Discover the fairs",
        pFeira1:"Nothing like getting lost in a fair filled with sensations and flavors",
        pFeira2:"Access the link below and discover the best fairs in Londrina",
        mapFeiras:"Map of fairs",
        oqfl:"What to do in Londrina?",
        termU:"Terms of use",
        p16:"Developed by"
    },
    es:{
        logopc:"¿Qué hacer en Londrina?",
        entrarEmContato:"Contactar",
        contribuir: "Contribuir",
        sobreLondrina:"Sobre Londrina", 
        h2HeaderLogo:"¿Qué hacer en Londrina?",
        descobrirButton:"Descubrir",
        h1EventosHeader:"Eventos",
        slideButton:"Descubrir",
        h1EcoturismoHeader:"Ecoturismo",
        h1PraFamiliaHeader:"Para la familia",
        h1HistoriaeMuseusHeader:"Historia y museos",
        h1FeirasHeader:"Ferias",
        p01:"Uno de los mayores eventos agropecuarios de América Latina",
        iconEx1:"Gastronomía",
        iconEx2:"Espectáculos",
        iconEx3:"Negocios",
        iconEx4:"Exposiciones",
        p02:"El evento se celebra desde hace 6 décadas y es un espacio abierto para público de todas las edades, que incluye desde espectáculos de música country notables hasta exposiciones de animales, tecnología agrícola, un patio de comidas con todo tipo de alimentos y oportunidades de negocio.",
        saberMaisExpo:"Saber más",
        maisEventos:"Más eventos programados",
        p03:"Haz clic en lo que prefieras para saber más",
        p04:"O puedes seguir todos los eventos locales en el sitio web Visite Londrina",
        h1Ecoturismo:"Ecoturismo en Londrina",
        p05:"¿Senderismo, rutas, pesca y camping?",
        p06:"El punto más alto de Paraná, situado a 135km de Londrina",
        palink:"Saber más",
        p07:"Una enorme cascada de 116 metros de altura que se encuentra a 76km de Londrina",
        apcLink:"Saber más",
        h4Parquegodoy:"Parque mata dos Godoy",
        p08:"Un parque lleno de senderos dentro de un bosque sub-tropical a 18km de Londrina",
        pmgLink:"Saber más",
        h4ParqueMAT:"Parque municipal Arthur Thomas",
        p09:"Un parque urbano de 85 hectáreas que se encuentra dentro de la ciudad",
        patLink:"Saber más",
        h4pesqueiro:"Pesquero Toca do Jacaré",
        p10:"A 13km de Londrina se encuentra un famoso pesquero en la modalidad de 'pesca y paga'",
        ptjLink:"Saber más",
        h1familial:"Los mejores lugares para la familia",
        p11:"Un lugar perfecto para pasear tranquilamente y hacer un picnic",
        p12:"Un lugar seguro y espacioso, rodeado de naturaleza",
        h1museuscul:"Museos y cultura",
        p13:"Explora la historia de Londrina y sumérgete en la cultura local",
        h3museusHL:"Museo Histórico de Londrina",
        smallFM:"Foto del museo histórico",
        p14:"El Museo Histórico de Londrina Padre Carlos Weiss fue inaugurado el 18 de septiembre de 1970, en la antigua Facultad de Filosofía, Ciencias y Letras de Londrina. <br> A partir de 1974, el museo se adjunta a la UEL como órgano suplementario, estando vinculado al Centro de Letras y Ciencias Humanas de la universidad. El 10 de diciembre de 1986, el museo pasa a ocupar el edificio que antes pertenecía a la segunda estación de ferrocarril de Londrina, cedido por el Ayuntamiento. <br> El edificio del actual Museo Histórico presenta líneas arquitectónicas característicamente eclécticas.",
        smallfW:"Fuente: Wikipedia",
        h3maL:"Museo de Arte de Londrina",
        smallfma:"Foto del Museo de Arte",
        p15:"El Museo de Arte de Londrina es un museo brasileño en el municipio de Londrina, en Paraná. <br> Fue creado por el decreto nº 172 el 12 de mayo de 1993, fecha en la que fue inaugurado. La exposición inaugural exhibió la escultura La Eterna Primavera, de Auguste Rodin, y también obras de los artistas Menotti Del Pichia y Vitor Brecheret[1]. <br>El edificio que alberga el museo se encuentra en la región central de Londrina, en la calle Sergipe, y está catalogado como Patrimonio Histórico y Artístico. Fue diseñado en 1952 por el arquitecto João Batista Vilanova Artigas y se utilizó como terminal de autobuses de la ciudad hasta 1988, cuando la terminal se trasladó.",
        h1cFeiras:"Descubre las ferias",
        pFeira1:"Nada como perderse en una feria llena de sensaciones y sabores",
        pFeira2:"Accede al enlace de abajo y descubre las mejores ferias en Londrina",
        mapFeiras:"Mapa de ferias",
        oqfl:"¿Qué hacer en Londrina?",
        termU:"Términos de uso",
        p16:"Desarrollado por"
    }
}

// Variáveis para a tradução
const logopc = document.getElementById('h2HeaderLogopc')
const entrarEmContato = document.getElementById('entrarEmContato');
const contribuir = document.getElementById('contribuir');
const sobreLondrina = document.getElementById('sobre-londrina');
const translate = document.getElementById('translate');
const h2HeaderLogo = document.getElementById('h2HeaderLogo');
const descobrirButton = document.getElementById('descobrirButton');
const h1EventosHeader = document.getElementById('h1EventosHeader');
const slide1Button = document.getElementById('slide1Button');
const h1EcoturismoHeader = document.getElementById('h1EcoturismoHeader');
const slide2Button = document.getElementById('slide2Button');
const h1PraFamiliaHeader = document.getElementById('h1PraFamiliaHeader');
const slide4Button = document.getElementById('slide4Button');
const h1HistoriaeMuseusHeader = document.getElementById('h1HistoriaeMuseusHeader');
const slide5Button = document.getElementById('slide5Button');
const h1FeirasHeader = document.getElementById('h1FeirasHeader');
const slide6Button = document.getElementById('slide6Button');
const p01 = document.getElementById('p01');
const iconEx1 = document.getElementById('iconEx1');
const iconEx2 = document.getElementById('iconEx2');
const iconEx3 = document.getElementById('iconEx3');
const iconEx4 = document.getElementById('iconEx4');
const p02 = document.getElementById('p02');
const saberMaisExpo = document.getElementById('saberMaisExpo');
const maisEventos = document.getElementById('maisEventos');
const p03 = document.getElementById('p03');
const p04 = document.getElementById('p04');
const h1Ecoturismo = document.getElementById('h1Ecoturismo');
const p05 = document.getElementById('p05');
const p06 = document.getElementById('p06');
const palink = document.getElementById('palink');
const p07 = document.getElementById('p07');
const apcLink = document.getElementById('apcLink');
const h4Parquegodoy = document.getElementById('h4Parquegodoy');
const p08 = document.getElementById('p08');
const pmgLink = document.getElementById('pmgLink');
const h4ParqueMAT = document.getElementById('h4ParqueMAT');
const p09 = document.getElementById('p09');
const patLink = document.getElementById('patLink');
const h4pesqueiro = document.getElementById('h4pesqueiro');
const p10 = document.getElementById('p10');
const ptjLink = document.getElementById('ptjLink');
const h1familial = document.getElementById('h1familial');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');
const h1museuscul = document.getElementById('h1museuscul');
const p13 = document.getElementById('p13');
const h3museusHL = document.getElementById('h3museusHL');
const smallFM = document.getElementById('smallFM');
const p14 = document.getElementById('p14');
const smallfW = document.querySelectorAll('#smallfW');
const h3maL = document.getElementById('h3maL');
const smallfma = document.getElementById('smallfma');
const p15 = document.getElementById('p15');
const h1cFeiras = document.getElementById('h1cFeiras');
const pFeira1 = document.getElementById('pFeira1');
const pFeira2 = document.getElementById('pFeira2');
const mapFeiras = document.getElementById('mapFeiras');
const oqfl = document.getElementById('oqfl');
const termU = document.getElementById('termU');
const p16 = document.getElementById('p16');
const linkport = document.getElementById('linkport');

const ptBr = document.getElementById('ptBr')
const en = document.getElementById('en')
const es = document.getElementById('es')

en.addEventListener('click', () =>{
    logopc.textContent = idiomas.en.logopc;
    entrarEmContato.textContent = idiomas.en.entrarEmContato;
    contribuir.textContent = idiomas.en.contribuir;
    sobreLondrina.textContent = idiomas.en.sobreLondrina;
    h2HeaderLogo.textContent = idiomas.en.h2HeaderLogo;
    descobrirButton.textContent = idiomas.en.descobrirButton;
    h1EventosHeader.textContent = idiomas.en.h1EventosHeader;
    slide1Button.textContent = idiomas.en.slideButton;
    h1EcoturismoHeader.textContent = idiomas.en.h1EcoturismoHeader;
    slide2Button.textContent = idiomas.en.slideButton;
    h1PraFamiliaHeader.textContent = idiomas.en.h1PraFamiliaHeader;
    slide4Button.textContent = idiomas.en.slideButton;
    h1HistoriaeMuseusHeader.textContent = idiomas.en.h1HistoriaeMuseusHeader;
    slide5Button.textContent = idiomas.en.slideButton;
    h1FeirasHeader.textContent = idiomas.en.h1FeirasHeader;
    slide6Button.textContent = idiomas.en.slideButton;
    p01.textContent = idiomas.en.p01;
    iconEx1.textContent = idiomas.en.iconEx1;
    iconEx2.textContent = idiomas.en.iconEx2;
    iconEx3.textContent = idiomas.en.iconEx3;
    iconEx4.textContent = idiomas.en.iconEx4;
    p02.textContent = idiomas.en.p02;
    saberMaisExpo.textContent = idiomas.en.saberMaisExpo;
    maisEventos.textContent = idiomas.en.maisEventos;
    p03.textContent = idiomas.en.p03;
    p04.textContent = idiomas.en.p04;
    h1Ecoturismo.textContent = idiomas.en.h1Ecoturismo;
    p05.textContent = idiomas.en.p05;
    p06.textContent = idiomas.en.p06;
    palink.textContent = idiomas.en.palink;
    p07.textContent = idiomas.en.p07;
    apcLink.textContent = idiomas.en.apcLink;
    h4Parquegodoy.textContent = idiomas.en.h4Parquegodoy;
    p08.textContent = idiomas.en.p08;
    pmgLink.textContent = idiomas.en.pmgLink;
    h4ParqueMAT.textContent = idiomas.en.h4ParqueMAT;
    p09.textContent = idiomas.en.p09;
    patLink.textContent = idiomas.en.patLink;
    h4pesqueiro.textContent = idiomas.en.h4pesqueiro;
    p10.textContent = idiomas.en.p10;
    ptjLink.textContent = idiomas.en.ptjLink;
    h1familial.textContent = idiomas.en.h1familial;
    p11.textContent = idiomas.en.p11;
    p12.textContent = idiomas.en.p12;
    h1museuscul.textContent = idiomas.en.h1museuscul;
    p13.textContent = idiomas.en.p13;
    h3museusHL.textContent = idiomas.en.h3museusHL;
    smallFM.textContent = idiomas.en.smallFM;
    p14.innerHTML = idiomas.en.p14;
    smallfW.forEach(element => element.textContent = idiomas.en.smallfW);
    h3maL.textContent = idiomas.en.h3maL;
    smallfma.textContent = idiomas.en.smallfma;
    p15.innerHTML = idiomas.en.p15;
    h1cFeiras.textContent = idiomas.en.h1cFeiras;
    pFeira1.textContent = idiomas.en.pFeira1;
    pFeira2.textContent = idiomas.en.pFeira2;
    mapFeiras.textContent = idiomas.en.mapFeiras;
    oqfl.textContent = idiomas.en.oqfl;
    termU.textContent = idiomas.en.termU;
    p16.innerHTML = idiomas.en.p16;
})
es.addEventListener('click', () =>{
    logopc.textContent = idiomas.es.logopc;
    entrarEmContato.textContent = idiomas.es.entrarEmContato;
    contribuir.textContent = idiomas.es.contribuir;
    sobreLondrina.textContent = idiomas.es.sobreLondrina;
    h2HeaderLogo.textContent = idiomas.es.h2HeaderLogo;
    descobrirButton.textContent = idiomas.es.descobrirButton;
    h1EventosHeader.textContent = idiomas.es.h1EventosHeader;
    slide1Button.textContent = idiomas.es.slideButton;
    h1EcoturismoHeader.textContent = idiomas.es.h1EcoturismoHeader;
    slide2Button.textContent = idiomas.es.slideButton;
    h1PraFamiliaHeader.textContent = idiomas.es.h1PraFamiliaHeader;
    slide4Button.textContent = idiomas.es.slideButton;
    h1HistoriaeMuseusHeader.textContent = idiomas.es.h1HistoriaeMuseusHeader;
    slide5Button.textContent = idiomas.es.slideButton;
    h1FeirasHeader.textContent = idiomas.es.h1FeirasHeader;
    slide6Button.textContent = idiomas.es.slideButton;
    p01.textContent = idiomas.es.p01;
    iconEx1.textContent = idiomas.es.iconEx1;
    iconEx2.textContent = idiomas.es.iconEx2;
    iconEx3.textContent = idiomas.es.iconEx3;
    iconEx4.textContent = idiomas.es.iconEx4;
    p02.textContent = idiomas.es.p02;
    saberMaisExpo.textContent = idiomas.es.saberMaisExpo;
    maisEventos.textContent = idiomas.es.maisEventos;
    p03.textContent = idiomas.es.p03;
    p04.textContent = idiomas.es.p04;
    h1Ecoturismo.textContent = idiomas.es.h1Ecoturismo;
    p05.textContent = idiomas.es.p05;
    p06.textContent = idiomas.es.p06;
    palink.textContent = idiomas.es.palink;
    p07.textContent = idiomas.es.p07;
    apcLink.textContent = idiomas.es.apcLink;
    h4Parquegodoy.textContent = idiomas.es.h4Parquegodoy;
    p08.textContent = idiomas.es.p08;
    pmgLink.textContent = idiomas.es.pmgLink;
    h4ParqueMAT.textContent = idiomas.es.h4ParqueMAT;
    p09.textContent = idiomas.es.p09;
    patLink.textContent = idiomas.es.patLink;
    h4pesqueiro.textContent = idiomas.es.h4pesqueiro;
    p10.textContent = idiomas.es.p10;
    ptjLink.textContent = idiomas.es.ptjLink;
    h1familial.textContent = idiomas.es.h1familial;
    p11.textContent = idiomas.es.p11;
    p12.textContent = idiomas.es.p12;
    h1museuscul.textContent = idiomas.es.h1museuscul;
    p13.textContent = idiomas.es.p13;
    h3museusHL.textContent = idiomas.es.h3museusHL;
    smallFM.textContent = idiomas.es.smallFM;
    p14.innerHTML = idiomas.es.p14;
    smallfW.forEach(element => element.textContent = idiomas.es.smallfW);
    h3maL.textContent = idiomas.es.h3maL;
    smallfma.textContent = idiomas.es.smallfma;
    p15.innerHTML = idiomas.es.p15;
    h1cFeiras.textContent = idiomas.es.h1cFeiras;
    pFeira1.textContent = idiomas.es.pFeira1;
    pFeira2.textContent = idiomas.es.pFeira2;
    mapFeiras.textContent = idiomas.es.mapFeiras;
    oqfl.textContent = idiomas.es.oqfl;
    termU.textContent = idiomas.es.termU;
    p16.innerHTML = idiomas.es.p16;
  
})
ptBr.addEventListener('click', () =>{
    logopc.textContent = idiomas.br.logopc;
    entrarEmContato.textContent = idiomas.br.entrarEmContato;
    contribuir.textContent = idiomas.br.contribuir;
    sobreLondrina.textContent = idiomas.br.sobreLondrina;
    h2HeaderLogo.textContent = idiomas.br.h2HeaderLogo;
    descobrirButton.textContent = idiomas.br.descobrirButton;
    h1EventosHeader.textContent = idiomas.br.h1EventosHeader;
    slide1Button.textContent = idiomas.br.slideButton;
    h1EcoturismoHeader.textContent = idiomas.br.h1EcoturismoHeader;
    slide2Button.textContent = idiomas.br.slideButton;
    h1PraFamiliaHeader.textContent = idiomas.br.h1PraFamiliaHeader;
    slide4Button.textContent = idiomas.br.slideButton;
    h1HistoriaeMuseusHeader.textContent = idiomas.br.h1HistoriaeMuseusHeader;
    slide5Button.textContent = idiomas.br.slideButton;
    h1FeirasHeader.textContent = idiomas.br.h1FeirasHeader;
    slide6Button.textContent = idiomas.br.slideButton;
    p01.textContent = idiomas.br.p01;
    iconEx1.textContent = idiomas.br.iconEx1;
    iconEx2.textContent = idiomas.br.iconEx2;
    iconEx3.textContent = idiomas.br.iconEx3;
    iconEx4.textContent = idiomas.br.iconEx4;
    p02.textContent = idiomas.br.p02;
    saberMaisExpo.textContent = idiomas.br.saberMaisExpo;
    maisEventos.textContent = idiomas.br.maisEventos;
    p03.textContent = idiomas.br.p03;
    p04.textContent = idiomas.br.p04;
    h1Ecoturismo.textContent = idiomas.br.h1Ecoturismo;
    p05.textContent = idiomas.br.p05;
    p06.textContent = idiomas.br.p06;
    palink.textContent = idiomas.br.palink;
    p07.textContent = idiomas.br.p07;
    apcLink.textContent = idiomas.br.apcLink;
    h4Parquegodoy.textContent = idiomas.br.h4Parquegodoy;
    p08.textContent = idiomas.br.p08;
    pmgLink.textContent = idiomas.br.pmgLink;
    h4ParqueMAT.textContent = idiomas.br.h4ParqueMAT;
    p09.textContent = idiomas.br.p09;
    patLink.textContent = idiomas.br.patLink;
    h4pesqueiro.textContent = idiomas.br.h4pesqueiro;
    p10.textContent = idiomas.br.p10;
    ptjLink.textContent = idiomas.br.ptjLink;
    h1familial.textContent = idiomas.br.h1familial;
    p11.textContent = idiomas.br.p11;
    p12.textContent = idiomas.br.p12;
    h1museuscul.textContent = idiomas.br.h1museuscul;
    p13.textContent = idiomas.br.p13;
    h3museusHL.textContent = idiomas.br.h3museusHL;
    smallFM.textContent = idiomas.br.smallFM;
    p14.innerHTML = idiomas.br.p14;
    smallfW.forEach(element => element.textContent = idiomas.br.smallfW);
    h3maL.textContent = idiomas.br.h3maL;
    smallfma.textContent = idiomas.br.smallfma;
    p15.innerHTML = idiomas.br.p15;
    h1cFeiras.textContent = idiomas.br.h1cFeiras;
    pFeira1.textContent = idiomas.br.pFeira1;
    pFeira2.textContent = idiomas.br.pFeira2;
    mapFeiras.textContent = idiomas.br.mapFeiras;
    oqfl.textContent = idiomas.br.oqfl;
    termU.textContent = idiomas.br.termU;
    p16.innerHTML = idiomas.br.p16;
  
})