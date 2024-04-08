//VARIAVEIS
var chosedWord = 0

//FUNCOES
function eventListenerCreator() {
    for (let i = 97; i <= 122; i++) {
        let letra = String.fromCharCode(i);
        const element = document.querySelector(`#${letra}`)
        element.addEventListener('click', () => {
            console.log(letra)
        })
        //console.log(letra);
    }
}

function testLetter() {
    
}

function randomWord() {
    let number = Math.floor(Math.random() * wordList.length)
    chosedWord = wordList[number]
    console.log(chosedWord)
}

//EVENTOS



//START EVENTS
eventListenerCreator()
randomWord()