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