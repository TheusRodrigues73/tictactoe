const buttonsSquares = document.querySelectorAll('.square')
let vBoard = []
let turnPlayer = ''
let win = false

function updateTurnPlayer(){
    const inputPlayer = document.getElementById(turnPlayer)
    if(turnPlayer === 'playerXName'){
        document.querySelector('h2').classList.remove('playerOLabel')
        document.querySelector('h2').classList.add('playerXLabel')
    }else{
        document.querySelector('h2').classList.remove('playerXLabel')
        document.querySelector('h2').classList.add('playerOLabel')
    }
    document.querySelector('#turnPlayer').innerText = inputPlayer.value
}

function initializeGame(ev){
    let inputPlayerX = document.querySelector('#playerXName')
    let inputPlayerO = document.querySelector('#playerOName')
    if(inputPlayerX.value !== '' && inputPlayerO.value !== ''){
        let startButton = ev.currentTarget
        startButton.innerText = 'recomeçar'
        win = false
        vBoard = [['','',''],['','',''],['','','']]
        document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
        turnPlayer = 'playerXName'
        updateTurnPlayer()
        buttonsSquares.forEach(function(element){
            element.innerText = ''
            element.classList.remove('win')
            element.classList.add('cursor-pointer')
            element.addEventListener('click', playOut)
    })}else{
        alert('Insira o Nome dos jogadores!!!')
    }
}

function playOut(ev){
    let square = ev.currentTarget
    let region = square.dataset.region
    const rowColumn = region.split('.')
    let row = rowColumn[0]
    let column = rowColumn[1]
    if(turnPlayer === 'playerXName'){
        square.innerText = 'X'
        vBoard[row][column] = 'x'
    }else{
        square.innerText = 'O'
        vBoard[row][column] = 'o'
    }
    console.clear()
    console.table(vBoard)
    
    disableSquare(square)

    let winerSquares = winPlayed()
    if(win === true){
        const playerName = document.getElementById(turnPlayer)
        buttonsSquares.forEach(disableSquare)
        buttonsSquares.forEach(function(element){
            if(winerSquares.includes(element.dataset.region)){
                element.classList.add('win')
            }
        })
        document.querySelector('h2').innerHTML = `Vencedor: ${playerName.value}`

    }else{
        if (vBoard.flat().includes('')){
            turnPlayer === 'playerXName'? turnPlayer = 'playerOName' : turnPlayer = 'playerXName'
            updateTurnPlayer()
        }else{
            document.querySelector('h2').innerHTML = 'Velha!'
        }
    }
    
}

function winPlayed(){
    let winerSquaresConfirm = []
    if(vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]){
        winerSquaresConfirm.push('0.0','0.1','0.2')
        win = true
    }if(vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]){
        winerSquaresConfirm.push('1.0','1.1','1.2')
        win = true
    }if(vBoard[2][0] &&  vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]){
        winerSquaresConfirm.push('2.0','2.1','2.2')
        win = true
    }if(vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0]){
        winerSquaresConfirm.push('0.0','1.0','2.0')
        win = true
    }if(vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]){
        winerSquaresConfirm.push('0.1','1.1','2.1')
        win = true
    }if(vBoard[0][2] && vBoard[0][2]===vBoard[1][2] && vBoard[0][2]===vBoard[2][2]){
        winerSquaresConfirm.push('0.2','1.2','2.2')
        win = true
    }if(vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]){
        winerSquaresConfirm.push('0.0','1.1','2.2')
        win = true
    }if(vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0]){
        winerSquaresConfirm.push('0.2','1.1','2.0')
        win = true
    }
    return winerSquaresConfirm
}

function disableSquare(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', playOut)
}

document.querySelector('#startPlay').addEventListener('click', initializeGame)