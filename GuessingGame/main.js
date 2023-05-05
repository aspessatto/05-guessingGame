//variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Função callback: Quando a função é um argumento de outra função
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()

      if (xAttempts == 1) {
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativa!`
      } else {
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas!`
      }
      xAttempts++
    } else if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
      alert('Digite um número apenas entre 0 e 10')
    } else {
      document.querySelector('#error').classList.remove('errorhide')
      xAttempts++
    }
    inputNumber.value = "" //para resetar o valor do input
    }

function handleBackClick () {
  toggleScreen()
  document.querySelector('#error').classList.add('errorhide')
  xAttempts = 1
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterClick (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleBackClick()
  }
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleBackClick)
document.addEventListener('keydown', enterClick)