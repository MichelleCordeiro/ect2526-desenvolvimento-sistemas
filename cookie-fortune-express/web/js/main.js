const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/2918')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let randomIndexToMsg = 0

screen1.querySelector('.cookie1').addEventListener('click', () => {
  changeScreen(), appearBrokenCookie1()
})
screen1.querySelector('.cookie2').addEventListener('click', () => {
  changeScreen(), appearBrokenCookie2()
})
screen1.querySelector('.cookie3').addEventListener('click', () => {
  changeScreen(), appearBrokenCookie3()
})
screen2.querySelector('button').addEventListener('click', changeScreen)
screen2.querySelector('#voltar').addEventListener('click', atualizaMsg)

const brokenCookie1 = screen2.querySelector('.brokenCookie1')
const brokenCookie2 = screen2.querySelector('.brokenCookie2')
const brokenCookie3 = screen2.querySelector('.brokenCookie3')

brokenCookie1.addEventListener('click', appearBrokenCookie1)
brokenCookie2.addEventListener('click', appearBrokenCookie2)
brokenCookie3.addEventListener('click', appearBrokenCookie3)

function changeScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  if (screen1.classList.contains('hide')) {
    audio.play()
  }
}

function appearBrokenCookie1() {
  brokenCookie1.classList.remove('hide')
  brokenCookie2.classList.add('hide')
  brokenCookie3.classList.add('hide')
}

function appearBrokenCookie2() {
  brokenCookie1.classList.add('hide')
  brokenCookie2.classList.remove('hide')
  brokenCookie3.classList.add('hide')
}

function appearBrokenCookie3() {
  brokenCookie1.classList.add('hide')
  brokenCookie2.classList.add('hide')
  brokenCookie3.classList.remove('hide')
}

function atualizaMsg() {
  window.location.reload()
}