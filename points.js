let pointP1 = 0
let pointP2 = 0

export let points = () => {
    let squares = document.querySelectorAll('.square')
    let playerWinner = ''

    squares.forEach(squ => {
        if (squ.classList.contains('winnerSquare')){
            playerWinner = squ.innerText
            return
        }
    })

    if (playerWinner === 'X'){
        pointP1++
        document.querySelector('#pointsPlayer1').innerText = pointP1
    }else if (playerWinner === 'O'){
        pointP2++
        document.querySelector('#pointsPlayer2').innerText = pointP2
    }
}
