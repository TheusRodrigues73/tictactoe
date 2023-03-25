export let switchTurn = () => {
    let turn = document.querySelector('#turn')
    
    if(turn.dataset.turn == 'x'){
        turn.innerText = 'Turn: O'
        turn.dataset.turn = 'o'
    }
    else{
        turn.innerText = 'Turn: X'
        turn.dataset.turn = 'x'
    }
}