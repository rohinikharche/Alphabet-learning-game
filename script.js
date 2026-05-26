let parentContainer = document.getElementById('buttonGrid')

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function playSound(soundPath){
    let audio = new Audio(soundPath)
    audio.play()
}
letters.split("").forEach((letter) => {
    let letterButton = document.createElement('button')
    letterButton.textContent = letter

    parentContainer.appendChild(letterButton)

    letterButton.addEventListener('click', () => {
        let soundPath = `./sounds/${letter}.wav`
        playSound(soundPath)

    })
})

document.addEventListener('keydown', (event) => {
    let letter = event.key.toUpperCase()
    if(letters.includes(letter)){
    let soundPath = `./sounds/${letter}.wav`
    playSound(soundPath)

    }

})