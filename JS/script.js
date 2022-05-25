const toastTrigger = document.getElementById('servicesToast')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const cTrigger = document.getElementById('contactToast')
const cLiveExample = document.getElementById('liveToast')
if (cTrigger) {
  cTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(cLiveExample)

    toast.show()
  })
}

// my js

// tema 1
// input
const tombolTema = document.getElementById('Tombol')

const gantiListActive_1 = document.querySelectorAll('.gantiListActive_1')[0]
const gantiListActive_2 = document.querySelectorAll('.gantiListActive_2')[0]
const gantiListActive_3 = document.querySelectorAll('.gantiListActive_3')[0]

// output
const gantiWarnaText = document.querySelectorAll('.gantiTemaText')
const gantiTemaImg = document.querySelectorAll('.gantiTemaImg')
const gantiTemaMain= document.querySelectorAll('.gantiTemaMain')
const gantishadowTema= document.querySelectorAll('.gantishadowTema')
const gantiBackgroundTema= document.querySelectorAll('.gantiBackgroundTema')
const gantiTextActive_1= document.querySelectorAll('.gantiTextActive_1')[0]
const gantiTextActive_2= document.querySelectorAll('.gantiTextActive_2')[0]
const gantiTextActive_3= document.querySelectorAll('.gantiTextActive_3')[0]

// text warna
for(let i = 0; i < gantiWarnaText.length; i++) {
  tombolTema.addEventListener('click', function() {
    gantiWarnaText[i].classList.toggle('temaDuaText')
  })
}

// img warna
for(let i = 0; i < gantiTemaImg.length; i++) {
  tombolTema.addEventListener('click', function() {
    gantiTemaImg[i].classList.toggle('temaImg')
  })
}

// main tema
for(let i = 0; i < gantiTemaMain.length; i++) {
  tombolTema.addEventListener('click', function() {
    gantiTemaMain[i].classList.toggle('temaMain')
  })
}

// shadowTema warna
for(let i = 0; i < gantishadowTema.length; i++) {
  tombolTema.addEventListener('click', function() {
    gantishadowTema[i].classList.toggle('shadowTema')
  })
}

// background
for(let i = 0; i < gantiBackgroundTema.length; i++) {
  tombolTema.addEventListener('click', function() {
    gantiBackgroundTema[i].classList.toggle('BackgroundTema')
  })

  // list
  tombolTema.addEventListener('click', function() {
    gantiTextActive_1.classList.toggle('TextActive_1')
  })
  // list 2
  tombolTema.addEventListener('click', function() {
    gantiTextActive_2.classList.toggle('TextActive_2')
  })
  // list 3
  tombolTema.addEventListener('click', function() {
    gantiTextActive_3.classList.toggle('TextActive_3')
  })
}

// list item portfolio
  // list 1
  // gantiListActive_1.addEventListener('click', function() {
  //   gantiTextActive_1.classList.toggle('TextActive_1')
  // })
  // // list 2
  // gantiListActive_2.addEventListener('click', function() {
  //   gantiTextActive_2.classList.toggle('TextActive_2')
  // })
  // // list 3
  // gantiListActive_3.addEventListener('click', function() {
  //   gantiTextActive_3.classList.toggle('TextActive_3')
  // })
// end tema 1