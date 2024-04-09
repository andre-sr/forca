//VARIAVEIS
const olElement = document.querySelector('#word-ol')
const tryElement = document.querySelector('#try')
tryElement
var chosedWord = 0
var remaingTry = 6

//FUNCOES
function randomWord() {
    let number = Math.floor(Math.random() * wordList.length)
    chosedWord = wordList[number]
    console.log(chosedWord)
}

function creator() {
    for (let i = 0; i < chosedWord.length; i++) {
        let element = document.createElement('li')
        element.textContent = chosedWord[i]
        element.classList.add('unvisible')
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
            trueTest(letter)
            testeRecord = true
        } 
    }
    if (testeRecord === false) {
        falseTeste(letter)
    }
    if (remaingTry === 0) {
        // fail screen
    }
}

function trueTest(letter) {
    console.log('é nois')
    let letterElement = document.querySelector(`#${letter}`)
    letterElement.classList.remove('unvisible')
}

function falseTeste(letter) {
    remaingTry = remaingTry - 1
    tryElement.textContent = remaingTry
    let letterElement = document.querySelector(`#${letter}`)
    letterElement.setAttribute('class', 'notclick')
    letterElement.style.color = "red"
    //resposta visual
}

//EVENTOS



//START EVENTS
eventListenerCreator()
randomWord()
creator()