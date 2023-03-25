import { move, vGame } from "./game.js"

export let reloadGame = () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.innerText = ''
        square.classList.remove('winnerSquare')
        square.addEventListener('click', move)
        vGame[0][0] = ''
        vGame[0][1] = ''
        vGame[0][2] = ''
        vGame[1][0] = ''
        vGame[1][1] = ''
        vGame[1][2] = ''
        vGame[2][0] = ''
        vGame[2][1] = ''
        vGame[2][2] = ''
    })
}
