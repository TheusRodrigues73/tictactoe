import { move, vGame } from './game.js'
import { points } from './points.js'

export let victorys = () => {
    let squares = document.querySelectorAll('.square')
    let winnerSquares = []
    let win = false

    if(vGame[0][0] && vGame[0][0] === vGame[0][1] && vGame[0][0] === vGame[0][2]){
        winnerSquares.push('0.0','0.1','0.2')
        win = true
    }if(vGame[1][0] && vGame[1][0] === vGame[1][1] && vGame[1][0] === vGame[1][2]){
        winnerSquares.push('1.0','1.1','1.2')
        win = true
    }if(vGame[2][0] &&  vGame[2][0] === vGame[2][1] && vGame[2][0] === vGame[2][2]){
        winnerSquares.push('2.0','2.1','2.2')
        win = true
    }if(vGame[0][0] && vGame[0][0] === vGame[1][0] && vGame[0][0] === vGame[2][0]){
        winnerSquares.push('0.0','1.0','2.0')
        win = true
    }if(vGame[0][1] && vGame[0][1] === vGame[1][1] && vGame[0][1] === vGame[2][1]){
        winnerSquares.push('0.1','1.1','2.1')
        win = true
    }if(vGame[0][2] && vGame[0][2]===vGame[1][2] && vGame[0][2]===vGame[2][2]){
        winnerSquares.push('0.2','1.2','2.2')
        win = true
    }if(vGame[0][0] && vGame[0][0] === vGame[1][1] && vGame[0][0] === vGame[2][2]){
        winnerSquares.push('0.0','1.1','2.2')
        win = true
    }if(vGame[0][2] && vGame[0][2] === vGame[1][1] && vGame[0][2] === vGame[2][0]){
        winnerSquares.push('0.2','1.1','2.0')
        win = true
    }

    if(win === true){
        squares.forEach(square => {
            square.removeEventListener('click', move)
            if (winnerSquares.includes(square.dataset.region)){
                square.classList.add('winnerSquare')
            }
        })
        points()
    }
}