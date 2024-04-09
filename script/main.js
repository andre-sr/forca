//VARIAVEIS
const olElement = document.querySelector('#word-ol')
const tryElement = document.querySelector('#try')
const modalWin = document.querySelector('#modal-win')
const modalLose = document.querySelector('#modal-lose')

var chosedWord
var remaingTry = 5
var countToWin = 0

//FUNCOES
function randomWord() {
    let number = Math.floor(Math.random() * wordList.length)
    chosedWord = wordList[number]
}

function creator() {
    for (let i = 0; i < chosedWord.length; i++) {
        let element = document.createElement('li')
        element.textContent = chosedWord[i]
        element.classList.add('unvisible')
        element.id = `_${i}`
        olElement.appendChild(element)
    }
    

    tryElement.textContent = remaingTry
}

function eventListenerCreator() {
    for (let i = 97; i <= 122; i++) {
        let letra = String.fromCharCode(i);
        const element = document.querySelector(`#${letra}`)
        element.addEventListener('click', () => {
            testLetter(letra)
            console.log(letra)
        })
    }
}

function testLetter(letter) {
    let testeRecord = false
    for (let i = 0; i < chosedWord.length; i++) {
        if (letter == chosedWord[i]) {
            trueTest(letter, i)
            testeRecord = true
        } 
    }
    if (testeRecord === false) {
        falseTeste(letter)
    }
    if (remaingTry === 0) {
        // fail screen
        console.log('Perdeu!')
        modalLose.classList.remove('hidden')
    }
    if (countToWin === chosedWord.length) {
        console.log('Ganhou!')
        modalWin.classList.remove('hidden')
    }
}

function trueTest(letter, x) {
    console.log('é nois')
        let tempElement = document.querySelector(`#_${x}`)
        if (tempElement.textContent == letter) {
            tempElement.classList.remove('unvisible')
            countToWin = countToWin + 1
        }
}

function falseTeste(letter) {
    remaingTry = remaingTry - 1
    tryElement.textContent = remaingTry
    let letterElement = document.querySelector(`#${letter}`)
    letterElement.setAttribute('class', 'notclick')
    letterElement.style.color = "red"
    //resposta visual
}

function restartGame() {
    modalWin.classList.add('hidden')
    modalLose.classList.add('hidden')
    randomWord()
    creator()
    
}

//EVENTOS



//START EVENTS
eventListenerCreator()
randomWord()
creator()