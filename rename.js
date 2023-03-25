export let renameFunction = (ev) => {

    document.querySelector('#pointsPlayer1').innerText = pointP1
    document.querySelector('#pointsPlayer2').innerText = pointP2
    let player = ev.currentTarget.parentNode
    let playerBtn = ev.currentTarget
    let i = playerBtn.dataset.player
    let input = document.createElement('input')
    input.type = 'text'
    input.classList.add('playerInputName')
    input.addEventListener('blur', function(ev){
        let newPlayer = document.createElement('button')

        if(input.value == ''){
            newPlayer.type = 'button'
            newPlayer.classList.add('player')
            newPlayer.dataset.player = i
            newPlayer.innerText = `Player ${i} (${i == 1 ? 'X' : 'O'}):`
            newPlayer.addEventListener('click', renameFunction)
        }
        else{
            newPlayer.type = 'button'
            newPlayer.classList.add('player')
            newPlayer.dataset.player = i
            newPlayer.innerText = `${input.value} (${i == 1 ? 'X' : 'O'}):`
            newPlayer.addEventListener('click', renameFunction)
        }
        player.removeChild(input)
        player.appendChild(newPlayer)
    })

    player.removeChild(playerBtn)
    player.appendChild(input)
    input.focus()

} 