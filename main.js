// alert(`Eu existo`)
// char - string 'um texto aqui'
// number - 1 2 3 4 9 11
// boolean - true ou false
// Objetos como conjuntos de atributos e funcionalidades
// Funções, variáveis e constantes
/*
;({
  name: 'carro',
  cor: 'vermelho'
})

function liquidificador(frutas) {
  alert(frutas)
}

liquidificador('maca e banana')

const pessoa = {
  name: 'Guilherme',
  age: 36,
  gender: 'Masculino',
  status: function () {
    alert(pessoa.name)
  }
}

pessoa.status()
*/

// DOM - Document Object Model (modelagem de documentos HTML em Javascript)

//O objeto document (que possui inúmeras propriedades e funcionalidades) aplica no body uma propriedade estilo que altera o background para vermelho.
document.body.style.background = 'white'

//Dentro de elementos com o id header, A constante nav recebe o valor .....
const nav = document.querySelector('#header nav')

//Dentro de nav, ache tudo o que tem toggle e atribua a constante toggle.
const toggle = document.querySelectorAll('nav .toggle')

//Exibe no console do navegador (área de desenvolvimento) os elementos com a variável toggle. É muito útil para verificar se os elementos que precisam existir estão de fato no código.
console.log(toggle)

//Variável let (let it change) substituiu a var

//Para cada elemento com toggle, registrar o elemento no console do navegador
for (const element of toggle) {
  console.log(element)
}

//Sempre que clicarmos em um elemento com toggle, uma função exibirá a mensagem 'Chegamos aqui!!'
/*for (const element of toggle) {
  element.addEventListener('click', function () {
    alert('Chegamos aqui!!')
  })
}
*/

//Quando der um clique, identifica a existência de show na lista de classes do HTML e troca esse registro, ou seja, se tiver, retira, e se não tiver, incluir a class show. Em termos práticos, abre e fecha o menu conforme os cliques nos ícones.
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//Fecha o menu quando clicar em um de seus itens.
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Mudar o header da página ao rolar a página.

//O código abaixo foi construído na aula 3 e evoluído na aula 4 com a organização dentro da function changeHeaderWhenScroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*=== TESTIMONIALS CAROUSEL SLIDER SWIPER ===*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ESTE PEDAÇO ABAIXO FOI COPIADO DO SWIPER, MAS SUBSTITUÍDO PELA ESTRUTURA ACIMA.
{
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); */

//FUNCIONALIDADE SCROLLREVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social`,
  {
    interval: 100
  }
)

//BOTÃO DE VOLTAR PARA O TOPO

/*Padrões de escrita de variáves: 
camelCase
  snake_case
    kebab-case
      PascalCase
        UPPER_CASE_SNAKE_CASE*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 2250) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//O código abaixo executa 2 funções ao rolar a página (scroll)
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
