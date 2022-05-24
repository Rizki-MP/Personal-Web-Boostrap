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

// output
const gantiWarnaText = document.querySelectorAll('.gantiTemaText')
const gantiTemaImg = document.querySelectorAll('.gantiTemaImg')
const gantiTemaMain= document.querySelectorAll('.gantiTemaMain')
const gantishadowTema= document.querySelectorAll('.gantishadowTema')
const gantiBackgroundTema= document.querySelectorAll('.gantiBackgroundTema')

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
}

// end tema 1