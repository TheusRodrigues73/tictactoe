import { switchTurn } from "./turn.js"
import { victorys } from "./win.js"

export let vGame = [['','',''],['','',''],['','','']]

export let move = (ev) => {
    let card = ev.currentTarget
    let turn = document.querySelector('#turn')

    if(turn.dataset.turn == 'x'){
        card.innerText = 'X'
        card.removeEventListener('click', move)
        switchTurn()

    }else{
        card.innerText = 'O'
        card.removeEventListener('click', move)
        switchTurn()
        card.classList.add('block')
    }

    let squares = document.querySelectorAll('.square')
    squares.forEach(squ => {
        if (squ.innerText !== ''){
            let region = squ.dataset.region.split('.')
            vGame[region[0]][region[1]] = squ.innerText
            console.clear()
            console.table(vGame)
        }
    })

    victorys()
}
