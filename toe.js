import { switchTurn } from "./turn.js"
import { switchTheme } from "./theme.js"
import { move } from "./game.js"
import { reloadGame  } from "./reset.js"
import { renameFunction } from "./rename.js"

let player = document.querySelectorAll('.player')
let turn = document.querySelector('#turn')
let theme = document.querySelector('.theme')
let squares = document.querySelectorAll('.square')
let reset = document.querySelector('#restart')

player.forEach(p => p.addEventListener('click', renameFunction))
turn.addEventListener('click', switchTurn)
turn.addEventListener('click', reloadGame)
theme.addEventListener('click', switchTheme)
squares.forEach(square => square.addEventListener('click', move))
reset.addEventListener('click', reloadGame)